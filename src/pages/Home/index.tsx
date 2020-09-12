import React, { useState, useEffect } from "react";
import { Container, Section, Terminal } from "./styles";

import Header from "../../components/Header";
import Dashboard from "../../components/Dashboard";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Section>
        <Dashboard />
        <Terminal />
      </Section>
    </Container>
  );
};

export default Home;
