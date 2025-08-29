import { SkillCard } from "./SkillCard"

import "./skillsSection.css"


export const SkillsSection = () => {
  return (
    <div className="hexagon-menu">
      <div className="hex-row row-1">
        <SkillCard label="HTML 5" icon="devicon-html5-plain" hoverColor="#F97316"/>
        <SkillCard label="CSS 3" icon="devicon-css3-plain" hoverColor="#1E40AF"/>
        <SkillCard label="Javascript" icon="devicon-javascript-plain" hoverColor="#EAB308"/>
        <SkillCard label="TypeScript" icon="devicon-typescript-plain" hoverColor="#3178c6"/>
        <SkillCard label="Sass" icon="devicon-sass-original" hoverColor="#EC4899"/>
      </div>
      <div className="hex-row row-2">
        <SkillCard label="Bootstrap" icon="devicon-bootstrap-plain" hoverColor="#6B21A8"/>
        <SkillCard label="Tailwind CSS" icon="devicon-tailwindcss-original" hoverColor="#60A5FA"/>
        <SkillCard label="Chakra UI" icon="devicon-chakraui-plain" hoverColor="#259e94"/>
        <SkillCard label="Material UI" icon="devicon-materialui-plain" hoverColor="#0073e6"/>
      </div>
      <div className="hex-row row-3">
        <SkillCard label="React Bootstrap" icon="devicon-reactbootstrap-original" hoverColor="#3B82F6"/>
        <SkillCard label="React" icon="devicon-react-original" hoverColor="#2563EB"/>
        <SkillCard label="Node Js" icon="devicon-nodejs-plain" hoverColor="#2c682c"/>
      </div>
      <div className="hex-row row-4">
        <SkillCard label="Git" icon="devicon-git-plain" hoverColor="#f05133"/>
        <SkillCard label="NPM" icon="devicon-npm-plain" hoverColor="#cd3e3d"/>
      </div>
      <div className="hex-row row-5">
        <SkillCard label="Firebase" icon="devicon-firebase-plain" hoverColor="#FFCA28"/>
      </div>
    </div>

  )
}

