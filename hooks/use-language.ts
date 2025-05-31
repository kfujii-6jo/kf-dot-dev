"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Language, defaultLanguage } from '@/lib/i18n';

interface LanguageStore {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: defaultLanguage,
      setLanguage: (language) => set({ language }),
    }),
    {
      name: 'language-storage',
    }
  )
);