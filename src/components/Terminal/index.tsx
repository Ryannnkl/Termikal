import React, { useState, useEffect, createRef } from "react";
import { XTerm, XTermProps } from "xterm-for-react";
import shelljs from "shelljs";

import { useCommand, getHomeDir } from "../../hooks/useCommand";
import { Container } from "./styles";

const Terminal: React.FC = () => {
  const [input, setInput] = useState("");
  const xtermRef = createRef();
  shelljs.config.execPath = shelljs.which("node");

  useEffect(() => {
    xtermRef.current.terminal.writeln("Ola :)");
    xtermRef.current.terminal.write(`${getHomeDir()} >`);
  }, []);

  return (
    <Container>
      <XTerm
        options={{
          cols: 72,
          rows: 21,
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
            console.log(data);
            if (input === "clear" || input === "cls") {
              xtermRef.current.terminal.writeln("");
              xtermRef.current.terminal.clear();
              xtermRef.current.terminal.write(`${getHomeDir()} >`);
              setInput("");
            } else {
              const response = useCommand(input);
              xtermRef.current.terminal.writeln(`\n\r${response}`);
            }

            xtermRef.current.terminal.write(`${getHomeDir()} >`);

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
      />
    </Container>
  );
};

export default Terminal;
