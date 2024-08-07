import { useState } from "react";
import styled from "styled-components"
import {theme} from "../theme"

export default function Logo() {
  return (
    <LogoStyled>
      <h1>CRAZEE</h1>
      <img src="./images/F03 logo-orange.png" alt="icone burger" />
      <h1>BURGER</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    //background: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primary_burger};
    //transform: scale(0.5);

    h1{
      font-weight: lighter;
      font-family: 'Amatic', cursive;
    }

    img{
      width: 15%;
      padding: 2%;
    }
`

