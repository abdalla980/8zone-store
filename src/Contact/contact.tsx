import styles from './contact.module.css';
import {Navigationbar} from "../NavigationBar/Navigationbar.tsx";
import {Footer} from "../Footer/Footer.tsx";
import {useLocation} from "wouter";

export const Contact = () => {

    const goToInsta = () => {
        window.open("https://www.instagram.com/direct/t/17845861872539516/", "_blank");
    }

    return (
        <div className={styles.pageContainer}>
            <Navigationbar/>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Contact</h1>
                    <h2>For inquiries:</h2>
                    <h2>Please feel free to send us a message on Instagram!</h2>
                </div>

                <div className={styles.images}>
                    <img onClick={goToInsta} src={"Insta.png"}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
