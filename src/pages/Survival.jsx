import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Survival() {
    const navigate = useNavigate();
    const home = () =>  navigate('/');
    return (
        <>
            <h1>Hello!</h1>
        </>
    );
}

export default Survival;