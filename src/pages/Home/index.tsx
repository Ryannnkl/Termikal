import React, { useState, useEffect, createRef } from "react";
import { XTerm } from "xterm-for-react";
import path from "path";

import { Container, Section, Terminals } from "./styles";

import Header from "../../components/Header";
import Dashboard from "../../components/Dashboard";
import Terminal from "../../components/Terminal";
import TabsTerinals from "../../components/TabsTerminals";

const Home: React.FC = () => {
  const [cmd, setCmd] = useState([0]);

  return (
    <Container>
      <Header />
      <Section>
        <Dashboard />
        <TabsTerinals />
      </Section>
    </Container>
  );
};

export default Home;
