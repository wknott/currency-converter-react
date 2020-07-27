import React, { useState, useEffect } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { rates } from "./rates";

function App() {
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState(rates[0].code);
  const [toCurrency, setToCurrency] = useState(rates[1].code);
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

  return (
    <Container>
      <Header date={getDateString(date)} />
      <Form
        amount={amount}
        setAmount={setAmount}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
      />
      <Result
        amount={amount}
        fromCurrency={fromCurrency}
        toCurrency={toCurrency}
      />
    </Container>
  );
}

export default App;
