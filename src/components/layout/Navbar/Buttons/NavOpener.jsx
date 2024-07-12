import { useState } from "react"

export const NavOpener = () => {
    const [isPushed, setIsPushed] = useState(false);

    const toggleMenu = () => {
        setIsPushed(!isPushed);
    };

    return (
        <div id="nav-container" className={`relative ${isPushed ? 'pushed' : ''}`}>
            <div className="toggle-icon cursor-pointer" onClick={toggleMenu}>
                <span className="bar block w-14 h-1 my-3 border-r-8 border-solid transition-all duration-600" style={{ borderColor: '#fff #fff #fff #d6d6d6' }}></span>
                <span className="bar block w-14 h-1 my-3 border-r-8 border-solid rotate-180 transition-all duration-600" style={{ borderColor: '#fff #fff #fff #d6d6d6' }}></span>
                <span className="bar block w-14 h-1 my-3 border-r-8 border-solid transition-all duration-600" style={{ borderColor: '#fff #fff #fff #d6d6d6' }}></span>
            </div>
        </div>
    );
};