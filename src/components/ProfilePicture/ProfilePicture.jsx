import React from 'react';

const ProfilePicture = () => {
    return  <div className="profile-picture">
        <div className="profile-picture--background">
            <img src={require("../../assets/img/perfil-backgroung.png")} alt="background"/>
        </div>
        <div className="profile-picture--shape">
            <img src={require("../../assets/img/perfil.png")} alt="Profile"></img>
        </div>
    </div>
};

export default ProfilePicture;