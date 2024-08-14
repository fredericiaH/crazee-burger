import { useState } from "react";
import styled from "styled-components"
import {theme} from "../theme"

export default function Logo() {
  return (
    <LogoStyled>
      <h1>crazee</h1>
      <img src="./images/F03 logo-orange.png" alt="icone burger" />
      <h1>burger</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    //background: blue;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primary_burger};
    text-transform: uppercase;
    transform: scale(1.5);

    h1{
      font-weight: lighter;
      font-family: 'Amatic', cursive;
      font-size: ${theme.fonts.size.P4};
    }

    img{
      width: 15%;
      padding: 2%;
    }
`

