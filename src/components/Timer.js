import React from "react";
import Countdown from "react-countdown";

const Timer = () => {
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      //End current game
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    } else {
      // Render a countdown
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return <Countdown renderer={renderer} date={Date.now() + 30000} />;
};

export default Timer;
