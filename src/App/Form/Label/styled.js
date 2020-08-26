import styled from "styled-components";

export const StyledLabel = styled.label`
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  grid-gap: 10px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-template-columns: 1fr;
  }
`; 