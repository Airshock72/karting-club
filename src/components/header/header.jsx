import React from 'react';
import './header.css';
import Logo from '../../images/130980302_1534335080101258_2878631675978030243_n.jpg';

const Header = () => {
  return (
    <header>
      <a href="#">
        <img
          src={Logo}
          alt="title logo"
          width="100"
          height="100"
          className="title-logo"
        />
      </a>
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
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Location</a>
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