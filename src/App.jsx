import React from 'react';
// import ReactDom from 'react-dom';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import NavBar from './components/NavBar/NavBar';
import './assets/sass/main.scss';
import ProfilePage from './components/Pages/ProfilePage';


const App = () => {

    return <section className="homepage">
        <div className="content-box">
            <div className="row no-gutters">
                <div className="col-md-3">
                    <ProfilePicture />
                    <NavBar />
                </div>
                <div className="col-md-9">
                    <ProfilePage />
                </div>
            </div>
        </div>
    </section>
}

export default App;