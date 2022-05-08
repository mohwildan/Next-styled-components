import { AiOutlineArrowDown } from "react-icons/ai";
import styled from "styled-components";
import { keyframes } from "styled-components";
import AllWeb from './AllWeb';
function Hero() {
  return (
    <Section>
      <Container>
        <Wrapper>
          <DesignText>Design</DesignText>
          <MainText>MechaMaru.</MainText>
          <Decriptions>
            we’re team designer,
            <br /> builders & thinkers who craft degital experients
          </Decriptions>
        </Wrapper>
        <ArrowDown>
          <AiOutlineArrowDown />
        </ArrowDown>
      </Container>
        <AllWeb />
    </Section>
  );
}

export default Hero;

const Section = styled.div``;
const Container = styled.div`
  width: min(100%, 80rem);
  margin-inline: auto;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  text-align: center;
`;

const DesignText = styled.h2`
  font-weight: bold;
  font-size: clamp(1.75rem, 1.5897rem + 0.5128vw, 2rem);
  letter-spacing: 0.021rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  border-bottom: 5px solid rgba(41, 40, 87, 1);
`;
const MainText = styled.div`
  font-size: clamp(3rem, 2.359rem + 2.0513vw, 4rem);
  color: #292857;
  font-weight: 600;
  letter-spacing: 4px;
  line-height: 40px;
  margin-bottom: 1rem;
`;
const Decriptions = styled.div`
  font-size: clamp(1rem, 1.6795rem + 1.0256vw, 2.5rem);
  color: #635c7d;
`;

const Arrow = keyframes`
0%{
    transform: translateY(-0.5rem);
}
100%{
    transform: translateY(0.5rem);
}
`

const ArrowDown = styled.div`
font-size: 2rem;
position: absolute;
bottom: 4rem;
cursor: pointer;
color: #292857;
animation: ${Arrow} 1.1s linear infinite alternate;
`