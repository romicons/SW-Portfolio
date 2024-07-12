import { NavOpener } from "./Buttons/NavOpener"

import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className="font-sans flex flex-row flex-wrap justify-between items-center sticky top-0 z-10 text-xl pt-2 font-titles">
            <div>
                Logo placeholder
            </div>
            <div className="flex flex-row flex-wrap justify-end items-center pr-6">
                <NavOpener />
            </div>
        </nav>
    );
};