export default function Project(props) {
    return (
        <div className="individual-project-container">
            <div className="one-project">
                <p className="project-title">{props.title}</p>
                <div className="project-image-container">
                <a href={props.deployedApp}>
                    <img src={props.imageLink} alt=""  className="project-image"/>
                </a>
                </div>
                <a href={props.deployedApp} className="project-links">Deployed App</a>
                <a href={props.repo} className="project-links">GitHub Repository</a>
            </div>
        </div>
    )
};