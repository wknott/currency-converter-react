import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";
import Clock from "./Clock/";
import Message from "./Message";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./theme";
import { useRatesData } from "./useRatesData";

function App() {
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("PLN");
  const { rates, loading, date, error } = useRatesData();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        <GlobalStyle />
        <Clock />
        <Header />
        {loading
          ?
          <Message>Trwa wczytywanie walut...</Message>
          :
          error
            ?
            <Message error={true}>Wystąpił błąd, proszę spróbować później.</Message>
            :
            <>
              <Form
                amount={amount}
                setAmount={setAmount}
                fromCurrency={fromCurrency}
                setFromCurrency={setFromCurrency}
                toCurrency={toCurrency}
                setToCurrency={setToCurrency}
                rates={rates}
              />
              <Message>
                Kursy walut pochodzą z Europejskiego Banku Centralnego.
                Aktualne na dzień: <strong>{date}</strong>
              </Message>
              <Result
                amount={amount}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                rates={rates}
              />
            </>
        }
      </Container>
    </ThemeProvider>
  );
}

export default App;
