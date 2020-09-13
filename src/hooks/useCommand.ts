import shelljs from "shelljs";

export default function useCommand(cmd: string, path: string) {
  shelljs.config.execPath = process.env.HOME;

  if (shelljs.exec(cmd).code !== 0) {
    return shelljs.echo("Falha saida n 0");
  }
  return shelljs.exec(cmd);
}
