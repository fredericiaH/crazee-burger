import React from 'react'
import styled from 'styled-components'

export default function InputText({value, onChange, className, Icon, ...extraProps}) {
  return( 
        <InputTextStyled className={className}>
            {Icon}
            <input onChange={onChange} type="text" {...extraProps}/>
        </InputTextStyled>
  ) 
}

const InputTextStyled = styled.div`
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;


    input{
        border: none;
        font-size: 15px;
        color: #17161a;
        
    }


    .icon{
        font-size: 15px;
        margin-right: 8px;
        color: #93a2b1;
    }
`