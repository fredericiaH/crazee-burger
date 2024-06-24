import { useState } from "react";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Logo from "../../reusable-ui/Logo";

export default function LoginPage(){
    

    return(
        <LoginPageStyled>
            <Logo />
            <LoginForm />
        </LoginPageStyled>

    )
}


    const LoginPageStyled = styled.div`
        background: url("./images/F03burger.jpg") rgba(0, 0, 0, 0.7);
        background-size: cover;
        height: 100vh;
        //width: 180vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-blend-mode: darken;
        
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        //z-index: -1;

        


        /*::before{
            content: "avant";
            
            
            
        }*/
    `
