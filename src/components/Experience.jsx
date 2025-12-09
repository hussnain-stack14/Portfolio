
import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import './Experience.css';

const Experience = () => {
    const { experience, education } = profileData;

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const item = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="experience" className="section bg-alt">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">Experience & Education</h2>
                    <span className="section-subtitle">My Journey</span>
                </motion.div>

                <div className="timeline-container">
                    <div className="timeline-column">
                        <h3 className="column-title">Work Experience</h3>
                        <motion.div
                            className="timeline"
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {experience.map((job, index) => (
                                <motion.div variants={item} className="timeline-item" key={index}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">{job.timeline}</span>
                                        <h4>{job.title}</h4>
                                        <h5 className="company">{job.company}</h5>
                                        <ul className="job-responsibilities">
                                            {job.responsibilities.map((resp, i) => (
                                                <li key={i}>{resp}</li>
                                            ))}
                                        </ul>
                                        <p className="job-achievement"><strong>Achievement: </strong>{job.achievements}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className="timeline-column">
                        <h3 className="column-title">Education</h3>
                        <motion.div
                            className="timeline"
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {education.map((edu, index) => (
                                <motion.div variants={item} className="timeline-item" key={index}>
                                    <div className="timeline-dot edu"></div>
                                    <div className="timeline-content">
                                        <span className="timeline-date">{edu.year}</span>
                                        <h4>{edu.degree}</h4>
                                        <h5 className="company">{edu.institution}</h5>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
