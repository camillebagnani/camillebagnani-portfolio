export default function Project(props) {
    return (
        <div className="individual-project-container">
            <div className="one-project">
                <h3>{props.title}</h3>
                <a href={props.deployedApp}><img src={props.imageLink} alt=""  className="project-image"/></a>
                <a href={props.deployedApp}>Deployed App</a>
                <a href={props.repo}>GitHub Repository</a>
            </div>
        </div>
    )
};