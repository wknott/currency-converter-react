import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import { rates } from "./rates";
import Clock from "./Clock/";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";

function App() {
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState(rates[0].code);
  const [toCurrency, setToCurrency] = useState(rates[1].code);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyle />
        <Clock />
        <Header />
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
    </ThemeProvider>
  );
}

export default App;
