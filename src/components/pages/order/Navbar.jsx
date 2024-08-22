import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from "../../theme";
import { BsPersonCircle } from 'react-icons/bs';
import NavbarRightSide from './NavbarRightSide';
import NavbarLeftSide from './NavbarLeftSide';

export default function Navbar({ username }) {
    
  return (
    <NavbarStyled>
        <NavbarLeftSide />
        <NavbarRightSide username={username}/>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
   
    background: ${theme.colors.white};
    height: 10%;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};

`
