import styles from './Card.module.css';
import {useEffect, useState} from "react";
import { getUserId } from "../../utils/userId";
import useSWR from "swr";


interface CardProps {
    title: string;
    image: string;
    description: string;
    onClick?: () => void;
}

const fetcher=(url:string)=>fetch(url).then(res=>res.json())

export default function Card({ image, title, description, onClick }: CardProps) {
    const userId=getUserId()
    const { data:favorites }= useSWR(  `http://localhost:3040/favorites/${userId}`,fetcher)

    const [liked, setLiked] = useState(false);

    useEffect(() => {
        if(favorites) {
            setLiked(favorites.includes(title));
        }
    }, [favorites,title]);


    const toggleHeart = async () => {
        const newLiked = !liked;
        setLiked(newLiked);


            try {
                await fetch("http://192.168.102.143:3040/favorites", {
                    method:  newLiked? "POST" :"DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId,
                        title,
                    }),
                });
            } catch (error) {
                console.error("Failed to send favorite:", error);
            }
        }



    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <img src={image} className={styles.image} />
                <div className={styles.content}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className={styles.BIC}>
                        <button className={styles.button} onClick={onClick}>Start Trip</button>
                        <img
                            onClick={toggleHeart}
                            src={liked ? "redheart.png" : "Heart.png"}
                            className={styles.heart}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
