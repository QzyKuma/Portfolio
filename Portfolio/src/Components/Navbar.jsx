import React from "react";
import {Link} from "react-router-dom";


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