import React from 'react';

const ResumePage = () => (
    <div className="resume">
        <h3>Curriculum Vitae</h3>
        <div className="resume--content d-flex flex-column">
            <div className="resume--content-header">
                <h4>Present</h4>
            </div>

            <div className="resume--content-item resume--content-item--left">
                <h5>Junior Full-stack Developer</h5>
                <h6>
                    Bookasleeper GmbH, Winterthur - Switzerland
                    <br/>
                    November 2019 - Present
                </h6>
                <ul>
                    <li>
                        <p>Translate zeplin designs to React code;</p>
                    </li>
                    <li>
                        <p>Build web services to serve the front-end;</p>
                    </li>
                    <li>
                        <p>Create automated tests using Jest and Cypress;</p>
                    </li>
                    <li>
                        <p>Build schemas for the database;</p>
                    </li>
                </ul>
                <p><strong>Technologies used</strong></p> 
                <p>HTML, CSS, JavaScript, React, Node.js, MongoDB, Jest, Cypress Git, Tailwind, Zeplin</p>
            </div>

            <div className="resume--content-item resume--content-item--right">
                <h5>Junior Front-end Developer</h5>
                <h6>
                    Habitects AG, Winterthur - Switzerland
                    <br/>
                    April 2019 - July 2019
                </h6>
                <p>Habitects is an E-commerce platform for the sanitary industry in Switzerland.</p>
                <ul>
                    <li>
                        <p>First developer on the project tasked with translating sketch designs to code;</p>
                    </li>
                    <li>
                        <p>Involved in the first efforts of changing the website to React.js;</p>
                    </li>
                </ul>
                <p><strong>Technologies used</strong></p> 
                <p>HTML, CSS, Sass, Bootstrap, jQuery, React, Git, Sketch</p>
            </div>

            <div className="resume--content-year d-flex align-items-center justify-content-center">
                <p>2019</p>
            </div>

            <div className="resume--content-year resume--content-year--2018 d-flex align-items-center justify-content-center">
                <p>2018</p>
            </div>
            
            <div className="resume--content-item resume--content-item--left">
                <h5>Product Manager</h5>
                <h6>
                    Glintt, Lisbon - Portugal 
                    <br/>
                    May 2017 - October 2018
                </h6>
                <ul>
                    <li>
                        <p>Understand customers needs and identify strategic product improvements;</p>
                        
                    </li>
                    <li>
                        <p>Engage and work collaboratively with different stakeholders to ensure the best commercial and logistics conditions of products;</p>
                    </li>
                    <li>
                        <p>Conduct market analysis regarding possible new technologies for Pharmacies;</p>
                    </li>
                    <li>
                        <p>Plane and deliver training sessions to pharmacies about robots (automated stock handling systems);</p>
                    </li>
                </ul>
            </div>

            <div className="resume--content-year d-flex align-items-center justify-content-center">
                <p>2017</p>
            </div>

            <div className="resume--content-item resume--content-item--right">
                <h5>Pharmacist</h5>
                <h6>
                    Retail Pharmacy, Lisbon - Portugal
                    <br/> 
                    November 2015 - April 2017
                </h6>
                <ul>
                    <li>
                        <p>Customer and patient care ensuring the safe supply of medicines;</p>
                    </li>
                    <li>
                        <p>Deliver the pharmacy strategy through care conversations with patients and provide expert advice throughout;</p>
                    </li>
                    <li>
                        <p>Supervise and prepare individual medication for patients in nursing homes;</p>
                    </li>
                </ul>
            </div>

            <div className="resume--content-year d-flex align-items-center justify-content-center">
                <p>2015</p>
            </div>

            <div className="resume--content-item resume--content-item--left">
                <h5>MSc. &#38; BSc. in Pharmaceutical Sciences</h5>
                <h6>
                School of Pharmacy, University of Porto - Portugal

                    <br/>
                    September 2010 - September 2015
                </h6>
                <ul>
                    <li>
                        <p>Young Researcher at UCIBIO@Requimte (Biochemistry Lab) from September 2012 until June 2014 with an scientific article published in the Journal of Theoretical Biology;</p>

                    </li>
                    <li>
                        <p>Erasmus student - traineeship in Retail Pharmacy in Madrid (Spain);</p>
                        
                    </li>
                    <li>
                    <p>Volunteer in several school organizations and captain of the Women's Futsal team</p>
                    </li>
                </ul>
            </div>

            <div className="resume--content-year d-flex align-items-center justify-content-center">
                <p>2010</p>
            </div>
        </div>
        <div className="white-bar-to-continue-reading"></div>
    </div>
);

export default ResumePage;