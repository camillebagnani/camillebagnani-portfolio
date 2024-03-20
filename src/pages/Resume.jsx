import Header from "../components/Header";

export default function Resume() {
    return (
        <div>
            <Header pageTitle={"Resume"} />
            <div className="resume-container">
                <div>
                    <p>Proficiencies include:</p>
                    <ul className="resume-ul">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>JQuery</li>
                        <li>Bootstrap</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Jest</li>
                        <li>MySQL</li>
                        <li>NoSQL</li>
                        <li>Sequelize</li>
                        <li>MongoDB</li>
                        <li>MERN stack</li>
                        <li>MVC paradigm</li>
                        <li>Git</li>
                        <li>Heroku</li>
                    </ul>
                    <p className="resume-link">Click <a href="https://docs.google.com/document/d/1dSNiWCcZeV5bt5KILhAf5K_CczSpAzO5CJ9Nf7dnM_U/edit?usp=sharing" target="_blank" rel="noopener noreferrer">HERE</a> to view my resume!</p>
                </div>
            </div>
        </div >
    )
}