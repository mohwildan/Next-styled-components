import styled from "styled-components";
function ServicesContents() {
  return (
    <ContainerContent>
      <Contents>
        <ContentLeft>
          <ContentsText>The Brooklyn Tower</ContentsText>
          <ContentsDescrip>
            The Brooklyn Tower Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Ultrices purus hac feugiat etiam sit amet.
          </ContentsDescrip>
          <ContentsButton>
            <Button warna tidak>
              Download
            </Button>
            <Button>Live Demo</Button>
          </ContentsButton>
        </ContentLeft>
        <ContentsRight>
          <img src="/image 9.png" alt="" />
        </ContentsRight>
      </Contents>
      <Contents>
        <ContentLeft>
          <ContentsText>Rob Northam</ContentsText>
          <ContentsDescrip>
            Rob Northam Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Ultrices wio oo purus hac feugiat etiam sit amet.
          </ContentsDescrip>
          <ContentsButton>
            <Button warna tidak>
              Download
            </Button>
            <Button>Live Demo</Button>
          </ContentsButton>
        </ContentLeft>
        <ContentsRight>
          <img src="/image 10.png" alt="" />
        </ContentsRight>
      </Contents>
      <Contents>
        <ContentLeft>
          <ContentsText>The LA Art Box</ContentsText>
          <ContentsDescrip>
            The LA Art Box Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Ultrices purus sud no hac feugiat etiam sit amet.
          </ContentsDescrip>
          <ContentsButton>
            <Button warna tidak>
              Download
            </Button>
            <Button>Live Demo</Button>
          </ContentsButton>
        </ContentLeft>
        <ContentsRight>
          <img src="/image 11.png" alt="" />
        </ContentsRight>
      </Contents>
    </ContainerContent>
  );
}

export default ServicesContents;

const ContainerContent = styled.div`
  padding-top: 10rem;
`;
const Contents = styled.div`
  display: flex;
  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContentLeft = styled.div`
  margin-bottom: 3rem;
`;
const ContentsText = styled.h3`
  font-size: clamp(1.5rem, 1.0593rem + 1.4103vw, 2.1875rem);
  font-weight: 500;
  margin-bottom: -0.8rem;
`;
const ContentsDescrip = styled.p`
  font-size: clamp(1rem, 0.6795rem + 1.0256vw, 1.5rem);
  font-weight: 400;
  opacity: 0.7;
`;
const ContentsButton = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Button = styled.button`
  border: ${(props) => (props.tidak ? "none" : "border: 3px solid #000000")};
  background-color: ${(props) => (props.warna ? "#443466" : "transparent")};
  outline: none;
  padding: 0.5rem 2rem;
  font-size: 1.1rem;
  margin-right: 2rem;
  color: ${(props) => (props.warna ? "#fff" : "#000")};
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 768px) {
    margin: 0.4rem 0;
  }
`;
const ContentsRight = styled.div`
  width: 100%;

  img {
    width: 100%;
  }
`;
