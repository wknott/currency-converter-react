import React from "react";
import { StyledClock } from "./styled";
import { useCurrentDate } from "./useCurrentDate";

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

const Clock = () => {
  const date = useCurrentDate();

  return (
    <StyledClock>
      Dzisiaj jest {getDateString(date)}
    </StyledClock>
  )
}

export default Clock;