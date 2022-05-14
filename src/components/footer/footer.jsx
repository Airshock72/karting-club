import React from 'react';
import './footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-distributed">
      <div className="footer-right">
        <a
          href="https://www.facebook.com/KartingClubGeorgia"
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <i className="fa fa-facebook"></i>
        </a>

        <p className="copyright">Karting Club &copy; {year}</p>
      </div>

      <div className="footer-left">
        <div className="footer-contacts">
          <h3>Irakli Khidesheli (Teacher)</h3>
          <p>
            Tel: +995 593 66 42 33 &nbsp; &nbsp; WhatsApp: +995 593 66 42 33
          </p>

          <h3>Saba Gorelishvili (Teacher's Assistant) </h3>
          <p>
            Tel: +995 593 00 67 00 &nbsp; &nbsp; WhatsApp: +995 593 00 67 00
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
