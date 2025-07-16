import styles from './RM.module.css';
import {useLocation} from "wouter";



export const RathausMittweidaInf = () => {
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
                <h1>5 Mindblowing fun<br/> facts about Rathaus<br/> you never knew</h1>
            </div>
            <div className={styles.First}>
                <h1 className={styles.header1}>1. Built Before the Eiffel Tower</h1>
                <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <img src={"nums1.png"} alt={"firstImage"}/>
                </div>
                </div>
                <p className={styles.P}>
                    The Rathaus Mittweida was built in 1865,
                    nearly 25 years before the Eiffel Tower
                    (which was completed in 1889 for the 1889 World's Fair in
                    Paris).
                </p>
            </div>

            <div className={styles.second}>
                <h1 className={styles.header1}>2. Survived Two World Wars</h1>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={"num2.png"} alt={"firstImage"}/>
                    </div>
                </div>
                <p className={styles.P}>
                    The Rathaus withstood both World War I and World War II,
                    remaining structurally intact
                    while many other German cities saw severe destruction.
                </p>
            </div>

            <div className={styles.third}>
                <h1 className={styles.header1}>3. Neo-Gothic Architecture</h1>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={"num3.png"} alt={"firstImage"}/>
                    </div>
                </div>
                <p className={styles.P}>
                    Its architectural style is Neo-Gothic,
                    featuring pointed arches, detailed stonework,
                    and a tower that gives it a medieval flair.
                    It's not just a town hall
                    - it’s a statement of 19th-century
                    German craftsmanship and pride.
                </p>
            </div>

            <div className={styles.fourth}>
                <h1 className={styles.header1}>4. Center of Civic Life</h1>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={"num4.png"} alt={"firstImage"}/>
                    </div>
                </div>
                <p className={styles.P}>
                    Since its completion,
                    the Rathaus has been the beating heart of local government,
                    hosting everything from council meetings to public events.
                    It symbolizes over 150 years of civic history in Mittweida.
                </p>
            </div>

            <div className={styles.fifth}>
                <h1 className={styles.header1}>5. Icon of Local Identity</h1>
                <div className={styles.cardContainer}>
                    <div className={styles.card}>
                        <img src={"num5.png"} alt={"firstImage"}/>
                    </div>
                </div>
                <p className={styles.P}>
                    For residents of Mittweida,
                    the Rathaus isn’t just a building -
                    it’s a landmark of their heritage,
                    a gathering place,
                    and a reminder of the town’s enduring spirit.
                </p>
            </div>

        </div>
    )
}


