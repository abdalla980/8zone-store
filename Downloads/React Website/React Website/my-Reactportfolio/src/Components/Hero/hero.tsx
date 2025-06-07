import React from 'react';
import styles from "./Hero.module.css";

export function getImageUrl(path){
    return `/Assets/${path}`;
}

export default function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Welcome to my Portfolio!</h1>
                <p className={styles.description}>👨‍💻 Student Front-End Web Developer | Based in Berlin </p>
                <a target='_blank' href={"mailto:abdulllahizzldin1@gmail.com"} className={styles.contactButton}>Get in Touch</a>
            </div>
            <img src={getImageUrl("new.png")} alt={"Hero image of me"} className={styles.heroImage}/>
            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>

        </section>
    )
}
