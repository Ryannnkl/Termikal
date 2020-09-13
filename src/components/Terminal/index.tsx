import React, { useState, useEffect, createRef } from "react";
import { XTerm } from "xterm-for-react";

import { Container, Content, Path, Command } from "./styles";

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const xtermRef = createRef();

  const loc = window.location.pathname;
  const dir = loc.substring(0, loc.lastIndexOf("/"));
  useEffect(() => {
    xtermRef.current.terminal.writeln("Ola :)");
    xtermRef.current.terminal.write(`\r${dir}>`);
  }, []);

  return (
    <Container>
      <XTerm
        options={{
          cols: 80,
          rows: 20,
          theme: {
            background: "#15121E",
          },
          lineHeight: 20,
        }}
        ref={xtermRef}
        onData={(data) => {
          const code = data.charCodeAt(0);
          // If the user hits empty and there is something typed echo it.
          if (code === 13 && input.length > 0) {
            xtermRef.current.terminal.write(
              "\r\nYou typed: '" + input + "'\r\n"
            );
            xtermRef.current.terminal.write(`\r${dir} >`);
            setInput("");
          } else if (code < 32 || code === 127) {
            // Disable control Keys such as arrow keys
            return;
          } else {
            // Add general key press characters to the terminal
            xtermRef.current.terminal.write(data);
            setInput(input + data);
          }
        }}
        style={{ backgroundColor: "#333" }}
      />
    </Container>
  );
};

export default Terminal;
