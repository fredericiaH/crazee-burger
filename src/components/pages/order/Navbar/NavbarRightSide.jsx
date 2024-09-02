import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyled>
      <div className='profil'>
        <h1>Hey, <span>{username}</span></h1>
        <Link to="/">
          <div className='deconnexion'>
            <small>Se deconnecter</small>
          </div>
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
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;

    .profil{
      text-align: right;
      margin-right: 10px;
      h1{
        font-weight: ${theme.fonts.weights.regular};
        color: ${theme.colors.greyBlue};
        font-size: 16px;
        margin: auto;

        span {
          color: ${theme.colors.primary};
        }

      }

      a{
        text-decoration: none;
      
      .deconnexion{
        &:hover{
          text-decoration: underline;
          color: ${theme.colors.greyDark};

        }
        small{
          font-size: ${theme.fonts.size.XXS};
          color: ${theme.colors.greyBlue};
          font-weight: ${theme.fonts.weights.medium};
        }
      }
    }

  }

  .icon-profil{
    height: auto;
    display: flex;
    font-size: ${theme.fonts.size.P4};
    color: ${theme.colors.greyBlue};
      

    }

  
    
      
`