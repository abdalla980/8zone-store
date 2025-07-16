import Title from "../Components/Titles/Title.tsx";
import Card from "../Components/Cards/Card.tsx";
import {useLocation} from "wouter";
import styles from './Restaurants.module.css';

export default function Restaurants(){
    const [,setLocation]=useLocation()
    const goBack= ()=>{
        setLocation("/");
    }
    const GoToMap1=()=>{
        setLocation("Athos/Map")
    }
    const GoToMap2=()=>{
        setLocation("Friedrichs/Map")
    }
    const GoToMap3=()=>{
        setLocation("Rodina/Map")
    }
    return(
        <div>
            <div className={styles.titleContainer}>
                <img className={styles.back} onClick={goBack} src={"backIcon.png"}/>
                <img className={"Logo"} src={"mittweidawappen.png"}/>
                <Title
                    title="Restaurants"
                    subtitle="Where to Eat: City’s Top Picks"
                />
            </div>

            <Card
                title="Restaurant Athos"
                description={"Restaurant Athos, offers authentic Greek dishes in a cozy setting. The menu features classics like gyros, lamb dishes, and fresh seafood. Popular choices include warm appetizers and tender beef filet."}
                image="./athos.png"
                onClick={GoToMap1}
            />

            <Card
                title="Friedrichs"
                description={"Friedrichs serves traditional German cuisine with a modern twist, using fresh, regional ingredients like sea fish from the North Sea, and local ice cream from Leipzig"}
                image="./Friedrichs.png"
                onClick={GoToMap2}
            />

            <Card
                title="Rodina"
                description={"Restaurant Rodina offers authentic Russian dishes in a cozy, family-friendly atmosphere. The menu features traditional favorites such as borscht, pelmeni (dumplings), and hearty meat dishes"}
                image="./rodina.png"
                onClick={GoToMap3}
            />
        </div>
    )
}