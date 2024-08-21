import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from './Navbar';
import Main from './Main';
//import Nav from '../../reusable-ui/Nav';


export default function OrderPage() {
  const {username} = useParams();
  

  return (
    <OrderPageStyled>
      <div className='contenaire'> 
        <Navbar username={username}/>
        {/*<div className='navbar'>navbar</div>*/}
        {/*<Main />*/}
        <div className='main'>main</div>
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
    border: 2px solid red;
    margin-top: 1%;
    width: 95%;
    height: 95%;
    
  }

  

  .main{
    background: green;
    height: 85%;
  }

  
`
