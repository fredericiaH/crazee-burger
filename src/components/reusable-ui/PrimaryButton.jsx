import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

export default function PrimaryButton({ Icon, Text, ...extraProps}) {

  return (
    <PrimaryButtonStyled>
        {Text}
        {Icon}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`

     
    display: inline-flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
        
        
    padding: 18px;
    border-radius: 5px;
    font-size: 15px;
    font-weight: ${theme.fonts.weights.heavy};
    color: white;
    background-color: ${theme.colors.primary_burger};
    border: 1px solid ${theme.colors.primary_burger} ;

    &:hover:not(:disabled) {
        background-color: white;
        color: #ff9f1b;
        transition: all 200ms ease-out;
    }
    

  

`