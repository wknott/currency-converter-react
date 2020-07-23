import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";
import Result from "./Result";

function App() {
  const exchangeRatesTable = [
    { code: "PLN", currency: "złoty", mid: 1 },
    { code: "EUR", currency: "euro", mid: 4.44 },
    { code: "USD", currency: "dolar amerykański", mid: 3.85 },
    { code: "GBP", currency: "funt szterling", mid: 4.84 },
    { code: "UAH", currency: "hrywna (Ukraina)", mid: 0.1364 },
    { code: "CHF", currency: "frank szwajcarski", mid: 4.10 }
  ];
  const [amount, setAmount] = useState(100);
  const [fromCurrency, setFromCurrency] = useState(exchangeRatesTable[0].code);
  const [toCurrency, setToCurrency] = useState(exchangeRatesTable[1].code);

  return (
    <Container>
      <Header />
      <Form
        amount={amount}
        setAmount={setAmount}
        fromCurrency={fromCurrency}
        setFromCurrency={setFromCurrency}
        toCurrency={toCurrency}
        setToCurrency={setToCurrency}
        exchangeRatesTable={exchangeRatesTable}
      />
      <Result
        amount={amount}
        fromCurrency={fromCurrency}
        exchangeRatesTable={exchangeRatesTable}
        toCurrency={toCurrency}
      />
    </Container>
  );
}

export default App;
