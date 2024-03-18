import Header from "../components/Header";

export default function Contact() {
    return (
        <div>
            <Header pageTitle={"Contact"} />
            <div>
                <form action="">
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="inputGroup-sizing-default">Subject</span>
                        <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                    </div>
                    <div className="input-group">
                        <span className="input-group-text">Message</span>
                        <textarea className="form-control" aria-label="With textarea"></textarea>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    )
}