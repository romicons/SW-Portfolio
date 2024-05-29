import "./aboutMeSection.css"

import { SkillsSection } from "./SkillsSection"

export const AboutMeSection = () => {
    return(
        <section className="about__me__section">
            <h2 className="section__title shadow-yellow">About me</h2>
            <div className="section__container">
                <div className="section__col">
                    <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fuga quisquam ratione harum, unde dolore vero illum perferendis? Reiciendis quae nobis ipsa asperiores facere culpa, quia maxime cum quidem quibusdam.</p>
                </div>
                <div className="section__col">
                    <SkillsSection />
                </div>
            </div>
        </section>
    )
}