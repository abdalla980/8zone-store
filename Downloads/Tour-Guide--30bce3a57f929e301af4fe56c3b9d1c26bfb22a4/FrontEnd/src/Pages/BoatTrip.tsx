import {useLocation} from "wouter";
import Title from "../Components/Titles/Title.tsx";
import styles from './BoatTrip.module.css';
import {useState} from "react";


const fetcher=(url:string)=>fetch(url).then(res=>res.json())


export default function (){
    const [,setLocation]=useLocation()
    const goBack =()=>{
        setLocation("/")
    }
    const GoToMap=()=>{
        setLocation("/Boat-Trip/map")
    }
    const [liked,setLiked]=useState(false);
    const ToggleHeart=()=>{
        setLiked(!liked)
    }
    return(

        <div className={styles.Container}>
            <img className={styles.back} onClick={goBack} src={"backIcon.png"}/>
            <img className={"Logo"} src={"mittweidawappen.png"}/>
            <div className={styles.title}>
            <Title title={"Boat trip"} subtitle={""}/>
            </div>
            <div className={styles.boatPic}>
                <img className={styles.BoatImage} src={"BoatPIc.png"}/>
            </div>

            <div className={styles.borderthing}>
            <div className={styles.text1}>
                <div className={styles.textContent}>
                    <p>Located approximately 10 km from Mittweida, this reservoir is renowned for its scenic beauty and
                        offers various boat tours:</p>
                    <li> Round Trips</li>
                    <li> Scheduled Ferry Services.</li>
                    <li> Historic Experiences</li>
                </div>
                <img className={styles.boatIcon} src={"BoatIcon.png"}/>

            </div>


            <div className={styles.text2}>
                <div className={styles.textContent}>
                    <p>💰 Ticket Prices <br/> Round Trips (MS Kriebstein or MS Hainichen):</p>
                    <li> Adults: €14.00</li>
                    <li>Family Ticket (2 adults + up to 2 children):<br/>€33.00</li>
                    <li> Scheduled Trips (MF Lauenhain or MF Höfchen):<br/> Prices range from €1.50 to €7.00.</li>
                </div>
                <img className={styles.CashIcon} src={"cashBag.png"}/>
            </div>

            <div className={styles.text3}>
                <div className={styles.textContent}>
                    <p>📞 Contact Information</p>
                    <li> Phone: +49 34327 93153</li>
                    <p>Office Hours:</p>
                    <li>Monday to Friday: 8:00 AM – 3:00 PM</li>
                </div>
                <img className={styles.PhoneIcon} src={"Phone.png"}/>
            </div>

            </div>


            <div className={styles.buttonContainer}>
                <img src={liked? "redheart.png" : "Heart.png"} onClick={ToggleHeart} className={styles.heart}/>
            <button className={styles.button} onClick={GoToMap}>Start Trip</button>
            </div>
        </div>
    )
}