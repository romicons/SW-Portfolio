import "./skillsSection.css"

import { SkillCard } from "./SkillCard"

export const SkillsSection = () => {
    return(
        <div className="skills__cards__container">
            <SkillCard tittle="Bootstrap" icon="devicon-bootstrap-plain" hoverColor='#6B21A8'/>
            <SkillCard tittle="CSS 3" icon="devicon-css3-plain" hoverColor='#1E40AF' />
            <SkillCard tittle="GIT" icon="devicon-git-plain" hoverColor='#14532D'/>
            <SkillCard tittle="HTML 5" icon="devicon-html5-plain" hoverColor='#F97316' />
            <SkillCard tittle="Javascript" icon="devicon-javascript-plain" hoverColor='#EAB308'/>
            <SkillCard tittle="React" icon="devicon-react-original" hoverColor='#2563EB' />
            <SkillCard tittle="React Bootstrap" icon="devicon-reactbootstrap-original" hoverColor='#3B82F6' />
            <SkillCard tittle="Sass" icon="devicon-sass-original" hoverColor='#EC4899' />
            <SkillCard tittle="Tailwind Css" icon="devicon-tailwindcss-original" hoverColor='#60A5FA' />
        </div>
    )
}