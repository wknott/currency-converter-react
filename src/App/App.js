import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Clock from "./Clock";
import Container from "./Container";
import Form from "./Form";
import Header from "./Header";
import Result from "./Result";
import { GlobalStyle } from "./GlobalStyle";
import { Paragraph } from "./styled";
import { defaultTheme } from "./theme";
import { useRatesData } from "./useRatesData";

function App() {
  const [amount, setAmount] = useState("100");
  const [fromCurrency, setFromCurrency] = useState("USD");
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
          <Paragraph>Trwa wczytywanie walut...</Paragraph>
          :
          error
            ?
            <Paragraph error={true}>Wystąpił błąd, proszę spróbować później.</Paragraph>
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
              <Paragraph>
                Kursy walut pochodzą z Europejskiego Banku Centralnego.
                Aktualne na dzień: <strong>{date}</strong>
              </Paragraph>
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
