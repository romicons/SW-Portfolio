import "./aboutMeSection.css"

import { SkillsSection } from "./SkillsSection"

export const AboutMeSection = () => {
    return(
        <section className="about__me__section">
            <h2 className="section__title shadow-yellow">About me</h2>
            <div className="section__container">
                <div className="section__col about__me__description">
                    <p>As a graduate in Audiovisual Arts from the National University of La Plata, I embarked on a journey to blend my passion for creativity with the intricacies of technology. Inspired by the storytelling mastery of iconic sagas like Star Wars, I sought to wield the force of design and programming to craft immersive digital experiences.</p>
                    <p>With a keen eye for detail and a commitment to user-centric design, I strive to create captivating websites and applications that transcend mere functionality. From conceptualizing sleek interfaces to engineering robust features, I thrive on the challenge of bringing ideas to life in the digital realm.</p>
                    <p>Just as the Jedi Master Yoda imparts wisdom to his apprentices, I continuously seek to expand my knowledge and skills, staying attuned to the latest trends and technologies in the ever-evolving landscape of web development.
                    </p>
                    <p>In my leisure time, you'll often find me exploring the galaxy of design trends, immersing myself in the cinematic wonders of captivating narratives found in series and movies. Through my diverse interests and unwavering dedication, I aim to channel the spirit of creativity and adventure into every project, forging digital experiences that resonate with users across the galaxy.</p>
                </div>
                <div className="section__col">
                    <SkillsSection />
                </div>
            </div>
        </section>
    )
}