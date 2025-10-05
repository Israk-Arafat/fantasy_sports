import React from "react";
import '../css/Other.css';
import { Link } from 'react-router-dom';


const Other = () => {
    const games = [
        { title: "UMaine @ UNH Hockey", id: 1, image: "UMaine_logo.png", image2: "UNH_logo.png", score: "UMaine: 3 UNH: 0"},
        { title: "UMaine @ Husson Football", id: 2, image: "UMaine_logo.png", image2: "Husson_logo.png", score: "UMaine: 14 Husson: 24" },
        { title: "UMaine @ NYU Hockey", id: 3, image: "UMaine_logo.png", image2: "NYU_logo.jpg", score: "UMaine: 1 NYU: 4" },
        // Add more games as needed
    ];

    return (
        <div>
            <header>
                <h1>UMaine Sports Betting</h1>
                <h2>Tonight's Games</h2>
            </header>

            <div className="content-container">
                {games.map((game) => (
                    <main key={game.id}>
                        <div className="team-container">
                            <img src={`/images/${game.image}`} alt={`Team ${game.id}`} width="100" height="100" />
                            <p className="vs-text">VS</p>
                            <img src={`/images/${game.image2}`} alt={`Team ${game.id}`} width="100" height="100" />
                        </div>
                        <h1>{game.title}</h1>
                        <p>{game.score}</p>
                        <Link to="/home">
                            <p>Back to Home</p>
                        </Link>
                    </main>
                ))}
            </div>

            <footer>
                <p>&copy; 2023 Fantasy Sports Betting</p>
            </footer>
        </div>
    );
};

export default Other;

