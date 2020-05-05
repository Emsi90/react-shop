import React from 'react';
import { TabsBody } from 'constants/interfaces/Tabs';
import Tab from './Tab';
import './Tabs.scss';
import TabContent from './TabContent';

import { TabsProvider } from 'context/tabsContext';

const Tabs: React.FC & TabsBody = ({ children }) => {
  return (
    <>
      <TabsProvider>
        <ul className='tabs'>{children}</ul>
        <TabContent />
      </TabsProvider>
    </>
  );
};

/*
 * Compouned Components
 */
Tabs.Tab = Tab;

export default Tabs;
