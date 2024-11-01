import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components'


const Nav = styled.nav`
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 1rem 2rem;
        background-color: #333;
        color: #fff;
`;

const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0 1rem;
    font-size: 1.1rem;
    transition: color 0.3s;

    &:hover {
        color: #00d8ff;
    }
`;

export default function Navbar() {
        return (
            <nav className="navbar">
                <h1>My Portfolio</h1>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        );
}