import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../theme'

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled>
      <div className='profil'>
        <h1>Hey, <span>{username}</span></h1>
        <Link to="/">
          Se déconnecter
        </Link>
      </div>
      <div className='icon-profil'>
        <BsPersonCircle />
      </div>
    </NavbarRightSideStyled>
      
      
   
  )
}

const NavbarRightSideStyled = styled.div`
 
      display: flex; 
      flex-direction: row;
      align-items: center;
      justify-content: center;
      padding-right: 5%;


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

        &:hover{
          text-decoration: underline;
        }
      }
      


`

