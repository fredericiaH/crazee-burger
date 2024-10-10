import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import Menu from './Menu'
import Basket from './Basket'

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <Menu  />
    </MainStyled>
  )
}

const MainStyled = styled.div`
  background: ${theme.colors.background_white};
  height: 90%;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  display: grid;
  /* grid-template-columns: 25% 75%; */
  grid-template-columns: 1fr;
  overflow-y: scroll;
`
