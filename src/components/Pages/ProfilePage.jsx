import React from 'react';

const skillsData = [
    {id: 0, name: 'html'},
    {id: 1, name: 'css' },
    {id: 2, name: 'JavaScript ES6/ES7'},
    {id: 3, name: 'JQuery'},
    {id: 4, name: 'SASS'},
    {id: 5, name: 'Bootstrap4'},
    {id: 6, name: 'React'},
]

const ProfilePage = () => (
    <div className="profile-page">
        <h2>Hello, I am <span>Fátima Martins</span> <br/>Front-end Web Developer</h2>
        <p>When I had to choose my degree in university, I chose Pharmaceutical Sciences because the field interested me. But especially when I entered the labor market, I realized that this was not a career I wanted to pursue for the rest of my live. Friends and family always told me I was very interested in how things work and had engineering blood running through my veins. So I decided to take a break and see if programming might be a good career path for me. I did a few courses online and even got a freelancing job doing HTML and CSS. As soon as I started creating beautiful websites all on my own, I knew that this is the path I want to follow.</p>
    
        <div className="profile-page--skills d-flex flex-wrap justify-content-center">
            {skillsData.map((skill) => {
                return (
                    <div className="profile-page--skills-shape">
                        <div className="profile-page--skills-content d-flex justify-content-center align-items-center">
                            <p>{skill.name}</p>
                        </div>
                    </div>
                )
            })}  
        </div>
    </div>
);



export default ProfilePage;