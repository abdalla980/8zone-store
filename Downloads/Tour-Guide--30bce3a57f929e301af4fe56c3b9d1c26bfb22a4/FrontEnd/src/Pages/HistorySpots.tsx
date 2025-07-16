import Title from "../Components/Titles/Title.tsx";
import Card from "../Components/Cards/Card.tsx";
import {useLocation} from "wouter";
import styles from'./HistorySpots.module.css';

export default function HistorySpots(){
    const [,setLocation]=useLocation()
    const goBack= ()=>{
        setLocation("/");
    }
    const GoToMap1=()=>{
        setLocation("/Rathaus-Mittweida/map")
    }
    const GoToMap2=()=>{
        setLocation("Afra-kirche/map")
    }
    const GoToMap3=()=>{
        setLocation("Wasser-Turm/map")
    }
    return(
        <div>
            <div className={"titleContainer"}>
                <img className={styles.back} onClick={goBack} src={"backIcon.png"}/>
                <img className={"Logo"} src={"mittweidawappen.png"}/>
                <Title
                    title="Historic Spots"
                subtitle="Top Historic Attractions You Can’t Miss"
                />
            </div>
            <Card
                title= "Rathaus Mittweida"
                description= "A charming Renaissance-style building dating back to the 16th century. The distinctive red facade and impressive tower make it a central landmark in the historic market square."
                image = "./RathausMittweida.jpg"
                    onClick={GoToMap1}
            />

            <Card
                title= "Afra kirche"
                description= "A beautiful Gothic church first mentioned in the 13th century. It’s known for its tall spire, and centuries-old gravestones, reflecting Mittweida’s rich religious heritage."
                image= "./church.jpg"
                onClick={GoToMap2}

            />

            <Card
                title= "Water Tower"
                description= "This iconic water tower, constructed in the late 19th century, stands as a testament to Mittweida's architectural heritage.It offers panoramic views of the town. The area is ideal for leisurely walks and picnics."
                image= "./mittweidaturm.jpg"
                onClick={GoToMap3}

            />
        </div>
    )
}