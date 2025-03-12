'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type AppContextType = {
  // Add state variables here
  // For example:
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
