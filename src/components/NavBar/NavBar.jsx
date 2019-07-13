import React from 'react';

const NavBar = () => (
    <nav className="nav">
        <ul>
            <li className="active">
                <button className="button button--nav">
                    <i className="fas fa-user"></i>
                    Profile
                </button>
            </li>

            <li>
                <button className="button button--nav">
                    <i className="fas fa-briefcase"></i>
                    Work
                </button>
            </li>

            <li>
                <button className="button button--nav">
                    <i className="fas fa-briefcase"></i>
                    Resume
                </button>
            </li>

            <li>
                <button className="button button--nav">
                    <i className="fas fa-briefcase"></i>
                    Contact
                </button>
            </li>
        </ul>
    </nav>
)

export default NavBar;