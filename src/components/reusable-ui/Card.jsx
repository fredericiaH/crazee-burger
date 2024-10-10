import React from 'react'
import PrimaryButton from './PrimaryButton'
import styled from 'styled-components'
import { theme } from '../theme'

export default function Card({imageSource, title, leftDescription}) {
  return (
    <CardStyled>
        <div className='image'>
            <img src={imageSource} alt={title} />
        </div>
        <div className='info-text'>
            <div className='title'>{title}</div>
            <div className='description'>
                <div className='info-price'>{leftDescription}</div>
                <div className='info-button'>
                    <PrimaryButton className={'primary-button'} Text={"Ajouter"} />
                </div>
            </div>
        </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
    background: ${theme.colors.white};
    width: 240px;
    height: 330px;
    display: grid;
    grid-template-rows: auto;
    border-radius: 15px;
    margin-bottom: 10px;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);

    .image{
        /* border: 1px solid purple; */
        margin-top: 50px;
        margin-left: 20px;
        width: 200px;
        height: 145px;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    .info-text{
        /* border: 1px solid black; */
        margin-left: 20px;
        margin-right: 20px;
        margin-bottom: 10px;
        /* padding-left: 0px, 5px, 5px, 5px; */

        .title{
            text-transform: uppercase;
            margin-bottom: 10px;
            width: 200px;
            height: 26px;
            font-family: 'Amatic SC', cursive;
            font-weight:${theme.fonts.weights.bold};
            font-size: ${theme.fonts.size.P0};
        }

        .description{
            display: grid;
            grid-template-columns: 1fr 1fr;
            


            .info-price{
                /* border: 2px solid green; */
                display: flex;
                justify-content: flex-start;
                align-items: center;
                color: ${theme.colors.primary};
            }

            .info-button{
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

