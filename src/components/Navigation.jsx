import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <nav className="nav container">
            <li id="navbar-header">
                ✨Camille Bagnani✨
            </li>
            <div>
                <ul className="navbar" id="navbar">
                    <li>
                        <NavLink to="/">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/portfolio"
                        >
                            Portfolio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            Contact
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/resume">
                            Resume
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
};