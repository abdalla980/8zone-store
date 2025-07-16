import  {useEffect} from 'react'
import styles from './Athosinf.module.css';


const Athosinf = () => {
    useEffect(() => {
        window.open("/AthosSk.pdf", '_blank')
    }, []);

    return (
        <div>
            <h2 className={styles.header}> Athos's Menu</h2>
            <h3 className={styles.if}>
                If It didn’t open,<br/>
                <a href="/AthosSk.pdf" target="_blank"  >
                    Click here to view the PDF.
                </a>
            </h3>
        </div>
    );
}
export default Athosinf
