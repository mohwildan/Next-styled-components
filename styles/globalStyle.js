import { createGlobalStyle } from "styled-components";
import "@fontsource/source-sans-pro";

const GlobalStyle = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: "Source Sans Pro", sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

.toggle-list{
    transition: .3s;
}

.toggle-list:nth-child(1){
    transform: translateY(10px) rotate(45deg);
}

.toggle-list:nth-child(2){
    opacity: 0;
}

.toggle-list:nth-child(3){
    transform: translateY(-10px) rotate(-45deg);
}
`;

export default GlobalStyle;
