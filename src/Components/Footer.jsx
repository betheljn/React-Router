import React from 'react';
import { Link } from 'react-router-dom';
// import Home from './Home';
// import Blue from './Blue';
// import Red from './Red'

const Footer = () => {
    return (
      <div className='footer'>
        <footer>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blue">Blue</Link>
              </li>
              <li>
                <Link to="/red">Red</Link>
              </li>
              <li>
                <Link to="/green">Green</Link>
              </li>
              <li>
                <Link to="/yellow">Yellow</Link>
              </li>
              {/* Add more <li> elements for other routes */}
            </ul>
          </nav>
        </footer>
      </div>
    );
  };

export default Footer;

