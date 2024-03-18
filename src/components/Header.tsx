import styled from "styled-components";
import { Avatar } from "@mui/joy";
import emotionStyled from "@emotion/styled";
import DrawerMobileNavigation from "./DrawerMobileNavigation";
import { DesktopNavigation } from "./DesktopNavigation";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useEffect, useState } from "react";

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

const StyledH1 = styled.h1`
  margin-left: 1rem;
  cursor: pointer;

  &:hover {
    color: #a9d1ff;
  }
`;

interface HeaderProps {
  sections: string[];
}

export function Header(props: HeaderProps): JSX.Element {
  const { sections } = props;
  const { width } = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (width < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [width]);

  return (
    <HeaderContainer>
      {isMobile ? (
        <StyledAvatar src="https://placehold.co/400" size="lg" />
      ) : (
        <StyledH1>Placeholder</StyledH1>
      )}

      {isMobile ? (
        <DrawerMobileNavigation sections={sections} />
      ) : (
        <DesktopNavigation sections={sections} />
      )}
    </HeaderContainer>
  );
}
