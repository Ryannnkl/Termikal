import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/theme";

import Header from "./components/Header";

import Home from "./pages/Home";

const mainElement = document.createElement("div");
mainElement.setAttribute("id", "root");
document.body.appendChild(mainElement);

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
};

render(<App />, document.getElementById("root"));
