import "./skillsSection.css"
import { SkillCard } from "./SkillCard"

export const SkillsSection = () => {
    return (
        <div className="skills__cards__container">

            {/* Lenguajes base */}
            <SkillCard tittle="HTML 5" icon="devicon-html5-plain" hoverColor='#F97316' />
            <SkillCard tittle="CSS 3" icon="devicon-css3-plain" hoverColor='#1E40AF' />
            <SkillCard tittle="Javascript" icon="devicon-javascript-plain" hoverColor='#EAB308'/>
            <SkillCard tittle="TypeScript" icon="devicon-typescript-plain" hoverColor='#3178c6' />

            {/* Preprocesadores y frameworks de estilos */}
            <SkillCard tittle="Sass" icon="devicon-sass-original" hoverColor='#EC4899' />
            <SkillCard tittle="Bootstrap" icon="devicon-bootstrap-plain" hoverColor='#6B21A8'/>
            <SkillCard tittle="Tailwind CSS" icon="devicon-tailwindcss-original" hoverColor='#60A5FA' />
            <SkillCard tittle="Chakra UI" icon="devicon-chakraui-plain" hoverColor='#259e94' />
            <SkillCard tittle="Material UI" icon="devicon-materialui-plain" hoverColor='#0073e6' />
            <SkillCard tittle="React Bootstrap" icon="devicon-reactbootstrap-original" hoverColor='#3B82F6' />

            {/* Frameworks / Librerías */}
            <SkillCard tittle="React" icon="devicon-react-original" hoverColor='#2563EB' />
            <SkillCard tittle="Node Js" icon="devicon-nodejs-plain" hoverColor='#2c682c' />

            {/* Herramientas */}
            <SkillCard tittle="Git" icon="devicon-git-plain" hoverColor='#f05133' />
            <SkillCard tittle="NPM" icon="devicon-npm-plain" hoverColor='#cd3e3d' />

        </div>
    )
}
