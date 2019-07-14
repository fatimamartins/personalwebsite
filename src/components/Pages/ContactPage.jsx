import React from 'react';

const ContactPage = () => (
    <div className="contact">
        <h3>Contact</h3>
        <div className="contact__info">
            <div className="contact__info--box">
                <i className="fas fa-home"></i>
                <p className="personal__content--box-input mb-0">Wülflingerstrasse, 8400 Winterthur</p>
            </div>

            <div className="contact__info--box">
                <i className="fas fa-mobile-alt"></i>
                <p className="personal__content--box-input mb-0">+41782254659</p>
            </div>

            <div className="contact__info--box">
                <i className="fas fa-envelope"></i>
                <p className="personal__content--box-input mb-0">fatima_luisa@outlook.com</p>
            </div>
        </div>

        <h4>Drop me a line</h4>
        <form className="form" id="#">
            <div className="row">
                <div className="col-md-4 px-3">
                    <input className="form__input" type="text" id="senderName" placeholder="name"/>
                    <input className="form__input" type="email" id="senderEmail" placeholder="email"/>
                    <input className="form__input" type="subject" id="senderSubject" placeholder="subject"/>
                </div>
                <div className="col-md-8 form__right">
                    <textarea className="form__right--message" id="message" placeholder="Message"></textarea>
                    <button className="btn btn__form" type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
)

export default ContactPage;