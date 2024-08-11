import { useState } from "react";
import OrderPage from "../order/OrderPage";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";


export default function LoginForm(){
    //States

    const [name, setName] = useState("");
    
    const navigate = useNavigate();
    

    //Comportements

    const handleSubmit = (event) => {
        event.preventDefault();
        setName("");
        navigate(`order/${name}`)
    }

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
        
    }
    //Affichage


    return(
        <LoginFormStyled action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous !</h1>
            <hr/>
            <h2>Connectez-vous</h2>
            <input type="text" placeholder="Entrez votre prenom..." onChange={handleChange} required />
                
            <button>Acceder à mon espace</button>
        </LoginFormStyled>
    )
    
}

const LoginFormStyled = styled.form`
    background: green;
    text-align: center;
    max-width: 500px;
    min-width: 400px;
    margin: 0px auto;
    padding: 2.5rem 2rem;
    border-radius: 5px;
    font-family: "Amatic SC", cursive;
    
    
    

    h2{
        color: #8e8b8b;
        margin: 20px 10px 10px;
        color: white;
        font-size: 36px;
        
    }

    h1{
        color: white;
        font-size: 47px;
    }
    

    hr{
        border: 1.5px solid ${theme.colors.redSecondary};
        margin-bottom: 40px;
    }

    input{
        width: 73%;
        height: 40px;
        padding-left: 10%;
        padding-right: 2%;
        border-radius: ${theme.borderRadius.round};
    }

    button{
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary_burger};
        margin-top: 10px;
        width: 86%;
        height: 45px;
        border-radius: ${theme.borderRadius.round};
    }

    

`