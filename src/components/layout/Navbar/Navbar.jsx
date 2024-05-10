import { ProjectsIcon } from "./Icons/ProjectsIcon"
import { AboutMeIcon } from "./Icons/AboutMeIcon"
import { SkillsIcon } from "./Icons/SkillsIcon"
import { ResumeIcon } from "./Icons/ResumeIcon"
import { ContactIcon } from "./Icons/ContactIcon"

export const Navbar = () => {
    return(
        <nav className="font-sans flex flex-row flex-wrap justify-between items-center sticky z-10 text-xl pt-2 font-titles">
            <div>
                Logo placeholder
            </div>
            <div className="flex flex-row flex-wrap justify-between items-center gap-4">
                <button className="flex flex-row items-center gap-2">
                    <AboutMeIcon />
                    <span>About me</span>
                </button>
                <button>
                    <SkillsIcon />
                    <span>Skills</span>
                </button>
                <button>
                    <ProjectsIcon />
                    <span>Projects</span>
                </button>
                <button>
                    <ResumeIcon />
                    <span>Resume</span>
                </button>
                <button>
                    <ContactIcon/>
                    <span>Contact me</span>
                </button>
            </div>
        </nav>
    )
}