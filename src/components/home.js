import React from "react";
import weather from '../styles/media/weather.png'
import network from '../styles/media/network.png'
import footprints from '../styles/media/footprints.webp'
import { ExternalLink } from 'react-external-link'
import { handleEmail } from './handleEmailClipboard'
import { motion } from "framer-motion/dist/framer-motion";
import { hoverImg, viewBtn } from "./animations";


const Skills = () => {

    return (
        <>
            <div className='home-section' >
                <div className='intro'>
                    <div className='intro-name'>
                        <span>Hi, I'm Paul</span>
                    </div>
                    <div className='intro-desc'>
                        <span>
                            I design and build dynamic and responsive web applications
                        </span>
                    </div>
                    <div className='social-links'>
                        <ExternalLink className='social-link' href="https://www.linkedin.com/in/paul-khoza-9956b020a">
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 22" >
                                <path id="Icon_awesome-linkedin-in" data-name="Icon awesome-linkedin-in" d="M4.7,21H.347V6.98H4.7ZM2.521,5.068A2.533,2.533,0,1,1,5.043,2.522,2.543,2.543,0,0,1,2.521,5.068ZM21,21H16.651V14.176c0-1.627-.033-3.713-2.264-3.713-2.264,0-2.611,1.767-2.611,3.6V21H7.428V6.98H11.6V8.893h.061a4.575,4.575,0,0,1,4.119-2.264C20.19,6.629,21,9.53,21,13.3V21Z" transform="translate(0.5 0.499)" fill="#f2e529" stroke="#f2e529" stroke-width="1"/>
                            </svg>
                        </ExternalLink>
                        <ExternalLink href='https://github.com/psk-98' className='social-link'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22.794" height="24" viewBox="0 0 22.794 24.021">
                                <path id="Icon_feather-github" data-name="Icon feather-github" d="M9.991,19.464C5,20.962,5,16.967,3,16.467M16.982,22.46V18.595a3.366,3.366,0,0,0-.939-2.607c3.136-.35,6.432-1.538,6.432-6.991a5.432,5.432,0,0,0-1.5-3.744,5.064,5.064,0,0,0-.091-3.766s-1.178-.35-3.905,1.478a13.363,13.363,0,0,0-6.991,0C7.265,1.137,6.086,1.487,6.086,1.487A5.064,5.064,0,0,0,6,5.252,5.433,5.433,0,0,0,4.5,9.027c0,5.413,3.3,6.6,6.432,6.991a3.366,3.366,0,0,0-.939,2.577V22.46" transform="translate(-1.181 0.061)" fill="#f2e529" stroke="#f2e529" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                            </svg>
                        </ExternalLink>
                        <div className='social-link' title='copy email' onClick={() => handleEmail()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27.25" height="24" viewBox="0 0 27.25 22">
                                <path id="Icon_material-email" data-name="Icon material-email" d="M26.625,6h-21A2.621,2.621,0,0,0,3.013,8.625L3,24.375A2.633,2.633,0,0,0,5.625,27h21a2.633,2.633,0,0,0,2.625-2.625V8.625A2.633,2.633,0,0,0,26.625,6Zm0,5.25-10.5,6.563L5.625,11.25V8.625l10.5,6.563,10.5-6.562Z" transform="translate(-2.5 -5.5)" fill="#f2e529" stroke="#f2e529" stroke-width="1"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className='skills-section' id='about' >
                <div className='section-heading'>
                    <span>My Skills</span>
                </div>
                <div className='skills-list'>
                    <div className='skill-block'>
                        Javascript
                    </div>
                    <div className='skill-block'>
                        Pyhton
                    </div>
                    <div className='skill-block'>
                        Django
                    </div>
                    <div className='skill-block'>
                        Django Rest
                    </div>
                    <div className='skill-block'>
                        Restful API
                    </div>
                    <div className='skill-block'>
                        React
                    </div>
                    <div className='skill-block'>
                        HTML
                    </div>
                    <div className='skill-block'>
                        CSS
                    </div>
                    <div className='skill-block'>
                        Redux
                    </div>
                    <div className='skill-block'>
                        PostgreSQL
                    </div>
                </div>
                <div className='background'>
                    <div className='background-header'>
                        <span>Background</span>
                    </div>
                    <div className='background-desc'>
                        <p>
                            I am final year student studying Intelligent Industrial Systems at Tshwane University of Technology.
                        </p>
                        <p>
                                My web development journey started with the CS50's Web Programming with Python and JavaScript and ever I've
                                been working to be the best web developer I can be. I am self motivated ,able to work independtly or collabrativley.
                        </p>
                        <p>
                            When I'm not working, i'm playing video games or playing around with some electronics.
                        </p>
                    </div>
                </div>
            </div>
            <div className='projects-section' id='projects' >
                <div className='section-heading'>
                    <span>Projects</span>
                </div> 
                <div className='projects-display'>
                    <div  className='project-display' >
                        <div className='project-content'>
                            <div className='project-heading'>
                                <span>Footprints</span>
                            </div>
                            <div className='skills-list'>
                                <div className='skill-block'>
                                    HTML
                                </div>
                                <div className='skill-block'>
                                    CSS
                                </div>
                                <div className='skill-block'>
                                    JavaScript
                                </div>
                                <div className='skill-block'>
                                    React
                                </div>
                                <div className='skill-block'>
                                    Redux
                                </div>
                                <div className='skill-block'>
                                    Redux persist
                                </div>
                                <div className='skill-block'>
                                    Django
                                </div>
                                <div className='skill-block'>
                                    Django Rest
                                </div>
                                <div className='skill-block'>
                                    PostgreSQL
                                </div>
                            </div>
                            <div className='project-desc'>
                                <p>
                                    This is version 1 of a ecommerce web application, with basic functionality such viewing products, sorting by date, price etc and adding to and viewing carting.
                                    I like sneakers so I decided to make it a shoe store. The application is obviously not complete, with version 2 I will add more filters, search, add a user account and being 
                                    able place a more realistic order, add animations and better error handling. Stay tuned for the updates

                                </p>
                            </div>   
                            <div className='project-link' >
                                <ExternalLink href='https://footprintz.netlify.app/'>
                                    <motion.div
                                        variants={viewBtn}
                                        whileHover="hover"
                                    >
                                        View project
                                    </motion.div>
                                </ExternalLink>
                            </div>
                        </div>
                        <motion.div className='project-img'>
                            <motion.img 
                                src={footprints} alt="footprints project"
                                variants={hoverImg}
                                whileHover="hover"
                            />
                        </motion.div>
                    </div>
                    <div className='project-display'>
                        <div className='project-content'>
                            <div className='project-heading'>
                                <span>Weather</span>
                            </div>
                            <div className='skills-list'>
                                <div className='skill-block'>
                                    HTML
                                </div>
                                <div className='skill-block'>
                                    CSS
                                </div>
                                <div className='skill-block'>
                                    JavaScript
                                </div>
                                <div className='skill-block'>
                                    Open weather API
                                </div>
                                <div className='skill-block'>
                                    Bootstrap
                                </div>
                                <div className='skill-block'>
                                    Django
                                </div>
                                <div className='skill-block'>
                                    PostgreSQL
                                </div>
                            </div>
                            <div className='project-desc'>
                                <p>
                                    This is the capstone project I did for CS50 course. I choose a weather website as it satisfied the requirement for the final
                                    project and I wanted to improve my skills working with dynamic single page web application and APIs.    
                                </p>
                            </div>   
                            <div className='project-link'>
                                <ExternalLink href='https://paulkhoza.herokuapp.com/weather/'>
                                    <motion.div
                                        variants={viewBtn}
                                        whileHover="hover"
                                    >
                                        View project
                                    </motion.div>
                                </ExternalLink>
                            </div>
                        </div>
                        <div className='project-img'>
                            <motion.img 
                                src={weather} alt="weather project"
                                variants={hoverImg}
                                whileHover="hover"
                            />
                        </div>
                    </div>
                    <div className='project-display'>
                        <div className='project-content'>
                            <div className='project-heading'>
                                <span>Network</span>
                            </div>
                            <div className='skills-list'>
                                <div className='skill-block'>
                                    HTML
                                </div>
                                <div className='skill-block'>
                                    CSS
                                </div>
                                <div className='skill-block'>
                                    JavaScript
                                </div>
                                <div className='skill-block'>
                                    React
                                </div>
                                <div className='skill-block'>
                                    Redux
                                </div>
                                <div className='skill-block'>
                                    Moment.js
                                </div>
                                <div className='skill-block'>
                                    Django
                                </div>
                                <div className='skill-block'>
                                    Django Rest
                                </div>
                                <div className='skill-block'>
                                    PostgreSQL
                                </div>
                            </div>
                            <div className='project-desc'>
                                <p>
                                    This was my first react project, which is a social media site where users post, like and view posts.
                                    It is based on one of the projects from the CS50 web programming course, the big changes I made were change to a React frontend which also meant add Django rest framework and Knox for token authenication to the backend.  
                                </p>
                            </div>   
                            <div className='project-link'>
                                <ExternalLink href='https://paulkhoza.herokuapp.com/'>
                                    <motion.div
                                        variants={viewBtn}
                                        whileHover="hover"
                                    >
                                        View project
                                    </motion.div>
                                </ExternalLink>
                            </div>
                        </div>
                        <div className='project-img'>
                            <motion.img 
                                src={network} alt="network project"
                                variants={hoverImg}
                                whileHover="hover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills