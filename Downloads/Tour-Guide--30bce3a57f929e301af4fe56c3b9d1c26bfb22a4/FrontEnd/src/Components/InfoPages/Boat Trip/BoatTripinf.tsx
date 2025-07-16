import styles from './boatTripinf.module.css';
import {useLocation} from "wouter";


export const BoatTripinf = () => {

    const [,SetLocation]=useLocation()
    const Goback=()=>{
        SetLocation("/HistorySpots")
    }



    return (
        <div className={styles.Container}>
            <div className={styles.backIcon}>
                <img src={"./backIcon.png"} onClick={Goback}/>
            </div>
            <h2 className={styles.title}> A Guide to a Safe Boat ride </h2>
            <div className={styles.VidContainer}>
                <iframe
                    className={styles.vid}
                    src="https://www.youtube.com/embed/RDCS7zelmwU"
                    title="Boat Ride Rules"

                    allowFullScreen
                ></iframe>
            </div>
            <div className={styles.num1}>
                <h2 className={styles.subheader}>What to bring with you?</h2>
                <p>
                    Light clothes (weather-appropriate)<br/>
                    Sun protection (hat, sunglasses, sunscreen)<br/>
                    Water bottle<br/>
                    Waterproof bag for personal items<br/>
                    ID or ticket (if required)<br/>
                </p>
            </div>

            <div className={styles.num2}>
                <h2 className={styles.subheader}>What to Be careful from</h2>
                <p>
                    Don’t lean over the edge<br/>
                    Keep children supervised<br/>
                    Wear a life jacket if instructed<br/>
                    Don’t bring glass or alcohol onboard<br/>
                    Follow staff instructions at all times<br/>
                </p>
            </div>

            <div className={styles.num3}>
                <h2 className={styles.subheader}>Before you Board</h2>
                <p>
                    Arrive 10–15 min early<br/>
                    Show your Ticket<br/>
                    Use the restroom if needed<br/>
                    Let staff know if you can't swim or need help<br/>
                </p>
            </div>

            <div className={styles.num4}>
                <h2 className={styles.subheader}>🌍 Environmental Responsibility</h2>
                <p>
                    Respect wildlife and nature<br/>
                    Don’t litter or throw anything in the water<br/>
                    Follow instructions to protect habitats<br/>
                </p>
            </div>

        </div>
    )
}

