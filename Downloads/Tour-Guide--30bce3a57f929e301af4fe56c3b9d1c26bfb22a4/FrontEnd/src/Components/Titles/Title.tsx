import styles from './title.module.css';

interface TitleProps {
    title: string;
    subtitle?: string;
}



export default function Title({title, subtitle}:TitleProps){
    return(
        <div>
<h1 className={styles.header}>{title} </h1>
            {subtitle && <p className={styles.subTitle}>{subtitle}</p>}
        </div>
    );
}