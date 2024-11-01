// The Hero

import React from 'react';
import {motion} from 'framer-motion';




export default function Home ()  {
        return (
            <motion.div
                className="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}>
                <h2>Software Engineer</h2>
                <p>Welcome, My name is Marquez</p>
            </motion.div>
        );
}