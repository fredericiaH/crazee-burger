import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme'
import PrimaryButton from '../../../reusable-ui/PrimaryButton'

export default function Product({id, imageSource, title, price, leftDescription}) {
  return(
        <ProductStyled>
            <div className='image'>
              <img src={imageSource} alt={title} />
            </div>
            <div className='info-text'>
              <div className='title'>{title}</div>
              <div className='description'>
                <div className='left-description'>{leftDescription}</div>
                <div className='right-descrption'>
                    <PrimaryButton className={"primary-button"} Text={"Ajouter"} />
                </div>
              </div>
            </div>
        </ProductStyled>
  
)}

const ProductStyled = styled.div`

  background: ${theme.colors.white};
  width: 240px;
  height: 330px;
  display: grid;
  grid-template-rows: 65% 1fr;
  border-radius: 15px;
  margin-bottom: 10px;
  box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);


    .image{
      /* border: 1px solid fuchsia; */
      margin-top: 50px;
      width: 200px;
      height: 145px;
      margin-left: 20px;

      img{
        width: 100%;
        height: 100%;
        object-fit: contain; //cover
      }
    }

    .info-text{
      /* border: 4px solid green; */
      width: 200px;
      height: 100px;
      margin-left: 20px;
      padding-left: 0px, 5px, 5px, 5px;

       .title{
        /* border: 1px solid purple; */
        text-transform: uppercase;
        width: 200px;
        height: 26px;
        font-family: 'Amatic SC', cursive;
        font-weight:${theme.fonts.weights.bold};
        font-size: ${theme.fonts.size.P0};
        
        
      }
      
      .description{
        display: grid;
        grid-template-columns: 1fr 1fr;
        


        .left-description{
          display: flex;
          justify-content: flex-start;
          color: ${theme.colors.primary}; 
          width: 95px;
          height: 66px;
          margin-top: 20px; //ou 10px ?
        }


        .right-description{
          display: flex;
          justify-content: flex-end;
          
          

          .primary-button {
            font-size: ${theme.fonts.size.XS};
            cursor: pointer;
            padding: 12px;
            
            
          }
        }
        

      } 
    }
      
    

`