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

        {/* <div className='RightSide'>
          <div className='profil'>
            <h1>Hey, <span>{username}</span></h1>
            <Link to="/">
            <a>Se déconnecter</a>
            </Link>
          </div>
          <div className='icon-profil'>
            <BsPersonCircle />
          </div>
        </div> */}
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
   
    background: blue;
    height: 10%;
    display: flex;
    justify-content: space-between;
    
    
    /* .RightSide{
      display: flex; 
      flex-direction: row;
      padding-right: 5%;
      align-items: center;
      justify-content: center;


      .icon-profil{
        margin-top: 10px;
        height: 36px;
        width: 36px;
        padding-left: 8px;
        
        font-size: ${theme.fonts.size.P4};
        color: ${theme.colors.greyBlue};

      }
      
      h1{
        font-size: 16px;
        margin-bottom: 0%;
        font-weight:${theme.fonts.weights.regular};
        color: ${theme.colors.greyBlue};

        span{
          color: ${theme.colors.primary};
          font-weight:${theme.fonts.weights.bold};
        }
      }

      a{
        font-size: ${theme.fonts.size.XXS};
        color: ${theme.colors.greyBlue};
        font-weight: ${theme.fonts.weights.medium};
        text-decoration: none;
      }
      

      
    }
   */
`
