import React, { useCallback, useEffect } from 'react';
import { TabProps } from 'constants/interfaces/Tabs';

import { useTabsContext } from 'context/tabsContext';

const Tab: React.FC<TabProps> = (props) => {
  const { activeCard, setActiveCard } = useTabsContext();
  // const activeName = activeHeading
  //   ? activeHeading
  //   : props.initialActive
  //   ? props.name
  //   : null;

  const handleTabClick = useCallback(() => {
    if (setActiveCard) {
      setActiveCard({
        name: props.name,
        content: props.children,
      });
    }
  }, [props.children, props.name, setActiveCard]);

  useEffect(() => {
    if (!activeCard?.name && props.initialActive) {
      handleTabClick();
    }
  }, [
    activeCard,
    handleTabClick,
    props.children,
    props.initialActive,
    props.name,
  ]);

  return (
    <li
      className={props.name === activeCard?.name ? 'active' : ''}
      onClick={handleTabClick}
    >
      {props.heading()}
    </li>
  );
};

export default Tab;
