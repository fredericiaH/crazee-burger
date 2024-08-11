import { useState } from "react";
import OrderPage from "../order/OrderPage";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";
import { BsPersonCircle } from "react-icons/bs";



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
            <div className="input-with-icon">
                <BsPersonCircle className="icon" />
                <input type="text" placeholder="Entrez votre prenom..." onChange={handleChange} required />
            </div>   
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
        border: none;
        font-size: 15px;
        color: #17161a;
        
    }

    button{
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary_burger};
        margin-top: 10px;
        width: 86%;
        height: 45px;
        border-radius: ${theme.borderRadius.round};
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

    /*&::placeholder{
        background: white;
        color: lightgrey;
    }*/
    

    

`