import { shell } from "electron";
import { useState, useEffect } from "react";
import shelljs from "shelljs";

interface ICommand {
  cmd: string;
}

export default function useCommand({ cmd }: ICommand) {
  const { exec } = shelljs;

  if (shelljs.exec(cmd).code !== 0) {
    return shelljs.echo("Falha saida n 0");
  }
  shelljs.ls();
}
