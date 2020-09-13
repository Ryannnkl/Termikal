import React, { useState, useEffect, createRef } from "react";
import { XTerm, XTermProps } from "xterm-for-react";
import path from "path";
import shelljs from "shelljs";

import useCommand from "../../hooks/useCommand";
import { Container } from "./styles";

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const xtermRef = createRef();
  shelljs.config.execPath = shelljs.which("node");

  useEffect(() => {
    xtermRef.current.terminal.writeln("Ola :)");
    xtermRef.current.terminal.write(`c: >`);
  }, []);

  return (
    <Container>
      <XTerm
        options={{
          cols: 75,
          rows: 22,
          theme: {
            background: "#15121E",
            red: "#E96379",
            yellow: "#e7de79",
            white: "#E1E1E6",
          },
          lineHeight: 0.8,
        }}
        ref={xtermRef}
        onData={(data) => {
          const code = data.charCodeAt(0);

          if (code === 13 && input.length > 0) {
            const response = shelljs.ls();
            console.log(data);
            xtermRef.current.terminal.writeln(`\n\r${response.toString()}`);
            xtermRef.current.terminal.write(`C: >`);

            setInput("");
          } else if (code === 127 && input.length > 0) {
            const str = input.substring(0, input.length - 1);
            xtermRef.current.terminal.write("\x1b[D");
            xtermRef.current.terminal.clearSelection();

            setInput(str);
          } else {
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
