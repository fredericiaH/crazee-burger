import React from 'react'
import Logo from '../../reusable-ui/Logo'
import styled from 'styled-components'

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
        <Logo className='dimension' />
    </NavbarLeftSideStyled>
  )
}


const NavbarLeftSideStyled = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    
    

    /* .dimension{
      

      h1{
        font-size: 16px;
      }

    } */
`