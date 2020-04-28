import React, { useState, useMemo } from 'react';
import { ITabsContext, ActiveCard } from 'ts/interfaces/Tabs';

const TabsContext = React.createContext<ITabsContext>({});

export const useTabsContext = () => {
  const context = React.useContext(TabsContext);
  if (!context) {
    throw new Error(
      `Tabs compound components cannot be rendered outside the Tabs component`
    );
  }
  return context;
};

export const TabsProvider: React.FC = ({ children }) => {
  const [activeCard, setActiveCard] = useState<ActiveCard>({
    name: '',
    content: '',
  });

  const value = useMemo(() => ({ activeCard, setActiveCard }), [activeCard]);
  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
