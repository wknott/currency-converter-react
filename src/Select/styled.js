import styled from "styled-components";

export const StyledSelect = styled.select`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 5px;
`;