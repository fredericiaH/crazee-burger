import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { theme } from '../../theme';
//import Nav from '../../reusable-ui/Nav';


export default function OrderPage() {
  const {username} = useParams();
  

  return (
    <OrderPageStyled>
      <div className='contenaire'> 
        <Navbar username={username}/>
        <Main />
      </div>
        
      
    </OrderPageStyled>
  )
}

const OrderPageStyled = styled.div`
  width: 100%;
  height: 100%;
  background: orange;
  position: absolute;
  display: flex;
  justify-content: center;
  
  
  

  .contenaire{
    
    background: red;
    margin-top: 1%;
    width: 95%;
    height: 95%;
    justify-content: center;
    border-radius: ${theme.borderRadius.extraRound};
    
  }


  

  
`
