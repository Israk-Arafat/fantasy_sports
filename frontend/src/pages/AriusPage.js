import React from "react";
import '../css/AriusPage.css';
import { Link } from 'react-router-dom';
import logo from '../ariusimg.png'

const AriusPage = () => {
    return (
        <div>
            <h1>Arius' Page:</h1>
            <img src={logo} alt="Logo" />;
            
            <Link to= "/other">
            <p>"Back to other"</p>
            </Link>

            <Link to= "/home">
            <p>"Let's go home"</p>
            </Link>

            <p className = "body">He He He Ha</p>
        </div>
    );

};
export default AriusPage;