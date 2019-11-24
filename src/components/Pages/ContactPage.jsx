import React from 'react';

const ContactPage = () => (
    <div className="contact">
        <h3>Contact</h3>
        <form className="form">
            <div className="row">
                <div className="col-md-4">
                    <input className="form__input" type="text" id="senderName" placeholder="name"/>
                    <input className="form__input" type="email" id="senderEmail" placeholder="email"/>
                    <input className="form__input" type="subject" id="senderSubject" placeholder="subject"/>
                </div>
                <div className="col-md-8 form__right">
                    <textarea className="form__right--message" id="message" placeholder="Message"></textarea>
                    <button className="btn btn--orange" type="submit">Send message</button>
                </div>
            </div>
        </form>
    </div>
)

export default ContactPage;