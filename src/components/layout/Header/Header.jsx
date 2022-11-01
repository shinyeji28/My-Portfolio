import React from "react";
import "./Header.css";


function Header(props){
    return (
        <header className="wrapper">
            <nav>
                <div className="under-line"></div>
                <a href="#0">Introduce</a>
                <a href="#1">Skills</a>
                <a href="#2">TimeLine</a>
                <a href="#3">Project</a>
                <a href="#4">Connect</a>
            </nav>
        </header>
    );

}
export default Header;