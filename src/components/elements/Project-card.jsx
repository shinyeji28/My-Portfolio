import React from "react";
import styles from "../css/Elements.module.css";

function Project(props){

    return (
        <div className={styles.card_wrap}>
            <div className={styles.logo}>
                <img src={process.env.PUBLIC_URL + 'images/'+props.data.img} />
            </div>
            <div className={styles.text}>
                <p>{props.data.title}</p>
                <p>{props.data.role}</p>
                <p>{props.data.period}</p>
                <p>{props.data.summary}</p>
            </div>
        </div>
    );
}
export default Project;