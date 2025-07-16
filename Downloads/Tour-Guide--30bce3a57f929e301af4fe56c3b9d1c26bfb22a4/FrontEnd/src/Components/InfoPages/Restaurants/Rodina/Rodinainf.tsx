import {useEffect} from 'react'
import styles from './Rodinainf.module.css';

const Url= "https://restaurantrodina.metro.biz/?lang=de"

export const Rodinainf = () => {
    useEffect(() => {
        window.open(Url, "_blank")
    }, []);
    return (
        <div>
            <div className={styles.header}>
                <h1>
                    Rodina Menu
                </h1>
            </div>
        </div>
    )
}
