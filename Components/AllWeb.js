import Img1 from "/public/IMG/image 1.png";
import Img2 from "/public/IMG/image 2.png";
import Img3 from "/public/IMG/image 3.png";
import Img4 from "/public/IMG/image 4.png";
import Image from "next/image";
import styled from "styled-components";
function AllWeb() {
  return (
    <Container>
      <TitleWeb>All Websites</TitleWeb>
      <Website>
          <Image src={Img2} width={300} height={400} />
          <Image src={Img3} width={300} height={400} />
          <Image src={Img4} width={300} height={400} />
          <Image src={Img1} width={300} height={400} />
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
    border: 1px solid rgba(0, 0, 0, 1);
    border-radius: 20px;
    aspect-ratio: 1/3;
  }


  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

