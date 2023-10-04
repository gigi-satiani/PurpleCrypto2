import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "../App.css";

const Timer = () => {
  const targetDate = new Date("2023-12-31T23:59:59").getTime();
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    setCountdown({
      days: days < 10 ? "0" + days : days.toString(),
      hours: hours < 10 ? "0" + hours : hours.toString(),
      minutes: minutes < 10 ? "0" + minutes : minutes.toString(),
      seconds: seconds < 10 ? "0" + seconds : seconds.toString(),
    });
  };

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="countdown">
      <div>
        <div className="countdown-title pb-3">
          <p>Token Sale Start Now In</p>
        </div>
        <div className="countdown-timers">
          <div className="countdown-item">
            <span className="spanDays" id="days">
              {countdown.days}
            </span>{" "}
            <span>day</span>
          </div>
          <div className="countdown-item">
            <span className="spanHours" id="hours">
              {countdown.hours}
            </span>{" "}
            <span>hour</span>
          </div>
          <div className="countdown-item">
            <span className="spanMinutes" id="minutes">
              {countdown.minutes}
            </span>{" "}
            <span>min</span>
          </div>
          <div className="countdown-item">
            <span className="spanSeconds" id="seconds">
              {countdown.seconds}
            </span>{" "}
            <span>sec</span>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Timer;
