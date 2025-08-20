import styles from './Navigationbar.module.css';
import {useLocation} from "wouter";

export const Navigationbar = () => {
    const [,setLocation]=useLocation();

    const goTohomePage = ()=>{
setLocation("/")
    }
    const gotoJerseys = ()=>{
        setLocation("/Jerseys")
    }
    return (
        <div className={styles.All}>
            <img className={styles.logo} src={"logo.png"} onClick={goTohomePage}/>
            <div className={styles.text}>
                <h3 onClick={goTohomePage}>Home</h3>
                <h3 onClick={gotoJerseys}>T-shirts</h3>
                <h3>Why us</h3>
                <h3>Contact</h3>
            </div>
        </div>
    )
}
