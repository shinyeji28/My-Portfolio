import React from "react";
import ProjectCard from "../../elements/Project-card.jsx";
import styles from "../../css/Main.module.css";
import jsonData from "../../../assets/json/project-card.json"

function Project(){
    const section_style={
        background: "#ffb4b9",
        height:"700px",
    };
    const _data=jsonData;
    return (
        <div className={styles.section_layout} style={section_style}>
            <p className={styles.title}>웹 개발 프로젝트를 소개합니다.</p>
            <div className={[styles.section_layout, styles.card_container].join(' ')}>
                {_data.map(data => { 
                    return <ProjectCard key={data.id} data={data}></ProjectCard>;
                })}
            </div>
        </div>
    );
}
export default Project;