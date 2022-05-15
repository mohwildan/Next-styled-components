import styled from "styled-components";
function ToggleMenu({ click, setClick }) {
  return (
    <NavTogle onClick={() => setClick(!click)}>
      <div className={click ? "toggle-list" : ""}></div>
      <div className={click ? "toggle-list" : ""}></div>
      <div className={click ? "toggle-list" : ""}></div>
    </NavTogle>
  );
}

export default ToggleMenu;

const NavTogle = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
  div {
    width: 35px;
    height: 3px;
    background-color: #292857;
    display: block;
    border-radius: 4px;
    margin-block: 7px;
    transition: .3s;
  }
`;
