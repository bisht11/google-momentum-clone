import React, { useState, useEffect } from "react";
import axios from "axios";
import { QuoteContainer, Text } from "./QuotesStyles";

const url = "https://dummyjson.com/quotes/random"; // open source quote api

const Quote = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(data); // development only

  // in case of no data
  if (!data) return null;
  return (
    <QuoteContainer>
      <Text>{data.quote}</Text>
      <Text>-{data.author}</Text>
    </QuoteContainer>
  );
};

export default Quote;
