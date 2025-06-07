import React from 'react'
import skills from '../../data/skills.json'
import styles from './experience.module.css'
export function getImageUrl(path){
    return `/Assets/${path}`;
}


function Experience (){
    return (
        <section className={styles.container}   id={"Experience"}>
            <h2  className={styles.title}> Experience</h2>
<div  className={styles.content}>
    <div  className={styles.skills}>
        {
            skills.map((skill,id)=> {
                return <div  className={styles.skill} key={id}>
                    <div><img  className={styles.skillImageContainer} src={getImageUrl(skill.imageSrc)} alt={skill.title}/></div>
                    <p>{skill.title}</p>
                </div>
            })

        }
    </div>

</div>
        </section>
    )
}
export default Experience
