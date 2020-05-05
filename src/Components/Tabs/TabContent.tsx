import React from 'react';

import { useTabsContext } from 'context/tabsContext';

const TabContent: React.FC = () => {
  const { activeCard } = useTabsContext();

  return <div>{activeCard?.content}</div>;
};

export default TabContent;
