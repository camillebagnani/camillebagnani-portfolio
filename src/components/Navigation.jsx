import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <ul className="navbar">
            <li>
                <NavLink to="/" className={{}}>
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/portfolio"
                    className={{}}
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
    )
}

// export default Navigation;