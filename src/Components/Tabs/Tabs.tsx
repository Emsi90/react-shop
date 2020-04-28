import React from 'react';
import { ITabs } from 'ts/interfaces/Tabs';
import Tab from './Tab';
import './Tabs.scss';
import TabContent from './TabContent';

import { TabsProvider } from 'Context/TabsContext';

const Tabs: React.FC & ITabs = ({ children }) => {
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
