import {useEffect} from 'react'
import styles from './Friedrichsifn.module.css';

const Url= "https://www.friedrichs-mittweida.de/"

export const Friedrichsinf = () => {
    useEffect(() => {
        window.open(Url, '_blank')
    }, []);

    return (
        <div>
            <div className={styles.header}>
                <h1>
            Friedrichs Menu
        </h1>
            </div>
        </div>
    )
}
