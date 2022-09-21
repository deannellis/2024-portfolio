import React, { useState, useEffect } from "react";

enum typeState {
  Typing,
  Paused,
  Deleting,
}

type TypewriterProps = {
  messages: String[];
};

const Typewriter = ({ messages }: TypewriterProps) => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [copy, setCopy] = useState(messages[0]);
  const [tState, setTState] = useState(typeState.Paused);
  const initialPauseTime = 5000;
  const [pauseTime, setPauseTime] = useState(initialPauseTime);

  useEffect(() => {
    switch (tState) {
      case typeState.Typing: {
        const nextMessage = messages[messageIndex].slice(0, copy.length + 1);

        if (nextMessage == copy) {
          setTState(typeState.Paused);
        }

        const timeout = setTimeout(() => {
          setCopy(messages[messageIndex].slice(0, copy.length + 1));
        }, 100);

        return () => {
          clearTimeout(timeout);
        };
      }

      case typeState.Deleting: {
        if (pauseTime == initialPauseTime) {
          setPauseTime(950);
        }
        if (!copy) {
          setTState(typeState.Typing);
          const nextIndex = messageIndex + 1;
          setMessageIndex(messages[nextIndex] ? nextIndex : 0);
          return;
        }

        const timeout = setTimeout(() => {
          setCopy(messages[messageIndex].slice(0, copy.length - 1));
        }, 100);

        return () => {
          clearTimeout(timeout);
        };
      }
      case typeState.Paused:
      default:
        const timeout = setTimeout(() => {
          setTState(typeState.Deleting);
        }, pauseTime);
        return () => clearTimeout(timeout);
    }
  }, [copy, tState]);

  return (
    <div className="cursor__wrap">
      <h2 aria-label={messages[messageIndex]}>{copy}</h2>
      <div
        className={`cursor ${tState == typeState.Deleting ? "" : "blinking"}`}
      ></div>
    </div>
  );
};

export default Typewriter;
