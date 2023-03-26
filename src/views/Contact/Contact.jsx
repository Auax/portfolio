import React, {useEffect} from 'react';
import {useForm, ValidationError} from '@formspree/react';
import "./contact.scss";
import {TitleH2} from "../../components/UI/Texts";
import Footer from "../../components/Footer/Footer";
import toast, {Toaster} from "react-hot-toast";

const Contact = () => {
    const [state, handleSubmit] = useForm("xdovljlw");
    useEffect(() => {
        if (state.succeeded) toast.success("Email sent!");
    }, [state])


    return (
        <div className="contact__container" name="contact">
            <Toaster
                position="top-center"
                reverseOrder={false}/>
            <form className="contact__form" onSubmit={handleSubmit}>
                <TitleH2 className="">Let's talk!</TitleH2>
                <input id="contact-name" name="contact-name" className="contact__input" type="text" placeholder="Name"/>
                <input id="email" name="email" className="contact__input" type="email" placeholder="Email"/>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <textarea id="message" name="message" className="contact__input" placeholder="Message"/>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <input type="submit" value="Send" className="btn w-full sm:w-fit mt-5 cursor-pointer"/>
            </form>
            <Footer/>
        </div>
    );
};

export default Contact;