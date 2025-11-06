import { useState } from 'react'
import styles from "./App.module.css"
import * as React from "react";

const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [confirmationText, setConfirmationText] = useState("");

    const isValid = () => {
        return firstName.length > 0 && lastName.length > 0 && email.length < 0 && message.length > 0;
    }

    const handleSubmit : React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        setMessage("")
        setEmail("")
        setLastName("")
        setFirstName("")
        setConfirmationText(`Thanks ${firstName} ${lastName} we will contact you at ${email}`)
    }

    return (
        <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name</label>
            <input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text"/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="message">Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type="submit" disabled={!isValid()}>Send</button>
            {confirmationText && <div className={styles.confirmation}>
                {confirmationText}
            </div>}
        </form>
    )
}

function App() {

  return (
    <div>
    <ContactForm/>
    </div>
  )
}

export default App
