import Image from "next/image";
import styled from "styled-components";
function AllWeb() {
  return (
    <Container>
      <TitleWeb>All Websites</TitleWeb>
      <Website>
          <img src="/image 4.png"/>
          <img src="/image 3.png"/>
          <img src="/image 2.png"/>
          <img src="/image 1.png"/>
      </Website>
    </Container>
  );
}

export default AllWeb;

const Container = styled.div`
  width: min(100%, 80rem);
  margin-inline: auto;
`;
const TitleWeb = styled.h3`
  font-size: clamp(2.1875rem, 1.5865rem + 1.9231vw, 3.125rem);
  text-align: center;
  color: #443466;
  padding-bottom: 4rem;
`;
const Website = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5rem;
   img {
   width: 100%;
   border-radius: 20px;
  }


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

