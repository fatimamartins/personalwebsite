import React from 'react';
import Route from 'react-router-dom';
import './assets/sass/main.scss';
import ProfilePicture from './components/ProfilePicture/ProfilePicture';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ProfilePage from './components/Pages/ProfilePage';
import ResumePage from './components/Pages/ResumePage';
import ContactPage from './components/Pages/ContactPage';


const App = () => {

    return <section className="homepage">
        <div className="content-box">
            <div className="row no-gutters">
                <div className="col-md-3 d-flex flex-column">
                    <ProfilePicture />
                    <NavBar />
                    <Footer />
                </div>
                <div className="col-md-9">
                    <Route exact path='/' component={ProfilePage} />
                    <Route path='/resume' component={ResumePage} />
                    <Route path='/contact' component={ContactPage} />
                </div>
            </div>
            
        </div>
    </section>
}

export default App;