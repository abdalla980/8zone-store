import React from 'react'
export function getImageUrl(path){
    return `/Assets/${path}`;
}
import styles from './contact.module.css'

export const Contact = () => {
    return (
       <footer id={"Contact"} className={styles.container}>
           <div className={styles.text}>
               <h2>Contact</h2>
               <p>Feel free to reach out!</p>
           </div>
           <ul className={styles.links}>
               <li className={styles.link}>
                   <img src={getImageUrl("Email.png")} alt={"Email icon"}/>
                   <a target='_blank' href={"mailto:abdullahizzldin1@gmail.com"}>Email</a>
               </li>
               <li className={styles.link}>
                   <img src={getImageUrl("githubicon.png")} alt={"GitHub icon"}/>
                   <a target="_blank" href={"https://github.com/abdalla980"}>GitHub</a>
               </li>
           </ul>
       </footer>
    )
}
