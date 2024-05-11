import { SkillCard } from "./SkillCard"

export const SkillsSection = () => {
    return(
        <section className="flex justify-center flex-col">
            <h2 className="text-center text-4xl shadow-yellow font-titles pb-4">Tooling</h2>
            <div className="grid tablet:grid-rows-3 grid-flow-col grid-rows-5  tablet:grid-flow-col gap-8 pt-4 justify-center">
                <SkillCard tittle="Bootstrap" icon="devicon-bootstrap-plain" onHover='hover:text-purple-800'/>
                <SkillCard tittle="CSS 3" icon="devicon-css3-plain" onHover='hover:text-blue-800' />
                <SkillCard tittle="GIT" icon="devicon-git-plain" onHover='hover:text-green-900'/>
                <SkillCard tittle="HTML 5" icon="devicon-html5-plain" onHover='hover:text-orange-500' />
                <SkillCard tittle="Javascript" icon="devicon-javascript-plain" onHover='hover:text-yellow-500'/>
                <SkillCard tittle="React" icon="devicon-react-original" onHover='hover:text-blue-600' />
                <SkillCard tittle="React Bootstrap" icon="devicon-reactbootstrap-original" onHover='hover:text-blue-500' />
                <SkillCard tittle="Sass" icon="devicon-sass-original" onHover='hover:text-pink-500' />
                <SkillCard tittle="Tailwind Css" icon="devicon-tailwindcss-original" onHover='hover:text-blue-500' />
            </div>
        </section>
    )
}