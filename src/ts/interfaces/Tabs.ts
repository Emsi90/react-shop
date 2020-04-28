import React from 'react';

export interface ActiveCard {
  name: string;
  content: string | React.ReactNode;
}
export interface ITabsContext {
  activeCard?: ActiveCard;
  setActiveCard?: (obj: ActiveCard) => void;
}

export interface TabProps {
  name: string;
  initialActive?: boolean;
  heading: () => string | React.ReactNode;
}

export interface ITabs {
  Tab: React.FC<TabProps>;
}
