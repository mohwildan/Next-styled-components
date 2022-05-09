import styled from "styled-components";
import MenuServices from "./MenuServices";
import ServicesContents from "./ServicesContents";

function ServicesPage() {
  return (
    <Section>
      <Container>
        <TextMainServices>Services</TextMainServices>
        <MenuServices />
        <ServicesContents />
      </Container>
    </Section>
  );
}

export default ServicesPage;

const Section = styled.div`
  padding-top: 9rem;
`;
const Container = styled.h2`
width: min(100%, 80rem);
margin-inline: auto;
display: flex;
flex-direction: column;
align-items: center;
padding: 0 1.5rem;
`;
const TextMainServices = styled.div`
  font-size: clamp(2.1875rem, 1.5865rem + 1.9231vw, 3.125rem);
  text-align: center;
  color: #443466;
  padding-bottom: 4rem;
`;

