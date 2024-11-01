import React from "react";
import {motion} from 'framer-motion';






export default function Projects () {
        const projects = [
            {title: 'Project 1', description: 'game '},
            {title: 'Project 2', description: 'game 2'},
        ];

        return (
            <div className='projects'>
                <h2>Projects</h2>
                <div className='projects-list'>
                    {projects.map((project, index) => (
                        <motion.div
                        key={index}
                        className='project'
                        whileHover={{ scale: 1.05 }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        );
}