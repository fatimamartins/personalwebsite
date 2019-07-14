import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <ul className="footer d-flex align-items-end justify-content-around">
        <li>
            <a href="https://www.linkedin.com/in/fatimaluisa-martins" target="_blank">
                <i className="fab fa-linkedin"></i>
            </a>
            
        </li>
        <li>
            <a href="#" target="_blank">
                <i className="fab fa-google-plus-g"></i>
            </a>
        </li>
        <li>
            <a href="#" target="_blank">
                <i className="fab fa-stack-overflow"></i>
            </a>
        </li>
        <li>
            <a href="#" target="_blank">
                <i className="fab fa-github"></i>
            </a>
        </li>
    </ul>
)

export default Footer;
