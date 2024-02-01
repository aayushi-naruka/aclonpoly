import React, { useRef } from 'react';
import './ContactUs.css';
import NavbarOther from '../components/NavbarOther/NavbarOther';
import emailjs from '@emailjs/browser';
import contact from '../assets/company/contact.png'
import Footer from '../components/Footer/Footer';

function ContactUs() {
    const form = useRef();
    return (
        <>
            <NavbarOther></NavbarOther>
            <div className='contact-us-container'>
                <div className='contact-form'>
                    <h1 className='contact-heading'>GET IN TOUCH</h1>
                    <form className='cf'ref={form}>
                        <div className='half left cf'>
                            <input className='input-box-shadow' type='text' placeholder='Name' name='user_name' />
                            <textarea className='input-box-shadow' name='message' type='text' placeholder='Message'></textarea>
                        </div>
                        <div id='input-submit'>
                        <a  className="mail" href={`mailto:mail@aclonpoly.com?subject=${form.current?.[0]?.value}&body=${form.current?.[1]?.value}`} >Send Email</a>
                        </div>
                    </form>
                </div>
                <div className='contact-map'>
                <img className='contact-address' src={contact} alt="contact-information"/>
                </div>

            </div>
            <Footer></Footer>
        </>

    );
}

export default ContactUs;