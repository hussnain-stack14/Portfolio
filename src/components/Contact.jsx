import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { FaPaperPlane, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { profileData } from '../data/profile';
import './Contact.css';

const Contact = () => {
    const { contact } = profileData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your message! (This is a demo)');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <SectionWrapper id="contact" className="section">
            <div className="container contact-container">
                <div className="contact-info">
                    <h2 className="section-title">Let's Connect</h2>
                    <p className="contact-desc">
                        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="contact-links">
                        <a href={`mailto:${contact.email}`} className="contact-link-item">
                            <div className="icon-box"><FaEnvelope /></div>
                            <span>{contact.email}</span>
                        </a>
                        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <div className="icon-box"><FaLinkedin /></div>
                            <span>LinkedIn</span>
                        </a>
                        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                            <div className="icon-box"><FaGithub /></div>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="5"
                            placeholder="Hi, I'd like to talk about..."
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary submit-btn">
                        Send Message <FaPaperPlane />
                    </button>
                </form>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
