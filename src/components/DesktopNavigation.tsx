import styled from "styled-components";

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

  function handleNavigationClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const target = event.target as HTMLAnchorElement;
    const section = document.getElementById(`${target.textContent}Id`);
    window.scrollTo({
      top: section!.offsetTop - window.innerHeight * 0.1,
      behavior: "smooth",
    });
  }

  return (
    <DesktopNavigationContainer>
      {sections.map((section) => (
        <DesktopNavigationItem key={section} onClick={handleNavigationClick}>
          {section}
        </DesktopNavigationItem>
      ))}
    </DesktopNavigationContainer>
  );
}
