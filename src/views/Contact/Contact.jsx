import React from 'react';
import "./contact.scss";
import {TitleH1, TitleH2} from "../../components/UI/Texts";

const Contact = () => {
    return (
        <div className="contact__container" name="contact">
            <div className="noise"/>
            <div className="z-10 relative">
                <TitleH2>Let's talk!</TitleH2>
                <form className="contact__form">
                    <input className="contact__input" type="text" placeholder="Name"/>
                    <input className="contact__input" type="email" placeholder="Email"/>
                    <textarea className="contact__input" placeholder="Message"/>
                </form>
            </div>
        </div>
    );
};

export default Contact;