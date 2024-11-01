import React from "react";
import {motion} from 'framer-motion';



export default function Skills () {
        const skills = ['Javascript', 'React', 'CSS', 'HTML', 'Node.js'];

        return (
            <div className='skills'>
                <h2>Skills</h2>
                <div className='skills-list'>
                    {skills.map((skills, index) => (
                        <motion.div
                        key={index}
                        className='skill'
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: index * 0.2 }}
                >
                    {skill}
                    </motion.div>
                ))}
                </div>
            </div>
        );

}