import React from 'react';

import { useTabsContext } from 'Context/TabsContext';

const TabContent: React.FC = () => {
  const { activeCard } = useTabsContext();

  return <div>{activeCard?.content}</div>;
};

export default TabContent;
