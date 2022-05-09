import styled from 'styled-components'
import {DiResponsive} from "react-icons/di"
import {AiOutlineThunderbolt,AiOutlineTool} from "react-icons/ai"
import {BiDollar} from "react-icons/bi"

function MenuServices() {
  return (
    <MenuServicess>
      <Menu>
        <DiResponsive />
        <MenuText>Responsive</MenuText>
        <MenuDescription>Great on any device</MenuDescription>
      </Menu>
       <Menu>
        <AiOutlineThunderbolt />
        <MenuText>Fast</MenuText>
        <MenuDescription>Built for speed</MenuDescription>
      </Menu>
         <Menu>
        <AiOutlineTool />
        <MenuText>Customizable</MenuText>
        <MenuDescription>Customizable</MenuDescription>
      </Menu>
       <Menu>
        <BiDollar />
        <MenuText>Free</MenuText>
        <MenuDescription>CC BY-SA license</MenuDescription>
      </Menu>
    </MenuServicess>
  );
}

export default MenuServices;

const MenuServicess = styled.div`
display: flex;
justify-content: space-around;
width: 100%;

@media(max-width:768px){
    flex-direction: column;
}
`
const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 1.5rem;

svg{
    font-size: 5rem;
}
`
const MenuText = styled.h3`
margin-bottom: -1.2rem;
font-size: clamp(1.5rem, 1.1795rem + 1.0256vw, 2rem);
font-weight: 600;
`
const MenuDescription = styled.p`
font-size: clamp(1rem, 0.6795rem + 1.0256vw, 1.5rem);
font-weight: 400;
opacity: .7;
`