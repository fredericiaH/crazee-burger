import React from 'react'
import styled from 'styled-components'

export default function InputText({value, onChange, className, Icon, ...extraProps}) {
  return( 
        <div className={className}>
            {Icon}
            <input onChange={onChange} type="text" {...extraProps}/>
        </div>
  ) 
}

const InputTestStyled = styled.div`
    input{
        border: none;
        font-size: 15px;
        color: #17161a;
        
    }


    .input-with-icon{
        background-color: #fff;
        border-radius: 5px;
        display: flex;
        align-items: center;
        padding: 18px 24px;
        margin: 18px 0;
    }

    .icon{
        font-size: 15px;
        margin-right: 8px;
        color: #93a2b1;
    }
`