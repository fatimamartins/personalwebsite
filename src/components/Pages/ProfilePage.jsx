import React from 'react';

const personalData = [
    {id:0, field: 'name', value: 'Fátima Martins'},
    {id:1, field: 'date of birth', value: 'april 18, 1992'},
    {id:2, field: 'email', value: 'fatima_luisa@outlook.com'},
    {id:3, field: 'linkedin', value: '/fatimaluisa-martins'},
    {id:4, field: 'github', value: 'xxxxxxxx'},
    // {id:4, field: 'phone', value: '+41782254659'},
    // {id:5, field: 'address', value: 'Wülflingerstrasse, 8400 Winterthur'}
]

const ProfilePage = () => (
    <div className="profile-page">
        <h2>Hello, I am <span>Fátima Martins</span> <br/>Full Stack Web Developer</h2>
        <p>I’m a self-taught web developer with a background in Pharmaceutical Sciences. I’m a self-driven learner with a passion for building beautiful, scalable and clean web applications.</p>
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
