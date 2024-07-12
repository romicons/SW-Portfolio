import { AboutMeIcon } from "../Icons/AboutMeIcon"

export const AboutMe = () => {
    return(
        <button className="flex flex-row items-center gap-2">
            <AboutMeIcon />
            <span>About me</span>
        </button>
    )
}