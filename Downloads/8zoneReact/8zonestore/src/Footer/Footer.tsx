 import styles from './footer.module.css';

    export const Footer = () => {

        const goToInsta = () => {
            window.open("https://www.instagram.com/8zone_store", "_blank");
        }

        const goToTiktok = () => {
            window.open("https://www.tiktok.com/@8zone_store", "_blank");
        }

        return (
            <footer className={styles.footer}>
                <div className={styles.left}>
                    <h1>8zoneStore</h1>
                    <p>
                        Dress good, perform better.
                        <br /><br />
                    </p>
                </div>
                <div className={styles.right}>
                    <h3>Stay Connected!</h3>
                    <div className={styles.icons}>
                        <img onClick={goToInsta} src={"Insta.png"} className={styles.insta}/>
                        <img onClick={goToTiktok} src={"tiktok.png"} className={styles.tiktok}/>
                    </div>
                </div>
            </footer>
        )
    }
