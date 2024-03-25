import { useState } from "react"
import { validateEmail } from "../utils/helpers"

export default function Form() {
    const [errorMessage, setErrorMessage] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const handleSubmitClick = (e) => {
        e.preventDefault();

        if (!validateEmail(emailInput)) {
            setErrorMessage('Email or username is invalid');
            return;
        }
        setErrorMessage('');
    };

    return (
        <div>
            <form action="" className="contactForm" onSubmit={(e) => handleSubmitClick(e)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="" id="email" onChange={(e) => setEmailInput(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="" id="message" rows="10" />
                </div>
                <input type="submit" value="Submit" id="submit-button" />
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    )
}