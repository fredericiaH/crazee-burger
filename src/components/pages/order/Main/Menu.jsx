import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import {fakeMenu1, fakeMenu2} from '../../../../fakeData/fakeMenu';

export default function Menu() {

  const [menu, setMenu] = useState(fakeMenu2);
  // console.log(menu)

  return (
    <MenuStyled className='menu'>
      {/* <div className='menu'> */}
        {menu.map((products, index) => {
          return <div key={index} className='produit'>{products.title}</div>
        })}
      {/* </div> */}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
   

    
    .produit{
      //box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
      background: red;
      width: 240px;
      height: 330px;
      
    }

`
