import React from 'react';

const ResumePage = () => (
    <div className="resume">
        <h3>Resume</h3>
        <div className="resume__mainbox">
            <div className="resume__box-center resume__box-center--title">
                <h4>Present</h4>
            </div>

            <div className="resume__box resume__box-left">
                <h5>Front-end Web Developer</h5>
                <h6 className="resume__box-paragraph">Janeiro 2019 - present</h6>
                <p>Self-learning basics about programming</p>
                <p>Freelancer</p>
            </div>

            <div className="resume__box-center resume__box-center--data">
                <p className="mb-0">2019</p>
            </div>
            
            <div className="resume__box resume__box-right">
                <h5>Product Manager | Glintt</h5>
                <h6 className="resume__box-paragraph">Lisbon, Portugal | Maio 2017 - November 2018</h6>
                <p>Understand custumer needs and identify strategic product improvements</p>
                <p>Engage and work colaboratively with diferent stakeholders (suppliers, clients, project managers and designers)</p>
                <p>Plane and deliver training sessions for pharmacies about robots (automated stock handling system)</p>
            </div>

            <div className="resume__box-center resume__box-center-absolute resume__box-center--data ">
                <p className="mb-0">2018</p>
            </div>

            <div className="resume__box-center resume__box-center--data">
                <p className="mb-0">2017</p>
            </div>

            <div className="resume__box resume__box-left">
                <h5>Pharmacist | Retail Pharmacy</h5>
                <h6 className="resume__box-paragraph">Lisbon, Portugal | November 2015 - April 2017</h6>
                <p>Customer & patient care ensuring the safe supply of medicines</p>
                <p>Deliver the pharmacy strategy through care conversations with patients and provide expert advice throughout</p>
                <p>Supervise and prepare individual medication for patients in nursing homes</p>
            </div>

            <div className="resume__box-center resume__box-center--data">
                <p className="mb-0">2015</p>
            </div>

            <div className="resume__box resume__box-right">
                <h5>Master & Bachelor in Pharmaceutical Sciences</h5>
                <h6 className="resume__box-paragraph">Porto, Portugal | November 2015 - April 2017</h6>
                <p>Young Researcher with an published article - Department of Biological Sciences</p>
                <p>Women's Futsal team leader</p>
                <p>Erasmus student internship - Madrid, Spain</p>
            </div>

            <div className="resume__box-center resume__box-center--data">
                <p className="mb-0">2010</p>
            </div>
        </div>
    </div>
);

export default ResumePage;