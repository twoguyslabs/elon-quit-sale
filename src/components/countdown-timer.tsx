import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  endTime: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ endTime }) => {
  // Define initial state calculation separately or call inside effect initially
  const getInitialTimeLeft = () => {
    // Simplified initial calculation logic (same as calculateTimeLeft essentially)
    const now = new Date().getTime();
    const difference = endTime - now;
    // ... (rest of calculation and formatting logic) ...
    if (difference > 0) {
      // ... format properly ...
      const hours = String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((difference / 1000 / 60) % 60)
      ).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(
        2,
        "0"
      );
      // Add days if needed
      return `${hours}:${minutes}:${seconds}`; // Example format
    }
    return "00:00:00";
  };

  const [timeLeftString, setTimeLeftString] = useState(getInitialTimeLeft);

  useEffect(() => {
    // Define the function *inside* the effect
    const calculateTimeLeftInternal = () => {
      const now = new Date().getTime();
      const difference = endTime - now;
      // ... (rest of calculation and formatting logic as before) ...

      let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      if (difference > 0) {
        /* ... calculate ... */
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
      const formattedHours = String(timeLeft.hours).padStart(2, "0");
      const formattedMinutes = String(timeLeft.minutes).padStart(2, "0");
      const formattedSeconds = String(timeLeft.seconds).padStart(2, "0");
      if (timeLeft.days > 0) {
        return `${timeLeft.days}d ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      } else if (difference > 0) {
        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      } else {
        return "00:00:00";
      }
    };

    // Update state immediately in case endTime changed
    setTimeLeftString(calculateTimeLeftInternal());

    const timer = setInterval(() => {
      // Use the internal function
      const newTimeLeftString = calculateTimeLeftInternal();
      setTimeLeftString(newTimeLeftString);

      const now = new Date().getTime();
      if (endTime - now <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
    // The effect now only depends on endTime
  }, [endTime]);

  return timeLeftString;
};

export default CountdownTimer;
