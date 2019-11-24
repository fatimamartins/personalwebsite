import React from 'react';
import { NavLink } from 'react-router-dom';


const NavBar = () => (
    <nav className="nav">
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="active" className="button--nav d-flex align-items-center">
                    <p>Profile</p>
                    <i className="arrow-icon fas fa-angle-right"></i>
                    <i className="icon-mobile fas fa-user"></i>
                </NavLink>
                
            </li>

            <li>
                <NavLink to="/skills" activeClassName="active" className="button--nav d-flex align-items-center">
                <p>Skills</p>
                    <i className="arrow-icon fas fa-angle-right"></i>
                    <i class="icon-mobile far fa-file-code"></i>
                </NavLink>
            </li>

            <li>
                <NavLink to="/portfolio" activeClassName="active" className="button--nav d-flex align-items-center">
                <p>Portfolio</p>
                    <i className="arrow-icon fas fa-angle-right"></i>
                    <i class="icon-mobile fas fa-book"></i>
                </NavLink>
            </li>

            <li>
                <NavLink to="/resume" activeClassName="active" className="button--nav d-flex align-items-center">
                <p>Curriculum Vitae</p>
                    <i className="arrow-icon fas fa-angle-right"></i>
                    <i class="icon-mobile far fa-file"></i>
                </NavLink>
            </li>

            <li>
                <NavLink to="/contact" activeClassName="active" className="button--nav d-flex align-items-center">
                <p>Contact</p>
                    <i className="arrow-icon fas fa-angle-right"></i>
                    <i class="icon-mobile far fa-envelope"></i>
                </NavLink>
            </li>
        </ul>
    </nav>
)

export default NavBar;