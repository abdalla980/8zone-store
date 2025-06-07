import React from 'react';
import styles from './projectCard.module.css';

export function getImageUrl(path) {
    return `/Assets/${path}`;
}

export const ProjectCard = ({ project: { title, imageSrc, Description, skills, Link, GitHub } }) => {
    return (
        <div className={styles.container}>
            <img src={getImageUrl(imageSrc)} alt={title} className={styles.image} />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{Description}</p>
            <ul className={styles.skills}>
                {skills.map((skill, id) => (
                    <li key={id} className={styles.skill}>{skill}</li>
                ))}
            </ul>
            <div className={styles.links}>
                <a target="_blank" href={Link } className={styles.link}>Link</a>
                <a  target="_blank" href={GitHub} className={styles.link}>GitHub</a>
            </div>
        </div>
    );
};
