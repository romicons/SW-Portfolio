import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const SkillCard = ({tittle, icon, onHover}) => {
    return(
        <div className="bg-gradient-to-br from-gray-600 to-black min-w-40 min-h-36 tablet:w-40 relative pt-2 flex justify-between flex-col shadow shadow-yellow-400">
            <div className={`p-4 ${onHover}`}>
                <div>
                    <div className="trapezoid bg-gradient-to-b from-gray-300 via-gray-500 to-gray-900 w-24 h-4 absolute left-0 -top-4"></div>
                    <div className="absolute bg-gradient-to-r from-yellow-200 to-yellow-800 w-4 h-4 rounded-full -left-2 top-1/2 flex justify-center items-center animate-spin">
                        <div className='rounded-full w-2.5 h-2.5 bg-light'></div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="text-6xl">
                        <i className={icon}></i>
                    </div>
                </div>
                <div className="text-center text-lg tracking-wider font-titles">
                    <h3>{tittle}</h3>
                </div>
            </div>
            <div className="bg-gradient-to-b from-gray-300 via-gray-500 to-gray-900 flex justify-end p-1">
                <FontAwesomeIcon icon={faAngleRight} className="animate-lightning" />
                <FontAwesomeIcon icon={faAngleRight} className="animate-lightning-slow" />
                <FontAwesomeIcon icon={faAngleRight} className="animate-lightning-slower" />
            </div>
        </div>
    )
}