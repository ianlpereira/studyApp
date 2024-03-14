import styled from "styled-components";
import { Avatar } from "@mui/joy";
import emotionStyled from "@emotion/styled";
import DrawerMobileNavigation from "./DrawerMobileNavigation";

const HeaderContainer = styled.header`
  background-color: #c7c7c7;
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(5px + 1vmin);
  color: white;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const StyledAvatar = emotionStyled(Avatar)`
    margin-left: 1rem;
`;

interface HeaderProps {
  sections: string[];
}

export function Header(props: HeaderProps): JSX.Element {
  const { sections } = props;
  return (
    <HeaderContainer>
      <StyledAvatar src="https://placehold.co/400"/>
      <h1>Placeholder</h1>
      <DrawerMobileNavigation sections={sections} />
    </HeaderContainer>
  );
}
