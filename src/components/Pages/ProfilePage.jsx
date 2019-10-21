import React from 'react';

const personalData = [
    {id:0, field: 'name', value: 'Fátima Martins'},
    {id:1, field: 'date of birth', value: 'april 18, 1992'},
    {id:2, field: 'email', value: 'fatima_luisa@outlook.com'},
    {id:3, field: 'linkedin', value: '/fatimaluisa-martins'},
    {id:4, field: 'phone', value: '+41782254659'},
    {id:5, field: 'address', value: 'Wülflingerstrasse, 8400 Winterthur'}
]

const ProfilePage = () => (
    <div className="profile-page">
        <h2>Hello, I am <span>Fátima Martins</span> <br/>Full Stack Web Developer</h2>
        <p>When I had to choose my degree in university, I chose Pharmaceutical Sciences because the field interested me. But especially when I entered the labor market, I realized that this was not a career I wanted to pursue for the rest of my live. Friends and family always told me I was very interested in how things work and had engineering blood running through my veins. So I decided to take a break and see if programming might be a good career path for me. I did a few courses online and even got a freelancing job doing HTML and CSS. As soon as I started creating beautiful websites all on my own, I knew that this is the path I want to follow.</p>
        <div class="profile-page__personal-info">
            <h4>Personal Information</h4>
            <div class="d-flex flex-wrap">
                {personalData.map((info) => {
                    return (
                        <div class="profile-page__personal-info--box">
                            <p class="description mb-0">{info.field}</p>
                            <p class="value mb-0">{info.value}</p>
                        </div>
                    )
                })} 
            </div>
        </div>
    </div>
);

export default ProfilePage;
