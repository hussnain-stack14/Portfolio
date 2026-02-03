import React from 'react';
import SectionWrapper from './SectionWrapper';
import { profileData } from '../data/profile';
import './About.css';

const About = () => {
    const { about } = profileData;

    return (
        <SectionWrapper id="about" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">About Me</h2>
                    <span className="section-subtitle">Get to know me</span>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <div className="about-group">
                            <h3 className="about-heading">Background</h3>
                            <p className="about-desc">{about.background}</p>
                        </div>

                        <div className="glass-card unique-card">
                            <h3 className="about-heading">What makes me unique</h3>
                            <p className="about-desc">{about.unique}</p>
                        </div>

                        <div className="about-strengths">
                            <h3>My Core Strengths</h3>
                            <div className="tags">
                                {about.strengths.map((strength, index) => (
                                    <span key={index} className="tag">{strength}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="about-stats-container">
                        <div className="glass-card stat-card">
                            <h4>2+</h4>
                            <p>Years Experience</p>
                        </div>
                        <div className="glass-card stat-card">
                            <h4>5+</h4>
                            <p>Projects Completed</p>
                        </div>
                        <div className="glass-card stat-card">
                            <h4>5+</h4>
                            <p>Happy Clients</p>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
