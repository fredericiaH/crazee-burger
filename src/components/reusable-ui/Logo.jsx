import { useState } from "react";
import styled from "styled-components"
import {theme} from "../theme"

export default function Logo({className, onClick}) {
  return (
    <LogoStyled className={className}>
      <h1>crazee</h1>
      <img src="/images/F03-logo-orange.png" alt="icone burger"  onClick={onClick} />
      <h1>burger</h1>
    </LogoStyled>
  )
}

const LogoStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primary_burger};
    text-transform: uppercase;
    

    h1{
      font-weight: lighter;
      font-family: 'Amatic', cursive;
      font-size: ${theme.fonts.size.P4};
    }

    img{
      height: 60px;
      width: 80px;
      margin: 0.5px;
    }
`

