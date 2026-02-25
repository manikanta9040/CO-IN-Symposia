import { useEffect, useRef, useState } from 'react';
import type { SiteData } from '../types/siteData';
import siteDataCsvUrl from '../data/site-data.csv?url';

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
  const loadBaseSiteData = async (): Promise<SiteData> => {
    const response = await fetch(siteDataCsvUrl);
    if (!response.ok) {
      throw new Error(`Failed to load site data (${response.status})`);
    }

    const csv = await response.text();
    const lines = csv
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);

    if (lines.length < 2) {
      throw new Error('Site data file is empty.');
    }

    const sectionPayloadMap: Record<string, string> = {};

    for (const line of lines.slice(1)) {
      const commaIndex = line.indexOf(',');
      if (commaIndex === -1) {
        continue;
      }
      const section = line.slice(0, commaIndex).trim();
      const payloadBase64 = line.slice(commaIndex + 1).trim();
      if (!section || !payloadBase64) {
        continue;
      }
      sectionPayloadMap[section] = payloadBase64;
    }

    const parseSection = <T,>(section: string): T => {
      const payloadBase64 = sectionPayloadMap[section];
      if (!payloadBase64) {
        throw new Error(`Missing section "${section}" in site-data.csv`);
      }
      const binaryString = atob(payloadBase64);
      const bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0));
      const decoded = new TextDecoder('utf-8').decode(bytes);
      return JSON.parse(decoded) as T;
    };

    return {
      content: parseSection<SiteData['content']>('content'),
      services: parseSection<SiteData['services']>('services'),
      detailedServices: parseSection<SiteData['detailedServices']>('detailedServices'),
      professors: parseSection<SiteData['professors']>('professors'),
      news: parseSection<SiteData['news']>('news'),
      conferences: parseSection<SiteData['conferences']>('conferences'),
      reports: parseSection<SiteData['reports']>('reports')
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
