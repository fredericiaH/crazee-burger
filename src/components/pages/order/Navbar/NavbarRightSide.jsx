import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../../theme'
import ToggleButton from '../../../reusable-ui/ToggleButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ToastAdmin from './ToastAdmin'

export default function NavbarRightSide({username}) {

  const [isModeAdmin, setIsModeAdmin] = useState(false);

  
  const toastNotification = () =>{
    if(!isModeAdmin){
      toast.info("Mode admin activé", {

        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin)
  }

  return (
    <NavbarRightSideStyled>
      <div className="ecart" >
        <ToggleButton 
          labelIfChecked="DESACTIVER LE MODE ADMIN" 
          labelIfUnchecked="ACTIVER LE MODE ADMIN"
          onToggle={toastNotification}
        />
        <ToastAdmin />
      </div>
      
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

   
    

    .ecart{
      margin-right: 50px;
    }

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