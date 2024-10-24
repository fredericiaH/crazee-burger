import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import Menu from './Menu'
import Basket from './Basket'

export default function Main() {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className='admin-and-menu'>
        <Menu  />
        <div className='admin'>Admin</div>
      </div>
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
  


  .admin-and-menu{
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-bottom-left-radius: ${theme.borderRadius.extraRound};
    border-bottom-right-radius: ${theme.borderRadius.extraRound};
    
    .admin{
      background: red;
      height: 250px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
  
`
