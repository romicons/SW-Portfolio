import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

/*FOLDER SHAPE */
export const SkillCard = ({tittle, icon}) => {
    return(
        <div class="card" className="bg-red-600 w-36 tablet:w-40 relative pt-2">
            <div className="p-4">
                <div>
                    <div className="trapezoid bg-blue-600 w-24 h-4 absolute left-0 -top-4"></div>
                    <div class="circle circle-position" className="text-center absolute bg-green-600 w-4 h-4 rounded-full -right-2.5 top-1/2"></div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="text-6xl">
                        <i class={icon}></i>
                    </div>
                </div>
                <div class="text-center tracking-wider">
                    <h3>{tittle}</h3>
                </div>
            </div>
            <div class="card-footer" className="bg-slate-500">
                <FontAwesomeIcon icon={faAngleRight} className="-mr-1 text-yellow-500" />
                <FontAwesomeIcon icon={faAngleRight} className="-mr-1 text-yellow-500" />
                <FontAwesomeIcon icon={faAngleRight} className="-mr-1 text-yellow-500" />
            </div>
        </div>
    )
}