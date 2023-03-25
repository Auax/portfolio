import React from 'react';
import "./contact.scss";
import {TitleH2} from "../../components/UI/Texts";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
    return (
        <div className="contact__container" name="contact">
                <form className="contact__form">
                    <TitleH2 className="">Let's talk!</TitleH2>
                    <input className="contact__input" type="text" placeholder="Name"/>
                    <input className="contact__input" type="email" placeholder="Email"/>
                    <textarea className="contact__input" placeholder="Message"/>
                    <input type="submit" value="Send" className="btn w-full sm:w-fit mt-5 cursor-pointer"/>
                </form>
            <Footer/>
        </div>
    );
};

export default Contact;