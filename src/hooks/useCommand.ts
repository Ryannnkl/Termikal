import shelljs from "shelljs";
import child_process from "child_process";
import { homedir } from "os";

const exec = require("child_process").exec;

export function useCommand(cmd: string) {
  shelljs.config.execPath = process.env.HOME;
  const command = cmd.split(" ")[0];
  const params = cmd.split(" ");
  let list = params.reverse();
  list.pop();
  list = list.reverse();

  if (command === "ls") {
    return shelljs.ls().toString();
  } else if (command === "pwd") {
    return shelljs.pwd().toString();
  } else if (command === "cat") {
    return shelljs.cat(list).toString();
  } else if (command === "code") {
    child_process.exec(cmd, function (err) {
      console.log(err);
    });
    return "abrindo VSCode";
  } else if (command === "git") {
    child_process.exec(cmd, function (error, stdout, stderr) {
      return stdout;
    });
  } else if (command === "cd") {
    return shelljs.cd(list).toString();
  } else {
    return shelljs.echo("ainda em testes").toString();
  }
}
export function getHomeDir() {
  return homedir();
}
