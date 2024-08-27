import React from 'react'
import Logo from '../../reusable-ui/Logo'
import styled from 'styled-components'

export default function NavbarLeftSide() {
  return (
    <NavbarLeftSideStyled>
        <Logo onClick={() => window.location.reload()} className='logo-order-page' />
    </NavbarLeftSideStyled>
  )
}


const NavbarLeftSideStyled = styled.div`
    display: flex; 
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    
    

    .logo-order-page{
      cursor: pointer;
    }
`