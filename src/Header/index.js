import React from "react";
import { StyledHeader, Title, Clock } from "./styled";

const Header = ({ date }) => (
  <StyledHeader>
    <Clock>Dzisiaj jest {date}</Clock>
    <Title>Przelicznik walut</Title>
  </StyledHeader>
)

export default Header;