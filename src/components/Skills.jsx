import React from 'react';
import SectionWrapper from './SectionWrapper';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import './Skills.css';

const Skills = () => {
    const { skills } = profileData;

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <SectionWrapper id="skills" className="section bg-alt">
            <div className="container">
                <h2 className="section-title">Skills & Tools</h2>
                <span className="section-subtitle">My Technical Arsenal</span>

                <div className="skills-grid">

                    <div className="skills-category">
                        <h3 className="category-title">Technical Skills</h3>
                        <motion.div
                            className="skills-list"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {skills.technical.map((skill, idx) => (
                                <motion.div key={idx} variants={item} className="skill-card">
                                    {skill}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="skills-category">
                        <h3 className="category-title">Soft Skills</h3>
                        <motion.div
                            className="skills-list"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {skills.soft.map((skill, idx) => (
                                <motion.div key={idx} variants={item} className="skill-card soft">
                                    {skill}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="skills-category full-width">
                        <h3 className="category-title">Tools & Software</h3>
                        <motion.div
                            className="tools-list"
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            {skills.tools.map((tool, idx) => (
                                <motion.div key={idx} variants={item} className="tool-card">
                                    <h4>{tool.name}</h4>
                                    <p>{tool.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </SectionWrapper>
    );
};

export default Skills;
