import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: none;
`;

export const Field = styled.input`
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 5px;
`;