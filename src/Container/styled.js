import styled from "styled-components";

export const ContainerMain = styled.main`
  max-width: 750px;
  margin: 0 auto;
  margin-top: 100px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 25px;
  padding: 0 20px;
  box-shadow: 0 0 5px 2px ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.background};

  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px){
    margin: 10px;
  }
`;