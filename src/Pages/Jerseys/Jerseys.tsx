import styles from './Jerseys.module.css';
import {Navigationbar} from "../../NavigationBar/Navigationbar.tsx";
import {Footer} from "../../Footer/Footer.tsx";

export const Jerseys = () => {
    return (
        <div>
            <Navigationbar/>
            <div className={styles.title}>
                <h1>Jerseys</h1>
            </div>

            <div className={styles.gridContainer}>
                <div className={styles.one}>
                    <img src={"1891shirt.jpg"} className={styles.oneimg}/>
                    <h2>Nike 1891 Black edition</h2>
                </div>
                <div className={styles.one}>
                    <img src={"black barca shirt .jpg"} className={styles.oneimg}/>
                    <h2>Black barca shirt</h2>
                </div>
                <div className={styles.one}>
                    <img src={"Blackpalestineshirt.jpg"} className={styles.oneimg}/>
                    <h2>Black palestine shirt</h2>
                </div>
                <div className={styles.one}>
                    <img src={"Englandshirt.jpg"} className={styles.oneimg}/>
                    <h2>Englandshirt</h2>
                </div>
                <div className={styles.one}>
                    <img src={"Miamishirt.jpg"} className={styles.oneimg}/>
                    <h2>Miamishirt</h2>
                </div>
                <div className={styles.one}>
                    <img src={"pinkpalestineshirt.jpg"} className={styles.oneimg}/>
                    <h2>pink palestine shirt</h2>
                </div>
                <div className={styles.one}>
                    <img src={"psg shirt .jpg"} className={styles.oneimg}/>
                    <h2>psg shirt</h2>
                </div>
                <div className={styles.one}>
                    <img src={"santos shirt.jpg"} className={styles.oneimg}/>
                    <h2>Santos Shirt </h2>
                </div>

            </div>
<Footer/>
        </div>
    )
}
