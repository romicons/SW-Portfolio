export const ProjectCard  = ({icon, projectName, description}) => {
    return(
        <div className="background-image-project option active">
            <div className="shadow(personal)"></div>
            <div className="label(personal)">
                <div className="icon">
                    {icon}
                </div>
            </div>
            <div className="info(personal)">
                <h3>{projectName}</h3>
                <p>{description}</p>
            </div>
        </div>
    )
}