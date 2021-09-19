import Image from 'next/image'
import React from 'react';
import ContactDetails from '../components/contact_details';
import ContactForm from '../components/contact_form';
import PageTitle from '../components/page_title';

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-200 via-gray-300 to-gray-500 flex-grow">
            <PageTitle pageName="Contact Us" message="We'd love to hear from you"></PageTitle>
            <main className="py-5 flex flex-col flex-1 items-center">
                <div className="flex flex-wrap flex-col sm:flex-row w-full justify-center items-center bg-gradient-to-b from-blue-500 to-green-400 p-20 rounded-2xl shadow-2xl border-white border-4 mb-10">
                    <ContactDetails></ContactDetails>
                <div className="vl min-h-full mr-24 ml-24"></div>
                    <ContactForm></ContactForm>
                </div>  
            </main>
        </div>
    )
}

export default Contact;