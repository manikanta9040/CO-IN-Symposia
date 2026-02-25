import React, { useEffect, useMemo, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {
  clearSiteDataOverride,
  hasSiteDataOverride,
  saveSiteDataOverride,
  useSiteData
} from '../hooks/useSiteData';
import type { Conference } from '../types/siteData';

interface ConferenceFormState {
  title: string;
  date: string;
  location: string;
  description: string;
  status: Conference['status'];
  attendees: string;
  speakers: string;
  topics: string;
}

const initialConferenceForm: ConferenceFormState = {
  title: '',
  date: '',
  location: '',
  description: '',
  status: 'upcoming',
  attendees: '',
  speakers: '',
  topics: ''
};

const Admin: React.FC = () => {
  const { data: siteData, loading, error } = useSiteData((data) => data);
  const [form, setForm] = useState<ConferenceFormState>(initialConferenceForm);
  const [message, setMessage] = useState('');
  const [adminError, setAdminError] = useState('');
  const [overrideEnabled, setOverrideEnabled] = useState(hasSiteDataOverride());

  useEffect(() => {
    document.title = 'Admin | CO-IN Symposia';
  }, []);

  const nextConferenceId = useMemo(() => {
    if (!siteData || siteData.conferences.length === 0) {
      return 1;
    }
    return Math.max(...siteData.conferences.map((conference) => conference.id)) + 1;
  }, [siteData]);

  const updateField = (field: keyof ConferenceFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleAddConference = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!siteData) {
      setAdminError('Site data is not available yet. Please wait and try again.');
      setMessage('');
      return;
    }

    const parseOptionalNumber = (value: string): number | undefined => {
      const trimmed = value.trim();
      if (!trimmed) {
        return undefined;
      }

      const parsed = Number(trimmed);
      if (!Number.isFinite(parsed) || parsed < 0) {
        throw new Error('Attendees and Speakers must be positive numbers.');
      }

      return Math.floor(parsed);
    };

    try {
      const topics = form.topics
        .split(',')
        .map((topic) => topic.trim())
        .filter(Boolean);

      const newConference: Conference = {
        id: nextConferenceId,
        title: form.title.trim(),
        date: form.date.trim(),
        location: form.location.trim(),
        description: form.description.trim(),
        status: form.status,
        attendees: parseOptionalNumber(form.attendees),
        speakers: parseOptionalNumber(form.speakers),
        topics
      };

      const updatedSiteData = {
        ...siteData,
        conferences: [newConference, ...siteData.conferences]
      };

      saveSiteDataOverride(updatedSiteData);
      setOverrideEnabled(true);
      setForm(initialConferenceForm);
      setAdminError('');
      setMessage(`Conference added: ${newConference.title}`);
    } catch (submissionError) {
      setMessage('');
      setAdminError(
        submissionError instanceof Error ? submissionError.message : 'Unable to add conference.'
      );
    }
  };

  const handleResetOverride = () => {
    clearSiteDataOverride();
    setOverrideEnabled(false);
    setMessage('Admin override cleared. Data is reset to src/data defaults.');
    setAdminError('');
  };

  if (loading) {
    return (
      <div className="app">
        <Header />
        <main className="admin-page">
          <div className="admin-container">
            <h1>Admin</h1>
            <p>Loading data...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !siteData) {
    return (
      <div className="app">
        <Header />
        <main className="admin-page">
          <div className="admin-container">
            <h1>Admin</h1>
            <p className="admin-error">{error ?? 'Unable to load data.'}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="admin-page">
        <div className="admin-container">
          <h1>Admin Panel</h1>
          <p>Manage conference items and publish updates instantly using local admin override.</p>

          <div className="admin-status-row">
            <span className={`admin-badge ${overrideEnabled ? 'is-active' : ''}`}>
              {overrideEnabled ? 'Override Active' : 'Using Default Data'}
            </span>
            <span>Total conferences: {siteData.conferences.length}</span>
          </div>

          <div className="admin-actions">
            <button
              type="button"
              className="secondary-button admin-secondary-button"
              onClick={handleResetOverride}
            >
              Reset to Default Data
            </button>
          </div>

          <form className="admin-form-grid" onSubmit={handleAddConference}>
            <label className="admin-field">
              <span>Conference Title</span>
              <input
                type="text"
                value={form.title}
                onChange={(event) => updateField('title', event.target.value)}
                required
              />
            </label>
            <label className="admin-field">
              <span>Date</span>
              <input
                type="text"
                placeholder="August 18-20, 2026"
                value={form.date}
                onChange={(event) => updateField('date', event.target.value)}
                required
              />
            </label>
            <label className="admin-field">
              <span>Location</span>
              <input
                type="text"
                value={form.location}
                onChange={(event) => updateField('location', event.target.value)}
                required
              />
            </label>
            <label className="admin-field">
              <span>Status</span>
              <select
                value={form.status}
                onChange={(event) =>
                  updateField('status', event.target.value as Conference['status'])
                }
              >
                <option value="upcoming">Upcoming</option>
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
              </select>
            </label>
            <label className="admin-field">
              <span>Attendees (optional)</span>
              <input
                type="number"
                min="0"
                value={form.attendees}
                onChange={(event) => updateField('attendees', event.target.value)}
              />
            </label>
            <label className="admin-field">
              <span>Speakers (optional)</span>
              <input
                type="number"
                min="0"
                value={form.speakers}
                onChange={(event) => updateField('speakers', event.target.value)}
              />
            </label>
            <label className="admin-field admin-field-full">
              <span>Description</span>
              <textarea
                value={form.description}
                onChange={(event) => updateField('description', event.target.value)}
                required
              />
            </label>
            <label className="admin-field admin-field-full">
              <span>Topics (comma separated)</span>
              <input
                type="text"
                placeholder="Applied AI, Sustainable Engineering, Research Integrity"
                value={form.topics}
                onChange={(event) => updateField('topics', event.target.value)}
              />
            </label>
            <div className="admin-actions admin-field-full">
              <button type="submit" className="primary-button">
                Add Conference (ID: {nextConferenceId})
              </button>
            </div>
          </form>

          {message && <p className="admin-message">{message}</p>}
          {adminError && <p className="admin-error">{adminError}</p>}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
