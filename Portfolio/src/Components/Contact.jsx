import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContactSection = styled.section`
    padding: 2rem;
    text-align: center;
`;

const ContactDetails = styled(motion.div)`
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;
`;




export default function Contact () {
        return (
            <ContactSection>
                <h2>Contact Me</h2>
                <ContactDetails
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p>Email: you@example.com</p>
                    <p>LinkedIn: [Your LinkedIn Profile]</p>
                </ContactDetails>
            </ContactSection>
        );
}