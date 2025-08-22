 import styles from "./Navigationbar.module.css";
    import { useLocation } from "wouter";
    import { useState } from "react";

    export const Navigationbar = () => {
        const [, setLocation] = useLocation();
        const [menuOpen, setMenuOpen] = useState(false);

        const goTohomePage = () => setLocation("/");
        const gotoJerseys = () => setLocation("/Jerseys");
        const gotoWhyus = () => setLocation("/Whyus");
        const gotoContact = () => setLocation("/Contact");

        return (
            <nav className={styles.navbar}>
                <img className={styles.logo} src="logo.png" onClick={goTohomePage} />
                <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
                    &#9776;
                </div>
                <div className={`${styles.text} ${menuOpen ? styles.active : ""}`}>
                    <h3 className={styles.home} onClick={goTohomePage}>Home</h3>
                    <h3 onClick={gotoJerseys}>T-shirts</h3>
                    <h3 onClick={gotoWhyus}>Why us</h3>
                    <h3 onClick={gotoContact}>Contact</h3>
                </div>
            </nav>
        );
    };

