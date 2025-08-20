import styles from './BackgroundVideo.module.css';
import {useLocation} from "wouter";

export const BackgroundVideo = () => {
    const [,setLocation]=useLocation();

    const gotojerseys = ()=>{
        setLocation("/Jerseys")
    }
    return (
        <div className={styles.all}>
            <video className={styles.BackgroundVid}
                   src={"FootballVid.mp4"}
                   autoPlay
                   muted
                   loop
                   playsInline
            />
            <div className={styles.Content}>
                <h2 className={styles.subtitle}>Own your passion, wear your team</h2>
                <button onClick={gotojerseys} className={styles.button}>Shop now</button>
            </div>
            <div className={styles.subfooter}>
                <h3>Secure Payments </h3>
                <h3>High quality </h3>
                <h3>Local Trust</h3>

            </div>
        </div>
    )
}
