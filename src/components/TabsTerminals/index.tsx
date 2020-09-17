import React, { useState } from "react";

import Terminal from "../Terminal";

import { TabTitle, TabContent, TabsContent, TabListContent } from "./styles";

interface ITabsProps {
  title: string;
  content: React.FunctionComponent;
}

const INITIAL_DATA: ITabsProps[] = [
  {
    title: "Termikal",
    content: <Terminal />,
  },
  {
    title: "Termikal",
    content: <Terminal />,
  },
];

const TabsTerinals: React.FC = () => {
  const [tabs, setTabs] = useState<ITabsProps[]>(INITIAL_DATA);

  return (
    <TabsContent className="tabs-content">
      <TabListContent className="tab">
        {tabs &&
          tabs.map((item, index) => (
            <TabTitle key={index}>{item.title}</TabTitle>
          ))}
      </TabListContent>
      {tabs &&
        tabs.map((item, index) => (
          <TabContent key={index}>{item.content}</TabContent>
        ))}
    </TabsContent>
  );
};

export default TabsTerinals;
