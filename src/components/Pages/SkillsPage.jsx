import React from 'react';

const frontEndStack = [
    {id: 0, name: 'HTML5'},
    {id: 1, name: 'CSS3' },
    {id: 2, name: 'JavaScript ES6/ES7'},
    {id: 3, name: 'JQuery'},
    {id: 4, name: 'Sass'},
    {id: 5, name: 'Bootstrap4'},
    {id: 6, name: 'React'}
]

const backEndStack = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Express.js'},
    {id: 3, name: 'MongoDB'},
    {id: 4, name: 'Mongoose'}
]

const SkillsPage = () => (
    <div className="skills-page">
        <h3>Skills</h3>
        
        <div class="programming-skills">
            <h4>Programming Skills</h4>
            <div className="front-end">
                <h6>Front-end stack</h6>
                <div className="front-end__box d-flex flex-wrap justify-content-center">
                    {frontEndStack.map((skill) => {
                        return (
                            <div className="skills-shape">
                                <div className="skills-content d-flex justify-content-center align-items-center">
                                    <p>{skill.name}</p>
                                </div>
                            </div>
                        )
                    })}  
                </div>
            </div>
            
            <div className="back-end">
                <h6>Back-end stack</h6>
                <div className="back-end__box d-flex flex-wrap justify-content-center">
                    {backEndStack.map((skill) => {
                        return (
                            <div className="skills-shape">
                                <div className="skills-content d-flex justify-content-center align-items-center">
                                    <p>{skill.name}</p>
                                </div>
                            </div>
                        )
                    })}  
                </div>
            </div>
        </div>

        <div class="other-skills">
            <h4>Other Computer Skills</h4>
            <ul>
                <li>Jest</li>
                <li>Cypress</li>
                <li>Git</li>
                <li>Tailwind</li>
                <li>Sketch</li>
                <li>Zeplin</li>
                <li>Postman</li>
                <li>Compass</li>
                <li>Studio3T</li>
            </ul>
        </div>

        <div class="languages">
            <h4>Languages</h4>
            <div className="d-flex">
                <div>
                    <p>Portuguese</p>
                    <p>English</p>
                    <p>Spanish</p>
                    <p>Deutsch</p>
                </div>
                <div>
                    <p>Native</p>
                    <p>Level C1</p>
                    <p>Level A2</p>
                    <p>Level A1</p>
                </div>
            </div>
        </div>
        <div className="white-bar-to-continue-reading"></div>
    </div>
);


export default SkillsPage;