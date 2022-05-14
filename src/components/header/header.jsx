import React from 'react';
import './header.css';
import Logo from '../../images/130980302_1534335080101258_2878631675978030243_n.jpg';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <button className="logo" onClick={() => navigate('/karting-club')}>
        <img
          src={Logo}
          alt="title logo"
          width="100"
          height="100"
          className="title-logo"
        />
      </button>
      <nav>
        <ul className="navlinks">
          <li>
            <a
              href="https://www.facebook.com/KartingClubGeorgia/photos/?ref=page_internal"
              target="_blank"
              rel="noreferrer"
            >
              Gallery
            </a>
          </li>
          <li>
            <button onClick={() => navigate('/about')}>About</button>
          </li>
          <li>
            <button onClick={() => navigate('/location')}>Location</button>
          </li>
        </ul>
      </nav>
      {/* <div> ეს უნდა იყოს footer-ში
        <h3>Irakli Khidesheli (Teacher)</h3>
        <p>+995 593 66 42 33</p>

        <h3>Saba Gorelishvili (Teacher's Assistant) </h3>
        <p>+995 593 00 67 00</p>
      </div> */}
    </header>
  );
};

export default Header;
