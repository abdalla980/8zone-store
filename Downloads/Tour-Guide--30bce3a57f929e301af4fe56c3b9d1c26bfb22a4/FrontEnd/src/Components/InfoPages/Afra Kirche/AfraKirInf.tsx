import styles from './AfraKInf.module.css';
import {useLocation} from "wouter";


export const AfraKirInf = () => {
    const [,SetLocation]=useLocation()
    const Goback=()=>{
        SetLocation("/HistorySpots")
    }

    return (
        <div className={styles.Container}>
            <div className={styles.backIcon}>
                <img src={"./backIcon.png"} onClick={Goback}/>
            </div>
            <div className={styles.Header}>
                <h2>🕍 Afra Kirche</h2>
            </div>
            <div className={styles.First}>
                <h1 className={styles.header1}>Gothic Beauty in a Small Town</h1>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={"af1.png"} alt={"firstImage"}/>
                    </div>
                </div>
                <p className={styles.P}>
                    Afra Kirche may not be world-famous,
                    but it’s a perfect example of Saxon late Gothic architecture -
                    with beautiful stonework, pointed arches, and medieval atmosphere.
                </p>
            </div>

            <div className={styles.second}>
                <h1 className={styles.header1}>Spiritual Legacy</h1>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={"af2.png"} alt={"firstImage"}/>
                    </div>
                </div>
                <p className={styles.P}>
                    Like its more famous cousin in Augsburg,
                    it’s named after Saint Afra,
                    showing her wide cultural influence
                    across German regions.
                </p>
            </div>

            <div className={styles.third}>
                <h1 className={styles.header1}>Cultural Landmark in Mittweida</h1>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={"af3.png"} alt={"firstImage"}/>
                    </div>
                </div>
                <p className={styles.P}>
                    It's not just a church - it's part of the town's identity.
                    Used for concerts and events,
                    it's a living part of the community,
                    blending history with modern life.
                </p>
            </div>

        </div>
    )
}


