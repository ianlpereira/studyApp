import styled from "styled-components";
import { scrollToFunction } from "../functions/scrollToFunction";

const DesktopNavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 20px;
`;

const DesktopNavigationItem = styled.a`
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    color: #a9d1ff;
  }
`;

interface DesktopNavigationProps {
  sections: string[];
}

export function DesktopNavigation(props: DesktopNavigationProps): JSX.Element {
  const { sections } = props;

  return (
    <DesktopNavigationContainer>
      {sections.map((section) => (
        <DesktopNavigationItem key={section} onClick={scrollToFunction}>
          {section}
        </DesktopNavigationItem>
      ))}
    </DesktopNavigationContainer>
  );
}
