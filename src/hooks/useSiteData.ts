import { useEffect, useRef, useState } from 'react';
import type { SiteData } from '../types/siteData';

let cachedSiteData: SiteData | null = null;
let siteDataPromise: Promise<SiteData> | null = null;
const SITE_DATA_STORAGE_KEY = 'co-in-admin-site-data';
const SITE_DATA_UPDATED_EVENT = 'co-in-site-data-updated';

const readSiteDataOverride = (): SiteData | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const raw = window.localStorage.getItem(SITE_DATA_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    return JSON.parse(raw) as SiteData;
  } catch {
    return null;
  }
};

const emitSiteDataUpdated = (): void => {
  if (typeof window === 'undefined') {
    return;
  }
  window.dispatchEvent(new Event(SITE_DATA_UPDATED_EVENT));
};

export const saveSiteDataOverride = (siteData: SiteData): void => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(SITE_DATA_STORAGE_KEY, JSON.stringify(siteData));
  cachedSiteData = siteData;
  siteDataPromise = Promise.resolve(siteData);
  emitSiteDataUpdated();
};

export const clearSiteDataOverride = (): void => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.removeItem(SITE_DATA_STORAGE_KEY);
  cachedSiteData = null;
  siteDataPromise = null;
  emitSiteDataUpdated();
};

export const hasSiteDataOverride = (): boolean => {
  if (typeof window === 'undefined') {
    return false;
  }
  return window.localStorage.getItem(SITE_DATA_STORAGE_KEY) !== null;
};

const loadSiteData = async (): Promise<SiteData> => {
  const loadJson = async <T,>(path: string): Promise<T> => {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path} (${response.status})`);
    }
    return (await response.json()) as T;
  };

  const loadBaseSiteData = async (): Promise<SiteData> => {
    const [content, services, detailedServices, professors, news, conferences, reports] = await Promise.all([
      loadJson<SiteData['content']>('/data/content.json'),
      loadJson<SiteData['services']>('/data/services.json'),
      loadJson<SiteData['detailedServices']>('/data/detailed-services.json'),
      loadJson<SiteData['professors']>('/data/professors.json'),
      loadJson<SiteData['news']>('/data/news.json'),
      loadJson<SiteData['conferences']>('/data/conferences.json'),
      loadJson<SiteData['reports']>('/data/reports.json')
    ]);

    return {
      content,
      services,
      detailedServices,
      professors,
      news,
      conferences,
      reports
    };
  };

  if (cachedSiteData) {
    return cachedSiteData;
  }

  const overrideData = readSiteDataOverride();
  if (overrideData) {
    if (!siteDataPromise) {
      siteDataPromise = loadBaseSiteData().then((baseSiteData) => {
        const mergedSiteData: SiteData = {
          ...baseSiteData,
          ...overrideData,
          content: {
            ...baseSiteData.content,
            ...overrideData.content
          }
        };
        cachedSiteData = mergedSiteData;
        return mergedSiteData;
      });
    }
    return siteDataPromise;
  }

  if (!siteDataPromise) {
    siteDataPromise = loadBaseSiteData().then((siteData) => {
      cachedSiteData = siteData;
      return siteData;
    });
  }

  return siteDataPromise;
};

interface UseSiteDataResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useSiteData = <T,>(selector: (siteData: SiteData) => T): UseSiteDataResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const selectorRef = useRef(selector);

  useEffect(() => {
    selectorRef.current = selector;
  }, [selector]);

  useEffect(() => {
    let isMounted = true;

    const loadAndSet = () => {
      setLoading(true);
      setError(null);

      loadSiteData()
        .then((siteData) => {
          if (!isMounted) {
            return;
          }
          setData(selectorRef.current(siteData));
        })
        .catch((err: unknown) => {
          if (!isMounted) {
            return;
          }
          const message = err instanceof Error ? err.message : 'Unable to load content right now.';
          setError(message);
        })
        .finally(() => {
          if (!isMounted) {
            return;
          }
          setLoading(false);
        });
    };

    loadAndSet();

    const onDataUpdated = () => {
      loadAndSet();
    };
    window.addEventListener(SITE_DATA_UPDATED_EVENT, onDataUpdated);

    return () => {
      isMounted = false;
      window.removeEventListener(SITE_DATA_UPDATED_EVENT, onDataUpdated);
    };
  }, []);

  return { data, loading, error };
};
