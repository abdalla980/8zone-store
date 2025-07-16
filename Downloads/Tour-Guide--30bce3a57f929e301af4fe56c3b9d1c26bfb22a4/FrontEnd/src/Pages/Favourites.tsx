import styles from './Favourites.module.css';
import Title from "../Components/Titles/Title.tsx";
import { useLocation } from "wouter";
import { getUserId } from "../utils/userId";
import useSWR from "swr";


const fetcher=(url:string)=>fetch(url).then(res=>res.json())


export const Favourites = () => {

    const [, setLocation] = useLocation();
    const goBack = () => {setLocation("/");};
    const StartTrip = () => {setLocation("/");};


    const userId = getUserId();
    const { data: favorites, error } = useSWR<string[]>(
        `http://192.168.102.143:3040/favorites/${userId}`, fetcher
    );



    return (
        <div className={styles.Container}>
            <div className={styles.topBar}>
                <img className={styles.back} onClick={goBack} src={"backIcon.png"} />
                <img className={"Logo"} src={"mittweidawappen.png"} />
                <Title
                    title="Favourites" subtitle=""
                />
            </div>

            <div className={styles.cardContainer}>
                <div className={styles.cardHeader}>
                    <h2>Added to Favourites!</h2>

                    <div className={styles.Favs}>
                        {error ? (
                            <p>Failed to Load favorites.</p>
                        ): !favorites ? (
                            <p>Loading...</p>
                        ): favorites.length === 0 ? (
                            <p>You have not added any favorites yet.</p>
                        ) : (
                            favorites.map((title, index) => (
                                <p key={index}>{title}</p>
                            ))
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.button} onClick={StartTrip}>
                    Start another Trip
                </button>
            </div>
        </div>
    );
};
