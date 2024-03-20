import Header from "../components/Header";
import Form from "../components/Form"

export default function Contact() {
    return (
        <div className="contactPage">
            <Header pageTitle={"Contact"} />
            <div className="contactPageContents">
                <div className="formContainer">
                    <Form />
                </div>
                <div className="contact-text">
                    You can also email me by clicking the mail icon in the footer.
                </div>
            </div>
        </div>
    )
}