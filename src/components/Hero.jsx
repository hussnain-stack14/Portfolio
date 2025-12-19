import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';
import { profileData } from '../data/profile';
import profilePic from '../assets/profile-pic.png';
import './Hero.css';

const Hero = () => {
    const { name, role, tagline, contact } = profileData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.p variants={itemVariants} className="hero-greeting">
                        Hello, I'm
                    </motion.p>
                    <motion.h1 variants={itemVariants} className="hero-name">
                        {name}
                    </motion.h1>
                    <motion.h2 variants={itemVariants} className="hero-role">
                        {role}
                    </motion.h2>
                    <motion.p variants={itemVariants} className="hero-description">
                        {tagline}
                    </motion.p>

                    <motion.div variants={itemVariants} className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            Contact Me
                        </a>
                    </motion.div>

                    <motion.div variants={itemVariants} className="hero-socials">
                        <a href={contact.github} target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href={`mailto:${contact.email}`}>
                            <FaEnvelope />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Image with subtle blob background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="hero-visual"
                >
                    <div className="blob-background"></div>
                    <motion.div
                        className="image-container"
                        animate={{ y: [-10, 10, -10] }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <img src={profilePic} alt={name} className="profile-img" />
                    </motion.div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="scroll-down"
            >
                <a href="#about">
                    <FaArrowDown />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
