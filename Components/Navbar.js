import Link from "next/link";
import styled from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { useState, useEffect } from "react";

function Navbar() {
  const [click, setClick] = useState(false);
  return (
    <NavbarHeader>
      <NavbarContainer>
        <Link href="">
          <Logo>MechaMaru.</Logo>
        </Link>
        <NavMenu click={click}>
          <NavItem>
            <Link href="/">
              <Rounded>
                <Item white>Home</Item>
              </Rounded>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <Item>About</Item>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <Item>Services</Item>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/">
              <Item>Contact</Item>
            </Link>
          </NavItem>
        </NavMenu>
        <NavTogle onClick={() => setClick(!click)}>
          {click ? <FaTimes /> : <FaBars />}
        </NavTogle>
        <Div style={{position: "relative"}}>
          <NavInput type="text" placeholder={`Cari`} />
          <Search>
            {<BiSearchAlt />}
          </Search>
        </Div>
      </NavbarContainer>
    </NavbarHeader>
  );
}

export default Navbar;

const NavbarHeader = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2px 13px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 5rem;
  z-index: 10;
`;
const NavbarContainer = styled.div`
  width: min(100%, 80rem);
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
`;
const Logo = styled.a`
  font-size: 2rem;
  color: #292857;
  font-weight: 600;
  letter-spacing: 4px;
  font-size: clamp(1.575rem, 1.3026rem + 0.8718vw, 2rem);
`;
const NavMenu = styled.ul`
  display: flex;

  @media (max-width: 768px) {
    position: absolute;
    left: ${(props) => (props.click ? "0" : "-100%")};
    background-color: #fff;
    top: 3rem;
    flex-direction: column;
    height: 400px;
    justify-content: center;
    width: 100%;
    align-items: center;
    transition: 0.3s ease-out;
  }
`;
const NavItem = styled.li`
  list-style: none;
  margin-right: 1rem;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;
const Item = styled.a`
  color: ${(props) => (props.white ? "#fff" : "#000")};
  font-weight: ${(props) => (props.white ? "700" : "")};
  opacity: 0.8;
  position: relative;
  font-size: clamp(0.8125rem, 0.6923rem + 0.3846vw, 1rem);

  &::after {
    content: "";
    position: absolute;
    background-color: #292857;
    width: 0%;
    height: 3px;
    bottom: -2px;
    left: 50%;
    transition: all 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    left: 0;
  }

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 1.1795rem + 1.0256vw, 2rem);
  }
`;
const Rounded = styled.span`
  width: 76px;
  height: 28px;
  background: #443466;
  border-radius: 100px;
  padding: 0.3rem 1rem;

  @media (max-width: 768px) {
    width: auto;
    height: auto;
    background-color: transparent;
    border-radius: 0;
    padding: 0;

    a:first-child {
      color: #000;
      font-weight: 400;
    }
  }
`;
const NavInput = styled.input`
  outline: none;
  height: 3rem;
  width: 18rem;
  border: none;
  background: #fbfbfb;
  box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 1rem;
  color: gray;
  padding-left: 0.5rem;
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 900px) {
    width: 14rem;
  }
`;

const NavTogle = styled.div`
  font-size: 1.3rem;
  color: #292857;

  @media (min-width: 768px) {
    display: none;
  }
`;
const Div = styled.div`
@media(max-width:768px){
  display: none;
}
`
const Search = styled.div`
position: absolute;
right: 0;
top: 0;
transform: translate(-100%, 100%);
color: #292857;

@media(max-width:768px){
  display: none;
}
`