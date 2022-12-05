import React from "react";
import styles from "../css/Elements.module.css";

function Project(props){
    return (
        <div className={styles.card_wrap}>
            {props.data.title}
            <img src={process.env.PUBLIC_URL + 'images/'+props.data.img} />
            {props.data.role}
            {props.data.period}
            {props.data.summary}

        </div>
    );
}
export default Project;