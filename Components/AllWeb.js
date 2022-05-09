import styled from "styled-components";
import { FiExternalLink } from "react-icons/fi";
function AllWeb() {
  return (
    <Container>
      <TitleWeb>All Websites</TitleWeb>
      <Website>
        <ImgContainer>
          <img src="/image 2.png" />
          <div className="link-all-web">
            <FiExternalLink />
          </div>
          <TextMainAllWeb>
            Hochburg <Has>#</Has>
          </TextMainAllWeb>
        </ImgContainer>
        <ImgContainer>
          <img src="/image 3.png" />
          <div className="link-all-web">
            <FiExternalLink />
          </div>
          <TextMainAllWeb>
            Refresh Studio <Has>#</Has>
          </TextMainAllWeb>
        </ImgContainer>
        <ImgContainer>
          <img src="/image 4.png" />
          <div className="link-all-web">
            <FiExternalLink />
          </div>
          <TextMainAllWeb>
            Rppld.co <Has>#</Has>
          </TextMainAllWeb>
        </ImgContainer>
        <ImgContainer>
          <img src="/image 1.png" />
          <div className="link-all-web">
            <FiExternalLink />
          </div>
          <TextMainAllWeb>
            Hello Monday <Has>#</Has>
          </TextMainAllWeb>
        </ImgContainer>
      </Website>
    </Container>
  );
}

export default AllWeb;

const Container = styled.div`
  width: min(100%, 80rem);
  margin-inline: auto;
  padding: 0 1.5rem;
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
    position: relative;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;

  &:hover .link-all-web{
      opacity: 1;
  }

  .link-all-web {
  position: absolute;
  font-size: clamp(1rem, 0.3718rem + 1.4103vw, 1.5rem);
  right: 1.5rem;
  bottom: 10rem;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem;
  cursor: pointer;
  opacity: 0;
  transition: 0.3s;
  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem;
  -moz-border-radius: 0.5rem;
  -ms-border-radius: 0.5rem;
  -o-border-radius: 0.5rem;
}

@media(max-width:768px){
  .link-all-web{
    bottom: 8rem;
  }
}
`;
const TextMainAllWeb = styled.h3`
  font-weight: 600;
  font-size: clamp(1.875rem, 1.4744rem + 1.2821vw, 2.3rem);
  text-align: center;
  color: #333;

  &:hover span {
    opacity: 1;
  }
`;

const Has = styled.span`
  font-size: clamp(1.875rem, 1.4744rem + 1.2821vw, 2.3rem);
  margin-right: 1rem;
  font-weight: bold;
  color: #000;
  transition: all 0.3s;
  opacity: 0;
  cursor: pointer;
`;


