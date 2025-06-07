import React from 'react'
import styles from './About.module.css';
export function getImageUrl(path){
    return `/Assets/${path}`;
}

export default function About(){
    return (
        <section className={styles.container} id={"About"}>
            <h2 className={styles.title}>About Me:</h2>
            <div className={styles.content}>
<img src={getImageUrl("fre.jpg")} alt={"Me sitting with a laptop"} className={styles.aboutImage}/>
                <ul className={styles.aboutItems}>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("Cursor.png")} alt={"Cursor"} />
                        <div className={styles.aboutItemText}>
                            <h3 className={styles.innerHeader}>Front-end Developer</h3>
                            <p>I'm a Front-end Developer in experience with building responsive and optimize sites</p>
                        </div>

                    </li>

                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("UI icon.png")} alt={"Ui icon"}/>
                        <div className={styles.aboutItemText}>
                            <h3 className={styles.innerHeader}>UI/UX Designer</h3>
                            <p>I have designed multiple landing pages and have created design systems </p>
                        </div>

                    </li>

                </ul>
            </div>
        </section>
    )
}
