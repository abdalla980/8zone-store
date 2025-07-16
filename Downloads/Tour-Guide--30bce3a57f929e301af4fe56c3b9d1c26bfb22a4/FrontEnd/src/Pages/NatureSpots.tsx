import Title from "../Components/Titles/Title.tsx";
import Card from "../Components/Cards/Card.tsx";
import {useLocation} from "wouter";
import styles from './Naturespots.module.css';

export default function NatureSpots(){
    const [,setLocation]=useLocation()
    const GoBack=()=>{
        setLocation("/")
    }

    const GoToMap1 =()=>{
        setLocation("Schwanennteich-Park/map")
    }
    const GoToMap2=()=>{
        setLocation("Rochlitzer-Berg/map")
    }
    const GoToMap3=()=>{
        setLocation("Chemnitz-Valley/map")
    }
    return(
    <div>
        <div className={"titleContainer"}>
            <img className={styles.back} onClick={GoBack} src={"backIcon.png"}/>
            <img className={"Logo"} src={"mittweidawappen.png"}/>
            <Title
                title="Nature Spots"
                subtitle="Breathe Deep: City’s Best Green Escapes"
            />
        </div>
        <Card
            title= "Schwanennteich Park"
            description= "Located in the heart of Mittweida, Schwanenteich Park is a Sensation featuring a picturesque pond, walking paths, and green spaces ideal for leisurely strolls and picnics."
            image = "./schwanenteichpark 1.png"
            onClick={GoToMap1}
        />

        <Card
            title= "Rochlitzer Berg"
            description="Rochlitzer Berg is a prominent hill offering panoramic views of the surrounding landscape. The area is crisscrossed with hiking trails and is known for its unique porphyry rock formations."
            image= "./RochlitzerB.png"
            onClick={GoToMap2}

        />

        <Card
            title= "Chemnitz Valley"
            description="For cycling enthusiasts, the Chemnitz Valley Cycle Path provides a scenic route through the region's picturesque landscapes, connecting various towns and natural attractions."
            image= "./CVC.png"
            onClick={GoToMap3}

        />
    </div>
)
}