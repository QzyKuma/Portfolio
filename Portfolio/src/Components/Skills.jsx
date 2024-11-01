import React from "react";
import {motion} from 'framer-motion';
import styled from 'styled-components';

const SkillsSection = styled.section`
  padding: 2rem;
  text-align: center;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  padding: 1rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const skills = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'];

export default function Skills () {

        return (
           <SkillsSection>
                   <h2>Skills</h2>
                   <SkillsGrid>
                           {skills.map((skill, index) => (
                               <SkillCard
                               key={index}
                               whileHover={{ scale: 1.05 }}
                               initial={{opacity: 0}}
                               animate={{ opacity: 1 }}
                               transition={{ delay: index * 0.2 }}
                               >
                                       {skill}
                               </SkillCard>
                           ))}
                   </SkillsGrid>
           </SkillsSection>
        );
}