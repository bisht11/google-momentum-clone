import React from "react";
import { DateContainer } from "./DateStyles";

const DateToday = () => {
  let today = new Date();
  let date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate(); // month's indexing starts from 0 (+1 to get current month)

  return (
    <DateContainer>
      <p>{date}</p>
    </DateContainer>
  );
};

export default DateToday;
