import { useState } from "react";
import OrderPage from "../order/OrderPage";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../theme";
import { BsPersonCircle } from "react-icons/bs";
import { IoChevronForward } from "react-icons/io5";
import InputText from "../../reusable-ui/InputText";




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
            <div>
                <h1>Bienvenue chez nous !</h1>
                <hr/>
                <h2>Connectez-vous</h2>
            </div>
            <div>
                <InputText 
                    value={name}
                    onChange={handleChange}
                    Icon={<BsPersonCircle className="icon" />
                    }
                    placeholder={"Entrez votre prenom..."}
                    required
                    className={"input-with-icon"}



                 /> 
                <button className="button-with-icon">
                    <span>Acceder à mon espace</span>
                    <IoChevronForward className="icon-forward" />
                </button>
            </div>
        </LoginFormStyled>
    )
    
}

const LoginFormStyled = styled.form`
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

    



    .button-with-icon{
        display: inline-flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        align-items: center;
        
        
        padding: 18px;
        border-radius: 5px;
        font-size: 15px;
        font-weight: ${theme.weights.heavy};
        color: white;
        background-color: ${theme.colors.primary_burger};
        border: 1px solid ${theme.colors.primary_burger} ;

        &:hover:not(:disabled) {
        background-color: white;
        color: #ff9f1b;
        transition: all 200ms ease-out;
    }
    }

   
    .icon-forward{
        justify-content: center;
        align-items: center;
        font-size: 15px;
        margin-left: 10px;
        white-space: nowrap;
    }

`