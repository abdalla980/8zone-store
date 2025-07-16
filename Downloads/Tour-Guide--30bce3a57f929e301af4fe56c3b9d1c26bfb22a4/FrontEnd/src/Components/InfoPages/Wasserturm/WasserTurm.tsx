import styles from './Wasserturm.module.css';
import {useLocation} from "wouter";



export const WasserTurm = () => {
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
                <h1>
                    🚰 Wasserturm Mittweida: The Tower That Watches Over the Town
                </h1>
            </div>
            <div className={styles.First}>
                <h1 className={styles.header1}>🏗️ Quick History</h1>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={"WT1.png"} alt={"firstImage"}/>
                    </div>
                </div>
                <p className={styles.P}>
                    Built in 1898, after plans were developed in 1896.
                    Designed with help from Johann Nepomuk Bürkel, a lecturer at the Technikum Mittweida.
                    Height: 39 meters
                    Tank capacity: 1,500 cubic meters
                </p>
            </div>

            <div className={styles.second}>
                <h1 className={styles.header1}>⚙️ Still Active Today!</h1>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={"WT2.png"} alt={"firstImage"}/>
                    </div>
                </div>
                <p className={styles.P}>
                    It’s not just historical — it still serves as:
                    A day-to-day water buffer
                    A fire emergency reserve for the lower town
                    Fully renovated inside and out in 2005–2006 with:
                    Modern cleaning systems
                    New ventilation
                    Lightning protection
                    Fresh brick facade
                </p>
            </div>

            <div className={styles.third}>
                <h1 className={styles.header1}>A Cultural Landmark</h1>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={"WT3.png"} alt={"firstImage"}/>
                    </div>
                </div>
                <p className={styles.P}>
                    Since 2007, it’s been restored to full glory — a red-brick beauty visible across Mittweida.
                    During Open Tower Days, you can climb up for panoramic views of the town.
                    Locals and visitors love it for:
                    Summer festivals
                    Picnics and bike tours
                    A peaceful spot with historical soul
                </p>
            </div>



        </div>
    )
}


