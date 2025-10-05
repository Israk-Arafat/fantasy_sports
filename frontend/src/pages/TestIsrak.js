import React from 'react';
import '../css/TestIsrak.css';
import { Link } from 'react-router-dom';


const TestIsrak = () => {
  return (
      <div className="TestPage">
        <h2>Welcome to the Test Page!</h2>

        <Link to= "/home">
              <p>"Go to home"</p>
              </Link>
        <ul>
          <li>
            <a href="/other">Go to Other</a>
          </li>
          <li>
            <a href="/testIsrak">Go to testIsrak</a>
          </li>
          <li>
            <a href="/arius">Go to AriusPage</a>
          </li>
        </ul>
      </div>
  );
};

export default TestIsrak;
