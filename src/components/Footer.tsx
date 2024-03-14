import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #c7c7c7;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: center;
  font-size: calc(7px + 2vmin);
  grid-template-columns: 1fr 1fr;
  text-align: center;
  margin-top: 1rem;
`;

const FooterColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

export function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <h4>Redes Sociais</h4>
      <h4>Contatos</h4>

      <FooterColumnContainer>
        <Facebook />
        <Instagram />
        <Twitter />
      </FooterColumnContainer>

      <FooterColumnContainer>
        <p>Telefone: (11) 9999-9999</p>
        <p>Email: placeholder@email.com</p>
      </FooterColumnContainer>
    </FooterContainer>
  );
}
