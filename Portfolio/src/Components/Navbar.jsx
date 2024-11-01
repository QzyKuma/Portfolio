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
            <Nav>
                <h1>My Portfolio</h1>
                <div>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/skills">Skills</NavLink>
                    <NavLink to="/projects">Projects</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>
            </Nav>
        );
}