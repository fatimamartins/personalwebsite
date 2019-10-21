import React from 'react';

const ResumePage = () => (
    <div className="resume">
        <h3>Resume</h3>
        <div className="resume--content d-flex flex-column">
            <div className="resume--content-header">
                <h4>Present</h4>
            </div>

            <div className="resume--content-item resume--content-item--left">
                <h5>Front-end Web Developer</h5>
                <h6>Wintherthur, Switzerland | January 2019 - Present</h6>
                <ul>
                    <li>
                        <p>Freelancer</p>
                    </li>
                    <li>
                        <p>Self-learning basics about programming</p>
                    </li>
                </ul>
            </div>

            <div className="resume--content-year d-flex align-items-center justify-content-center">
                <p>2019</p>
            </div>
            
            <div className="resume--content-item resume--content-item--right">
                <h5>Product Manager | Glintt</h5>
                <h6>Lisbon, Portugal | May 2017 - November 2018</h6>
                <ul>
                    <li>
                        <p>Understand customer needs and identify strategic product improvements</p>
                        
                    </li>
                    <li>
                        <p>Engage and work collaboratively with different stakeholders (suppliers, clients, project managers and designers)</p>
                    </li>
                    <li>
                        <p>Plane and deliver training sessions for pharmacies about robots (automated stock handling system)</p>
                    </li>
                </ul>
            </div>

            <div className="resume--content-year resume--content-year--2018 d-flex align-items-center justify-content-center">
                <p>2018</p>
            </div>

            <div className="resume--content-year d-flex align-items-center justify-content-center">
                <p>2017</p>
            </div>

            <div className="resume--content-item resume--content-item--left">
                <h5>Pharmacist | Retail Pharmacy</h5>
                <h6>Lisbon, Portugal | November 2015 - April 2017</h6>
                <ul>
                    <li>
                        <p>Customer and patient care ensuring the safe supply of medicines</p>
                    </li>
                    <li>
                        <p>Deliver the pharmacy strategy through care conversations with patients and provide expert advice throughout</p>
                    </li>
                    <li>
                        <p>Supervise and prepare individual medication for patients in nursing homes</p>
                    </li>
                </ul>
            </div>

            <div className="resume--content-year d-flex align-items-center justify-content-center">
                <p>2015</p>
            </div>

            <div className="resume--content-item resume--content-item--right">
                <h5>Master &#38; Bachelor in Pharmaceutical Sciences</h5>
                <h6>Porto, Portugal | November 2015 - April 2017</h6>
                <ul>
                    <li>
                        <p>Young Researcher with an published article - Department of Biological Sciences</p>
                    </li>
                    <li>
                        <p>Women's Futsal team leader</p>
                    </li>
                    <li>
                        <p>Erasmus student internship - Madrid, Spain</p>
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