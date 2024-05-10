import { SkillCard } from "./SkillCard"

export const SkillsSection = () => {
    return(
        <section className="flex justify-center flex-col">
            <h2 className="text-center text-4xl shadow-yellow font-titles">Tooling</h2>
            <div className="grid tablet:grid-rows-3 grid-flow-col grid-rows-5  tablet:grid-flow-col gap-4 pt-4 justify-center">
                <SkillCard tittle="Bootstrap" icon="devicon-bootstrap-plain"/>
                <SkillCard tittle="CSS 3" icon="devicon-css3-plain"/>
                <SkillCard tittle="GIT" icon="devicon-git-plain"/>
                <SkillCard tittle="HTML 5" icon="devicon-html5-plain"/>
                <SkillCard tittle="Javascript" icon="devicon-javascript-plain"/>
                <SkillCard tittle="React" icon="devicon-react-original"/>
                <SkillCard tittle="React Bootstrap" icon="devicon-reactbootstrap-original"/>
                <SkillCard tittle="Sass" icon="devicon-sass-original"/>
                <SkillCard tittle="Tailwind Css" icon="devicon-tailwindcss-original"/>
            </div>
        </section>
    )
}