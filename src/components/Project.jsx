export default function Project(props) {
    return (
        <div className="individual-project-container">
            <p className="project-title">{props.title}</p>
            <div className="project-image-container">
                <a href={props.deployedApp} target="_blank" rel="noopener noreferrer">
                    <img src={props.imageLink} alt="" className="project-image" />
                </a>
            </div>
            <div className="project-description">
                <p className="project-highlights">{props.highlights}</p>
                <a href={props.repo} target="_blank" rel="noopener noreferrer" className="project-links">GitHub Repository</a>
            </div>
        </div>
    )
};