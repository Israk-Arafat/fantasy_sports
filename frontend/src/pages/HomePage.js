import React from "react";
import '../css/HomePage.css';
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div className= "body"> { }
            {
        <div className="body">
            <section>
            <h1>Home</h1>
                <div className="box">
                    <Link to= "/other">
                    <p>"Hello World"</p>
                    </Link>
                </div>
            </section>
            </div>
            }
        </div>
      );
};
export default HomePage;