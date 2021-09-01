import React from "react";
import emailjs from "emailjs-com";

function ContactForm(): JSX.Element {
    function sendEmail(e: React.SyntheticEvent) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_90o10uc",
                "template_b24ch4o",
                e.target as string | HTMLFormElement,
                "user_OWiMezWOLeYTzRgg9Gd3a",
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                },
            );
    }
    return (
        <form
            className="w-full flex mt-5 flex-col"
            action="sendEmail"
            onSubmit={sendEmail}
        >
            <h2 className="font-bold text-xl lg:text-xl mb-2 ">
                Nous Contacter
            </h2>
            <label className="font-bold hidden" htmlFor="email">
                name
            </label>
            <input
                className="mt-1 text-ms bg-customYellow border border-black rouded-md p-2 rounded-md focus:outline-none"
                name="contact_number"
                type="hidden"
            />
            <label className="font-bold" htmlFor="email">
                email
            </label>
            <input
                className="mt-1 text-ms bg-customYellow border border-black rouded-md p-2 rounded-md focus:outline-none"
                type="text"
                name="user_email"
                id="user_email"
            />
            <label className="mt-2 font-bold" htmlFor="message">
                Message
            </label>
            <textarea
                id="message"
                name="message"
                className="mt-1 text-ms lg:mb-5 bg-customYellow border border-black rouded-md p-2 rounded-md focus:outline-none"
            />
            <button
                type="submit"
                value="send"
                name="message"
                className={`w-52 lg:w-52 p-1 my-4 text-xs lg:my-0 animate-fade shadow-buttonShadow bg-black rounded-md text-customYellow transform hover:scale-105 `}
            >
                Envoyer
            </button>
        </form>
    );
}

export default ContactForm;
