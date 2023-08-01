import { View, Text } from "react-native";
import { useEffect, useRef, useState } from "react";
import { addSeconds, endOfDay } from "date-fns";
import { utcToZonedTime } from "date-fns-tz";

const ServerTime = ({ showTimeLeft }) => {
  // States
  const timeNow = useRef(new Date());
  const resetTime = useRef(new Date());
  const currentServerTime = useRef(new Date());
  const timeTilReset = useRef("");
  const [serverDay, setServerDay] = useState("");
  const [serverTime, setServerTime] = useState("");

  const serverZone = "America/Nuuk";
  const dayFormat = new Intl.DateTimeFormat("en-us", {
    timeZone: serverZone,
    weekday: "long",
  });

  const timeFormat = new Intl.DateTimeFormat("en-us", {
    timeZone: serverZone,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const secondsFormat = new Intl.DateTimeFormat("en-us", {
    timeZone: serverZone,
    second: "numeric",
  });

  const gameDays = [
    "Rest Day",
    "Gathering Day",
    "Expansion Day",
    "Research Day",
    "Recruitment Day",
    "Training Day",
    "Elimination Day",
  ];

  useEffect(() => {
    const updateTime = () => {
      timeNow.current = new Date();

      const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      setServerDay(
        gameDays[daysOfWeek.indexOf(dayFormat.format(timeNow.current))]
      );
      setServerTime(timeFormat.format(timeNow.current));

      resetTime.current = endOfDay(utcToZonedTime(timeNow.current, serverZone));
      currentServerTime.current = utcToZonedTime(new Date(), serverZone);
      const timeDiff = resetTime.current - currentServerTime.current;
      const diffHours = Math.floor(timeDiff / 1000 / 60 / 60);
      const diffMinutes = Math.floor(timeDiff / 1000 / 60) % 60;
      const diffSeconds = Math.floor(timeDiff / 1000) % 60;

      timeTilReset.current = `${diffHours}h ${diffMinutes}m ${diffSeconds}s`;

      setTimeout(updateTime, 10);
    };

    updateTime();
  }, []);

  // const timerInterval = setInterval(updateTime, 500);

  return (
    <View
      style={{
        padding: 20,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          marginTop: -4,
          fontSize: 40,
          fontWeight: "800",
          color: "#555",
        }}
      >
        {showTimeLeft ? timeTilReset.current : serverTime}
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "400",
          color: "#555",
          opacity: 0.5,
          textTransform: "uppercase",
          letterSpacing: 4,
        }}
      >
        {showTimeLeft ? "Until Reset" : serverDay}
      </Text>
    </View>
  );
};

export default ServerTime;
