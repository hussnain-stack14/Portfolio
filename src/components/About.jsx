import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '../data/profile';
import './About.css';

const About = () => {
    const { about } = profileData;

    return (
        <section id="about" className="section">
            <motion.div
                className="container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="section-title">About Me</h2>
                <span className="section-subtitle">Get to know me</span>

                <div className="about-content">
                    <div className="about-text">
                        <h3 className="about-heading">Background</h3>
                        <p className="about-desc">{about.background}</p>

                        <h3 className="about-heading">What makes me unique</h3>
                        <p className="about-desc">{about.unique}</p>

                        <div className="about-strengths">
                            <h3>Strengths</h3>
                            <div className="tags">
                                {about.strengths.map((strength, index) => (
                                    <span key={index} className="tag">{strength}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="about-stats-container">
                        <div className="glass-card">
                            <h4>2+</h4>
                            <p>Years Experience</p>
                        </div>
                        <div className="glass-card">
                            <h4>10+</h4>
                            <p>Projects Completed</p>
                        </div>
                        <div className="glass-card">
                            <h4>5+</h4>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
