import Header from "../components/Header";
import Form from "../components/Form"

export default function Contact() {
    return (
        <div>
            <Header pageTitle={"Contact"} />
            <div className="contactPageContents">
            <div className="formContainer">
                <Form />
            </div>
            <div>
                <p>You can also email me by clicking the mail icon in the footer.</p>
            </div>
            </div>
        </div>
    )
}