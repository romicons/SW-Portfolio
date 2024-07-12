import "./projectsSection.css"

import { ProjectCard } from "./ProjectCard"
import { GoTDataIcon } from "./ProjectsIcons/GoTDataIcon"
1
export const ProjectsSection = () => {
    return(
        <section className="projects__section">
            <h2 className="section__title shadow-yellow">Projects</h2>
            <div className="options flex flex-row items-stretch overflow-hidden min-w-[600px] max-w-[900px] h-[400px] calc-width">
                <ProjectCard icon={<GoTDataIcon />}  projectName={'GoT Data'} description={'Utilizing MockAPI services and consuming specifically generated data, this web application enables users to perform basic CRUD (Create, Read, Update, and Delete) functions. With impeccable and eye-catching design, it invites enthusiasts to expand the API through an aesthetic and interactive experience.'} />
            </div>
        </section>
    )
}