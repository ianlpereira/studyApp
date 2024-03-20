import styled from "styled-components";
import { PageLayout } from "../../components/PageLayout";
import video from "../../assets/video.mp4";
import { PortfolioImageSection } from "../Portfolio/Portfolio";

const HomeImageSectionContainer = styled.div`
  video {
    width: 100%;
    height: auto;
    max-height: 85vh;
    border-radius: 1rem;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  }
`;
function HomeImageSection(): JSX.Element {
  return (
    <HomeImageSectionContainer>
      <video src={video} preload="auto" autoPlay muted loop />
    </HomeImageSectionContainer>
  );
}

function HomeAboutSection(): JSX.Element {
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
        condimentum accumsan sapien, non commodo felis gravida nec. Proin
        tincidunt nisi sed luctus dapibus. Ut nec diam auctor, bibendum ligula
        eget, pellentesque urna.
      </p>
    </div>
  );
}

export function Home(): JSX.Element {
  return (
    <PageLayout
      sections={[
        { children: <HomeImageSection />, subtitle: "" },
        { children: <HomeAboutSection />, subtitle: "Sobre" },
        { children: <PortfolioImageSection />, subtitle: "Portfolio" },
      ]}
    />
  );
}
