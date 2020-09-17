import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export const TabsContent = styled(Tabs)``;
export const TabListContent = styled(TabList)`
  display: flex;
  flex-direction: row;
  align-items: center;
  list-style: none;
`;

export const TabTitle = styled(Tab)`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const TabContent = styled(TabPanel)``;
