import { useState } from "react";
import styled from "styled-components"

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
    background: blue;
    

`

