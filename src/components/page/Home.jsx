import React from "react";
import styled from "styled-components";
import Connect from "./contents/Connect";
import Introduce from "./contents/Introduce";
import Project from "./contents/Project";
import Skills from "./contents/Skills";
import TimeLine from "./contents/TimeLine";

function Home(props){
    return (
        <div className="home-wraper">
            <Introduce/>
            <Skills/>
            <TimeLine/>
            <Project/>
            <Connect/>
        </div>
    );

}
export default Home;