import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <ul className="navbar" id="navbar">
            <li>
                <NavLink to="/" className={({isActive, isPending}) => 
                isPending ? "pending" : isActive ? "active" : ""
            }>
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