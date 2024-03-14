import styled from "styled-components";
import { PageLayout } from "../../components/PageLayout";
import { Button, TextField } from "@mui/material";

const HomeImageSectionContainer = styled.div`
  video {
    width: 100%;
    height: auto;
    max-height: 90vh;
  }
`;

function HomeImageSection(): JSX.Element {
  return (
    <HomeImageSectionContainer>
      <video src="https://placehold.co/1920x1080.mp4" />
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

const HomeFormSectionContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

function HomeFormSection(): JSX.Element {
  function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  }

  return (
    <HomeFormSectionContainer onSubmit={handleFormSubmit}>
      <TextField id="name" label="Name" variant="outlined" name="name" />
      <TextField id="email" label="Email" variant="outlined" name="email" />
      <TextField
        id="message"
        label="Message"
        variant="outlined"
        multiline
        rows={4}
        name="message"
      />
      <Button variant="outlined" type="submit" size="small">
        Send
      </Button>
    </HomeFormSectionContainer>
  );
}

export function Home(): JSX.Element {
  return (
    <PageLayout
      sections={[
        { children: <HomeImageSection />, subtitle: "" },
        { children: <HomeAboutSection />, subtitle: "Sobre" },
        { children: <HomeFormSection />, subtitle: "Contato" },
      ]}
    />
  );
}
