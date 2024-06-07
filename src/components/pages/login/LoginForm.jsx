import { useState } from "react";
import OrderPage from "../order/OrderPage";
import { Link } from "react-router-dom";

export default function LoginForm(){
    //States

    const [name, setName] = useState("");

    //Comportements

    const handleSubmit = (event) => {
        alert("Bonjour " + `${name}`);
        setName("");
        
    }

    const handleChange = (event) => {
        event.preventDefault();
        setName(event.target.value);
        
    }
    //Affichage


    return(
        <form action="submit" onSubmit={handleSubmit}>
            <h1>Bienvenue chez nous</h1>
            <h2>Connectez-vous</h2>
            <br/>
            <input type="text" placeholder="Entrez votre prenom..." onChange={handleChange} required />
            <Link to="/order">
                <button>Acceder à votre espace</button>
            </Link>

        </form>

    )
    
}