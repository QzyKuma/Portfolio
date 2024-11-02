import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #ffffff;
    color: #333;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
    font-size: 1.8rem;
    font-weight: 600;
    color: #333;
    cursor: pointer;
    margin: 0;
`;

const NavLinks = styled.div`
    position: relative;
    display: flex;
    gap: 2rem;
`;

const NavLink = styled(Link)`
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 1.1rem;
    position: relative;
    padding: 0.5rem;

    /* Underline effect */
    &::before {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        background-color: #333;
        bottom: 4px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.3s ease;
    }

    &:hover::before {
        width: 100%;
    }
`;

const RippleEffect = styled(motion.div)`
    position: absolute;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(0,150,255,0.3), rgba(0,150,255,0));
    border-radius: 50%;
    pointer-events: none;
    z-index: -1;
    opacity: 0;
`;

function Navbar() {
    const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCursorPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <Nav>
            <Logo>MyPortfolio</Logo>
            <NavLinks onMouseMove={handleMouseMove}>
                {/* Cursor Effect */}
                <RippleEffect
                    style={{ top: cursorPosition.y, left: cursorPosition.x }}
                    animate={{
                        scale: isHovering ? [1, 2.5, 1] : 0, // Ripple pulse
                        opacity: isHovering ? [0, 0.5, 0] : 0,
                    }}
                    transition={{
                        duration: 1,
                        ease: 'easeInOut',
                        repeat: isHovering ? Infinity : 0,
                    }}
                />


                {['Home', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                    <NavLink
                        key={index}
                        to={`/${item.toLowerCase()}`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {item}
                    </NavLink>
                ))}
            </NavLinks>
        </Nav>
    );
}

export default Navbar;
