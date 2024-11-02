import React from "react";
import {motion} from 'framer-motion';
import styled from 'styled-components';


const ProjectsSection = styled.div`
    padding: 2rem;
    text-align: center;

`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ProjectCard = styled(motion.div)`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;
`;

const projects = [
    {title:'project 1', descrption: 'game 1'},
    {title:'project 2', descrption: 'game 2'},
]

export default function Projects () {

        return (
            <ProjectsSection>
                <h2>Projects</h2>
                <ProjectsGrid>
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3 }}
                        >
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </ProjectCard>
                    ))}
                </ProjectsGrid>
            </ProjectsSection>
        );
}