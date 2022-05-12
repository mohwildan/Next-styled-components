import styled from "styled-components";
import ContactInput from "./ContactInput";
import {AiOutlineInstagram,AiOutlineWhatsApp,AiOutlineTwitter} from "react-icons/ai"

function ContactContents() {
  return (
    <Container>
      <Contact>
        <ContactLeft>
        <AiOutlineInstagram />
        <AiOutlineWhatsApp />
        <AiOutlineTwitter />
        </ContactLeft>
        <ContactRight>
          <TextContact>Thank you for Contact</TextContact>
          <DescriptionContact>
            Whether you’re a seasoned web developer or you’re just starting out,
            I’d love to chat and share tips and tricks. Feel free to…
          </DescriptionContact>
          <ContactInput />
        </ContactRight>
      </Contact>
    </Container>
  );
}

export default ContactContents;

const Container = styled.div`
  width: min(100%, 80rem);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-inline: auto;
  padding-top: 5rem;
`;
const Contact = styled.div`
  width: 100%;
  display: flex;
  max-height: 100vh;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);

  @media(max-width:768px){
      flex-direction: column-reverse;
  }
`;
const ContactLeft = styled.div`
  background-color: #443466;
  flex: 1;
  display: flex;
  justify-content: space-around;
  font-size: 3.2rem;
  color: #fff;
  align-items: center;
`;
const ContactRight = styled.div`
  flex: 1;
  padding: 3rem;

   @media(max-width:600px){
      padding: 1.5rem;
  }
  @media(max-width:500px){
      padding: 1rem;
  }
`;

const TextContact = styled.h2`
  text-align: center;
  font-size: clamp(1.5rem, 1.1795rem + 1.0256vw, 2rem);
  font-weight: 600;
`;
const DescriptionContact = styled.p`
  font-size: clamp(1rem, 0.7196rem + 0.8974vw, 1.4375rem);
  opacity: 0.8;
`;
