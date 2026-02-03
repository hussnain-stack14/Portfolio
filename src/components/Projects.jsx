import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { profileData } from '../data/profile';
import SectionWrapper from './SectionWrapper';
import './Projects.css';

const Projects = () => {
    const { projects } = profileData;

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <SectionWrapper id="projects" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Featured Projects</h2>
                    <span className="section-subtitle">What I've Built</span>
                </div>

                <motion.div
                    className="projects-grid"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            variants={item}
                            className="project-card"
                            key={index}
                            whileHover={{ y: -10 }}
                        >
                            <div className="project-content">
                                <div className="project-header">
                                    <h3>{project.title}</h3>
                                    <div className="project-links">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                                        <a href={project.link} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                                    </div>
                                </div>

                                <p className="project-desc">{project.description}</p>

                                <div className="project-details">
                                    <p><strong>Problem:</strong> {project.problemServed}</p>
                                    <p><strong>Contribution:</strong> {project.contribution}</p>
                                </div>

                                <div className="project-tech">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

export default Projects;

