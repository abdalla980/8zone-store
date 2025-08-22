import styles from './Jerseys.module.css';
import { Navigationbar } from "../../NavigationBar/Navigationbar.tsx";
import { Footer } from "../../Footer/Footer.tsx";
import { useLocation } from "wouter";

export const Jerseys = () => {
    const [, setLocation] = useLocation();

    const Goto1891 = () => setLocation("/1891");
    const GotoBlackBarca = () => setLocation("/black-barca");
    const GotoBlackPalestine = () => setLocation("/black-palestine");
    const GotoEngland = () => setLocation("/england");
    const GotoMiami = () => setLocation("/miami");
    const GotoPinkPalestine = () => setLocation("/pink-palestine");
    const GotoPSG = () => setLocation("/psg");
    const GotoSantos = () => setLocation("/santos");

    return (
        <>
            <Navigationbar />
            <div className={styles.title}>
                <h1>Jerseys</h1>
            </div>

            <div className={styles.gridContainer}>
                <div className={styles.one}>
                    <img onClick={Goto1891} src="1891shirt.jpg" className={styles.oneimg} />
                    <h2>"SmokingLirare" Black</h2>
                    <button className={styles.viewButton} onClick={Goto1891}>View</button>
                </div>
                <div className={styles.one}>
                    <img onClick={GotoBlackBarca} src="black barca shirt .jpg" className={styles.oneimg} />
                    <h2>Black & White Special Barcelona </h2>
                    <button className={styles.viewButton} onClick={GotoBlackBarca}>View</button>
                </div>
                <div className={styles.one}>
                    <img onClick={GotoBlackPalestine} src="Blackpalestineshirt.jpg" className={styles.oneimg} />
                    <h2>Maillot Palestine Black 24-25</h2>
                    <button className={styles.viewButton} onClick={GotoBlackPalestine}>View</button>
                </div>
                <div className={styles.one}>
                    <img onClick={GotoEngland} src="Englandshirt.jpg" className={styles.oneimg} />
                    <h2>England Black Special kit</h2>
                    <button className={styles.Englandviewbutton} onClick={GotoEngland}>View</button>
                </div>
                <div className={styles.one}>
                    <img onClick={GotoMiami} src="Miamishirt.jpg" className={styles.oneimg} />
                    <h2>Miami E-special kit 24-25</h2>
                    <button className={styles.Englandviewbutton} onClick={GotoMiami}>View</button>
                </div>
                <div className={styles.one}>
                    <img onClick={GotoPinkPalestine} src="pinkpalestineshirt.jpg" className={styles.oneimg} />
                    <h2>Maillot Palestine Black 24-25</h2>
                    <button className={styles.viewButton} onClick={GotoPinkPalestine}>View</button>
                </div>
                <div className={styles.one}>
                    <img onClick={GotoPSG} src="psg shirt .jpg" className={styles.oneimg} />
                    <h2>PSG 'Paris Noir' Special</h2>
                    <button className={styles.viewButton} onClick={GotoPSG}>View</button>
                </div>
                <div className={styles.one}>
                    <img onClick={GotoSantos} src="santos shirt.jpg" className={styles.oneimg} />
                    <h2>Santos Away Fan Edition</h2>
                    <button className={styles.viewButton} onClick={GotoSantos}>View</button>
                </div>
            </div>

            <Footer />
        </>
    );
};
