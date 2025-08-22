// src/pages/Whyus/Whyus.tsx
import styles from "./whyus.module.css";
import { Navigationbar } from "../../NavigationBar/Navigationbar.tsx";
import { Footer } from "../../Footer/Footer.tsx";

export const Whyus = () => {
    return (
        <div>
            <Navigationbar />
            <h1 className={styles.title}>Why Us?</h1>

            <div className={styles.headers}>
                <div className={styles.imageItem}>
                    <img src="customersupport.png"  />
                    <h2>Customer Support</h2>
                    <p>Our team is always ready to help and provide friendly, respectful support to every customer.</p>
                </div>

                <div className={styles.imageItem}>
                    <img src="shirt.png"  />
                    <h2>High Quality</h2>
                    <p>Durable materials and designs made to last every game and wash.</p>
                </div>

                <div className={styles.imageItem}>
                    <img src="localtrust.png" alt="Local Trust" />
                    <h2>Local Trust</h2>
                    <p>Built by fans, for fans - trusted by the local football community.</p>
                </div>
            </div>

            <div className={styles.extra}>
                <h2>Our Promise</h2>
                <p>
                    ⚽ Fan Style: Show your love for the game with designs inspired by your favorite teams. <br />
                    👕 Comfort First: Shirts made for cheering, lounging, or everyday wear. Always comfortable. <br />
                    ❤️ Passion Driven: We’re football fans too, so every product celebrates the sport you love.
                </p>
            </div>

            <Footer />
        </div>
    );
};
