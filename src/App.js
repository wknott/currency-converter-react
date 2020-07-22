import React, { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Form from "./Form";

function App() {
  const [amount, setAmount] = useState(100);

  return (
    <Container>
      <Header />
      <Form amount={amount} setAmount={setAmount} />
    </Container>
  );
}

export default App;
