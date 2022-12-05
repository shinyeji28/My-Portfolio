import React from "react";
import ProjectCard from "../../elements/Project-card.jsx";
import styles from "../../css/Elements.module.css";
import jsonData from "../../../assets/json/project-card.json"

function Project(){
    const _data=jsonData;
    return (
        <div>
            안녕하세요 Project section 입니다.
            <div className={styles.card_container}>
                {_data.map(data => { 
                    return <ProjectCard key={data.id} data={data}></ProjectCard>;
                })}
            </div>
        </div>
    );
}
export default Project;