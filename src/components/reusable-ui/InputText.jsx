import React from 'react'
import styled from 'styled-components'
import { theme } from '../theme'

export default function InputText({value, onChange, Icon, ...extraProps}) {
  return( 
        <InputTextStyled>
            {Icon}
            <input onChange={onChange} type="text" {...extraProps}/>
        </InputTextStyled>
  ) 
}

const InputTextStyled = styled.div`
        background-color: ${theme.colors.white};
        border-radius: ${theme.borderRadius.round};
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;


    input{
        border: none;
        font-size: ${theme.fonts.size.P0};
        color: ${theme.colors.dark};
   
    }


    .icon{
        font-size: ${theme.fonts.size.P0};
        margin-right: 8px;
        color: ${theme.colors.greySemiDark};
    }
`