import React from 'react';
import { motion } from 'framer-motion';


export default function Contact () {
        return (
            <motion.div
                className="contact"
                initial={{y: '100vh'}}
                animate={{y: 0}}
                transition={{type: 'spring', stiffness: 50}}
            >
                <h2>Contact</h2>
                <p>Email: you@example.com</p>
                <p>LinkedIn: [Your LinkedIn Profile]</p>
            </motion.div>
        );
}