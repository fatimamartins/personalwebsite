import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <nav className="nav">
        <ul>
            <li className="active">
                <Link to="/" className="button--nav d-flex align-items-center justify-content-between">
                    Profile
                    <i class="fas fa-angle-right"></i>
                </Link>
            </li>

            <li>
                <Link to="/work" className="button--nav d-flex align-items-center justify-content-between">
                    Work
                    <i class="fas fa-angle-right"></i>
                </Link>
            </li>

            <li>
                <Link to="/resume" className="button--nav d-flex align-items-center justify-content-between">
                    Resume
                    <i class="fas fa-angle-right"></i>
                </Link>
            </li>

            <li>
                <Link to="/contact" className="button--nav d-flex align-items-center justify-content-between">
                    Contact
                    <i class="fas fa-angle-right"></i>
                </Link>
            </li>
        </ul>
    </nav>
)

export default NavBar;