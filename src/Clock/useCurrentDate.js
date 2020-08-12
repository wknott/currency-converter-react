import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const getDateString = (date) => (
    date.toLocaleDateString("pl-PL",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
      }
    )
  )
  return getDateString(date);
}