import "./skillCard.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const SkillCard = ({tittle, icon, hoverColor}) => {
    return(
        <div className="file__card__container">
            <div className="skill__card" style={{'--hover-color': hoverColor}}>
                <div className="skill__card__shapes">
                    <div className="trapezoid"></div>
                    <div className="charger">
                        <div className='dot'></div>
                    </div>
                </div>
                <div className="skill__card__technology">
                    <div>
                        <i className={icon}></i>
                    </div>
                </div>
                <div className="skill__card__technology__name">
                    <h3>{tittle}</h3>
                </div>
            </div>
            <div className="skill__card__footer">
                <FontAwesomeIcon icon={faAngleRight} className="animate-lightning" />
                <FontAwesomeIcon icon={faAngleRight} className="animate-lightning-slow" />
                <FontAwesomeIcon icon={faAngleRight} className="animate-lightning-slower" />
            </div>
        </div>
    )
}