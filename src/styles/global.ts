import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
html{
  @media (max-width:1080px) {
    font-size: 93.75%; //15 px
  }
  @media (max-width:720px) {
   font-size:87.5%;
  }
}
button{
  cursor: pointer;
}
.react-modal-overlay{
background: rgba(0,0,0,0.5);
position: fixed;
top:0;
bottom: 0;
left: 0;
right: 0;

display: flex;
align-items: center;
justify-content: center;
}
.react-modal-content{
width: 100%;
max-width: 576px;
background: #f0f2f5;
padding: 3rem;
position: relative;
border-radius: 0.25rem;
}
.react-modal-close{
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover{
    filter: brightness(0.8);
  }
}
`;
