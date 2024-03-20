export default function Form() {
    return (
        <div>
            <form action="" className="contactForm">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea type="text" name="" id="message" rows="10"/>
                </div>
                <input type="submit" value="Submit" id="submit-button" />
            </form>
        </div>
    )
}