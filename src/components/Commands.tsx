import { useEffect, useRef, useState } from "react"

import "./styles/Commands.css"

function Commands() {
  const commandIdx = useRef(0);
  const cmds = useRef(["sudo -l", "msfconsole -q", "nmap -A 127.0.0.1 -p80,443", "cat /etc/passwd", "cat /etc/shadow", "nc -lvnp 4444"]);

  const [command, setCommand] = useState(cmds.current[commandIdx.current]);
  const [commandForward, setCommandForward] = useState(true);

  // componentDidMount
  useEffect(() => {
    setCommand("");
  }, [])

  useEffect(() => {
    const forwardTyping = (fullCommand: string, currentCommand: string) => {
      if (currentCommand.length < fullCommand.length) {
        setCommand(currentCommand + fullCommand[currentCommand.length])
      } else {
        setCommandForward(false);
      }
    }

    const backwardTyping = (currentCommand: string) => {
      setCommand(currentCommand.slice(0, -1))
      if (currentCommand.length === 0) {
        setCommandForward(true);
        if (commandIdx.current < cmds.current.length - 1) {
          commandIdx.current++;
        } else {
          commandIdx.current = 0;
        }
      }
    }

    const typing = (fullCommand: string, currentCommand: string, forward: boolean) => {
      forward ? forwardTyping(fullCommand, currentCommand) : backwardTyping(currentCommand);
    }

    const intervalId = setTimeout(() => {
      typing(cmds.current[commandIdx.current], command, commandForward)
    }, 80)

    return () => {
      clearInterval(intervalId);
    }
  }, [command, commandForward])

  return (
    <div className="command">
      <span>boxhezi@localhost:~$</span>
      <span style={ { whiteSpace: "pre" } }>{ " " }</span>
      <span id="commands">{ command }</span>
    </div>
  )
}

export default Commands;
