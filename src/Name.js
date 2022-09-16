import { useState } from "react";
import './styles/card.css';

const Name = () => {

    const [name , setName] = useState("Aman");
    return (
        <div class="card">
        <div class="header">
            <p>{name}</p>
        </div>
            <div class="container">
            <button onClick={() => {setName("Aditya")}}> Change Name</button>
        </div>
    </div>
    );

    
}

export default Name;