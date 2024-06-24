import { useState } from "react";
import OrderPage from "../order/OrderPage";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";


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
            <h1>Bienvenue chez nous</h1>
            <h2>Connectez-vous</h2>
            <br/>
            <input type="text" placeholder="Entrez votre prenom..." onChange={handleChange} required />
                
            <button>Acceder à votre espace</button>
        </LoginFormStyled>
    )
    
}

const LoginFormStyled = styled.form`
    background: green;
    /*display: flex;
    flex-direction: column;*/

`