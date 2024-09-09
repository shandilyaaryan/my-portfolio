import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Aryan Shandilya</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>

          <li>
            <a href="#contact" className="footer__link">Contact</a>
          </li>
        </ul>

        <div className="footer__social">
        <a href="https://github.com/shandilyaaryan" className="home__social-icon" target="_blank">
            <i className="uil uil-github-alt "></i>
        </a>
        <a href="https://www.linkedin.com/in/aryanshandilya" className="home__social-icon" target="_blank">
        <i class="uil uil-linkedin-alt"></i>
        </a>
        <a href="https://x.com/shandilyaaryan7" className="home__social-icon" target="_blank">
            <i className="uil uil-twitter-alt"></i>
        </a>
        </div>

        <span className="footer__copy">&#169; Aryan Shandilya. All rights reserved</span>
      </div>
    </footer>
  )
}

export default Footer