import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import {fakeMenu1, fakeMenu2} from '../../../../fakeData/fakeMenu';
import Product from './Product';
import { formatPrice } from '../../../../utils/maths'; 
import Card from '../../../reusable-ui/Card';

export default function Menu() {

  const [menu, setMenu] = useState(fakeMenu2);
 

  return (
    <MenuStyled className='menu'>
        {menu.map( (products, index) => { 
          // return <Product key={products.id} imageSource={products.imageSource} title={products.title} leftDescription={formatPrice(products.price)} />
          return <Card key={products.id} imageSource={products.imageSource} title={products.title} leftDescription={formatPrice(products.price)} />
        })}
    </MenuStyled>
  )
}

const MenuStyled = styled.div`
    background: ${theme.colors.background_white};
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    display: grid;
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-row-gap: 60px;
    padding: 50px 50px 150px;
    justify-items: center;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    overflow-y: scroll;
   

    

`
