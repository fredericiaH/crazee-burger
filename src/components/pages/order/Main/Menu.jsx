import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function Menu() {
  return (
    <MenuStyled>Menu</MenuStyled>
  )
}

const MenuStyled = styled.div`
    background: purple;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
`
