import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  text-align: center;
  ${({ error }) => error && css`
    color: red;
 `}
`;