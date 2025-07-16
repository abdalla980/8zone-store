import Title from "../Components/Titles/Title.tsx";
import styles from './HomePage.module.css';
import Button from "../Components/Buttons/buttons.tsx";

interface HomePageProps {
    onHistoryClick: () => void;
    onNatureClick: () => void;
    onBoatClick: () => void;
    onFoodClick: () => void;
    onFavClick: () => void;
}



export default function HomePage ({onHistoryClick,onNatureClick,onBoatClick,onFoodClick,onFavClick }:HomePageProps){
    return(
        <div className={styles.backgroundWrapper}>
            <img className={styles.Logo} src={"mittweidawappen.png"}/>
<div className={styles.titleStyle}>
                <Title
                    title="Explore Mittweida in 1 day !"
                    subtitle=
                        "Let us be your local guide, helping you uncover the best of the city in under 24 hours."
                />
</div>
                <div className={styles.buttons}>
                    <Button label={"Discover Historic spots"} onClick={onHistoryClick}/>
                    <Button label={"Discover Nature spots"} onClick={onNatureClick} />
                    <Button label={"Go on a Boat trip!"} onClick={onBoatClick}/>
                    <Button label={"Explore Restaurants"} onClick={onFoodClick}/>
                    <Button label={"Saved As Favourites"} onClick={onFavClick}/>
                </div>

        </div>
    )
}