import './App.css';
import HomePage from "./Pages/HomePage.tsx";
import HistorySpots from "./Pages/HistorySpots.tsx";
import NatureSpots from "./Pages/NatureSpots.tsx";
import Restaurants from "./Pages/Restaurants.tsx";
import {Route, useLocation} from "wouter";
import BoatTrip from "./Pages/BoatTrip.tsx";
import Map from './Components/Map/Map.tsx';
import {Favourites} from "./Pages/Favourites.tsx";
import {RathausMittweidaInf} from "./Components/InfoPages/Rathaus Mittweida/RathausMittweidaInf.tsx";
import {AfraKirInf} from "./Components/InfoPages/Afra Kirche/AfraKirInf.tsx";
import {WasserTurm} from "./Components/InfoPages/Wasserturm/WasserTurm.tsx";
import Athosinf from "./Components/InfoPages/Restaurants/Athos/Athosinf.tsx";
import {Friedrichsinf} from "./Components/InfoPages/Restaurants/Friedrichs/Friedrichsinf.tsx";
import {Rodinainf} from "./Components/InfoPages/Restaurants/Rodina/Rodinainf.tsx";
import {BoatTripinf} from "./Components/InfoPages/Boat Trip/BoatTripinf.tsx";


function App() {
  const [,setLocation]=useLocation()
    return(
        <>
            <Route path={'/'}>
                <HomePage
                onHistoryClick={()=> setLocation("/HistorySpots")}
                onNatureClick={()=> setLocation("/NatureSpots")}
                onBoatClick={()=> setLocation("/BoatTrip")}
                onFoodClick={()=> setLocation("/Restaurants")}
                onFavClick={()=>setLocation("/Favourites")}
                />
            </Route>
            <Route path="/historySpots" component={HistorySpots}/>
            <Route path="/natureSpots" component={NatureSpots}/>
            <Route path="/BoatTrip" component={BoatTrip}/>
            <Route path="/Restaurants" component={Restaurants}/>
            <Route path={"RMINF"}/>
            <Route path="AfraKirInf" component={AfraKirInf}/>
            <Route path="WasserTurm" component={WasserTurm}/>
            <Route path="BoatTripinf" component={BoatTripinf}/>
            <Route path="Athosinf" component={Athosinf}/>
            <Route path={"Friedrichsinf"} component={Friedrichsinf}/>
            <Route path={"Rodinainf"} component={Rodinainf}/>
            <Route path="/:trip/map" >
                {(params)=>{
                    if(params.trip === "Rathaus-Mittweida") {
                        return (
                                <Map path={[[50.987346, 12.960329], [50.9867,12.9767]]}
                                infoPage={"/RMINF"}
                                />
                        )
                    }else if(params.trip === "Afra-kirche"){
                      return (
                          <Map path={[ [50.987346, 12.960329], [50.9853,12.9741]]}
                          infoPage={"/AfraKirInf"}
                          />
                      )
                }else if(params.trip === "Wasser-Turm"){
                        return (
                            <Map path={[ [50.987346, 12.960329], [50.97776,12.96279]]}
                            infoPage={"/WasserTurm"}
                            />
                        )
                }
                    else if(params.trip === "Schwanennteich-Park"){
                        return (
                            <Map path={[ [50.987346, 12.960329], [50.98617,12.97594]]}/>
                        )
                    }

                    else if(params.trip === "Rochlitzer-Berg"){
                        return (
                            <Map path={[ [50.987346, 12.960329], [51.02667,12.77083]]}/>
                        )
                    }
                    else if(params.trip === "Chemnitz-Valley"){
                        return (
                            <Map path={[ [50.987346, 12.960329], [50.9780,12.9400]]}/>
                        )
                    }
                    else if(params.trip === "Boat-Trip"){
                        return (
                            <Map path={[ [50.987346, 12.960329], [51.0012,13.0125]]}
                            infoPage={"/BoatTripinf"}
                            />
                        )
                    }
                    else if(params.trip === "Athos"){
                        return (
                            <Map path={[ [50.987346, 12.960329], [50.9853,12.9741]]}
                            infoPage={"/Athosinf"}
                            />

                        )
                    }else if(params.trip === "Friedrichs"){
                        return (
                            <Map path={[ [50.987346, 12.960329], [50.9853685,12.9651169]]}
                            infoPage={"/Friedrichsinf"}
                            />
                        )
                    }else if(params.trip === "Rodina"){
                        return (
                            <Map path={[ [50.987346, 12.960329], [50.9863,12.9782]]}
                                 infoPage={"/Rodinainf"}
                            />
                        )
                    }
                }}
            </Route>
            <Route path="/Favourites" component={Favourites}/>
            <Route path="/RMINF" component={RathausMittweidaInf}/>
        </>

    )
}

export default App
