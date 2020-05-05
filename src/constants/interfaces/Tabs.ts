import React from 'react';

export interface ActiveCard {
  name: string;
  content: string | React.ReactNode;
}
export interface ContextTabs {
  activeCard?: ActiveCard;
  setActiveCard?: (obj: ActiveCard) => void;
}

export interface TabProps {
  name: string;
  initialActive?: boolean;
  heading: () => string | React.ReactNode;
}

export interface TabsBody {
  Tab: React.FC<TabProps>;
}
