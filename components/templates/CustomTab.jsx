"use client";
import React, { createContext, useContext, useState } from "react";
const TabContext = createContext(null);

const CustomTab = ({ defaultActive, children, headerRight = null }) => {
  const [activeTab, setActiveTab] = useState(defaultActive);

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      <ul className="nav nav-tabs custom--tab">
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          const { name, tabKey } = child.props;
          return (
            <li className="nav-item">
              <span
                role="button"
                className={`nav-link ${activeTab === tabKey ? "active" : ""}`}
                onClick={() => setActiveTab(tabKey)}
              >
                {name}
              </span>
            </li>
          );
        })}
        <div className="ms-auto">{headerRight}</div>
      </ul>

      <div className="tab-content">{children}</div>
    </TabContext.Provider>
  );
};

const Item = ({ tabKey, children }) => {
  const { activeTab } = useContext(TabContext);
  if (activeTab !== tabKey) return null;
  return <>{children}</>;
};

CustomTab.Item = Item;

export default CustomTab;
