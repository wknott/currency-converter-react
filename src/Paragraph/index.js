import React from "react";
import { StyledParagraph } from "./styled";

const Paragraph = ({ date }) => (
  <StyledParagraph>
    Kursy walut pochodzą z Europejskiego Banku Centralnego.
    Aktualne na dzień: <strong>{date}</strong>
  </StyledParagraph>
)

export default Paragraph;