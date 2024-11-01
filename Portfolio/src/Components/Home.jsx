// The Hero

import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80vh;
    background: linear-gradient(135deg, #00d8ff, #0072ff);
    color: #fff;
    text-align: center;
`;

const Heading = styled.h2`
    font-size: 2.5rem;
    margin-bottom: 1rem;
`;

const SubHeading = styled.h3`
    font-size: 1.2rem;
    max-width: 600px;

`;


export default function Home ()  {
        return (
            <HeroSection>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Heading>Software Engineer</Heading>
                <SubHeading>Welcome to my portfolio! Discover my projects and skills.</SubHeading>
            </motion.div>
            </HeroSection>
        );
}