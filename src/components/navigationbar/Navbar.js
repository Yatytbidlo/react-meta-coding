import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className={"navigation"}>
                <a className={"logo"}>LOGO</a>
                <ul className={"menu"} type={"none"}>
                    <li><a href={"/aboutme"} className={"menu-item"}>About me</a></li>
                    <li><a href={"/aboutme"} className={"menu-item"}>Education</a></li>
                    <li><a href={"/aboutme"} className={"menu-item"}>Experience</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;