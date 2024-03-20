import styled from "styled-components";
import { Header } from "./Header";
import { Divider } from "@mui/joy";
import { Footer } from "./Footer";

const PageLayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const SectionsContainer = styled.div`
  padding: 0 1rem;
  margin-top: 10vh;
`;

const IndividualSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

interface SectionProps {
  subtitle?: string;
  children: React.ReactNode;
}

interface PageLayoutProps {
  sections: SectionProps[];
}

export function PageLayout(props: PageLayoutProps): JSX.Element {
  const { sections } = props;

  return (
    <PageLayoutContainer>
      <Header sections={sections.map((section) => section.subtitle ?? "")} />
      <SectionsContainer>
        {sections.map((section, index) => (
          <IndividualSectionContainer
            key={`section${index}`}
            id={`${section.subtitle}Id`}
          >
            {section.subtitle && <h3>{section.subtitle}</h3>}
            {section.children}
            {index !== sections.length - 1 && <Divider />}
          </IndividualSectionContainer>
        ))}
      </SectionsContainer>
      <Footer />
    </PageLayoutContainer>
  );
}
