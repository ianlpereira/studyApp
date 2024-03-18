import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import styled from "styled-components";
import SubscribeForm from "./SubscribeForm";

const FooterContainer = styled.footer`
  background-color: #c7c7c7;
  width: 100%;
  display: flex;
  margin-top: 5rem;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: start;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  margin: 1rem;
`;

const IconsContainer = styled.div`
  display: flex;
  justify-content: start;
  gap: 1rem;
`;
const StyledH1 = styled.h1`
  color: white;
`;

const StyledP = styled.a`
  color: white;
  cursor: pointer;
`;

const LinksContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 1rem;
  flex-wrap: wrap;
`;

export function Footer(): JSX.Element {
  return (
    <FooterContainer>
      <FooterColumn>
        <StyledH1>Placeholder</StyledH1>
        <LinksContainer>
          <StyledP>Placeholder</StyledP>
          <StyledP>Placeholder</StyledP>
          <StyledP>Placeholder</StyledP>
          <StyledP>Placeholder</StyledP>
        </LinksContainer>
        <IconsContainer>
          <IconButton>
            <Facebook fontSize="large" style={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <Instagram fontSize="large" style={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <Twitter fontSize="large" style={{ color: "white" }} />
          </IconButton>
        </IconsContainer>
      </FooterColumn>
      <FooterColumn>
        <StyledH1>Inscrever-se</StyledH1>
        <SubscribeForm />
      </FooterColumn>
    </FooterContainer>
  );
}
