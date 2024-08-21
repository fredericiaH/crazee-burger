import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from "../../theme";
import { BsPersonCircle } from 'react-icons/bs';

export default function Navbar({ username }) {
    
  return (
    <NavbarStyled>
        <div>LeftSide</div>
        <div className='RightSide'>
          <div className='profil'>
            <h1>Hey, <span>{username}</span></h1>
            <Link to="/">
            <a>Se déconnecter</a>
            </Link>
          </div>
          <div className='icon-profil'>
            <BsPersonCircle />
          </div>
        </div>
    </NavbarStyled>
  )
}

const NavbarStyled = styled.div`
   
    background: blue;
    height: 15%;
    /*background: blue;
    display: flex;
    align-items: center;
    justify-content: space-between;*/
    

  

    .RightSide{
      
      /*
      display: flex;
      align-items: center;
      margin-right: 70px;*/
      
      

      .icon-profil{
        height: auto;
        display: flex;
        height: 100%;
        font-size: ${theme.fonts.size.P4};
        color: ${theme.colors.greyBlue};
      }

      .profil{
        
        display: flex;
        flex-direction: column;
        color: ${theme.colors.greyBlue};
        //text-align: right;
      }
      

      span{
        color: ${theme.colors.primary};
      }

      

      h1{
        font-size: 16px ;
        font-weight: ${theme.fonts.weights.regular};
        margin: 0;
        color: ${theme.colors.greyBlue};
        margin-right: 10px;
        text-align: right;
        padding-bottom: 5px;
        padding-left: 3px;
      }
      
      a{
        font-size: ${theme.fonts.size.XXS};
        color: ${theme.colors.greyBlue};
        font-weight: ${theme.fonts.weights.medium};
        text-decoration: none;
        //position: relative;
        bottom: 2px;
        padding-top: 5px;

        
        
      }


    }
  
`
