import styles from './map.module.css';
import { MapContainer, TileLayer } from "react-leaflet";
import RoutingControl from "./RoutingControl.tsx";
import { useEffect, useState } from "react";
import { useLocation } from "wouter";

interface MapProps {
    path: [number, number][];
    infoPage: string;
}

export default function Map({ path, infoPage }: MapProps) {
    const [, setLocation] = useLocation();
    const [userPosition, setUserPosition] = useState<[number, number] | null>(null);

    const goBack = () => setLocation("/");
    const handleClick = () => setLocation(infoPage);

    useEffect(() => {

        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log( position);
                const { latitude, longitude } = position.coords;
                setUserPosition([latitude, longitude]);
            },
            (err) => {
                console.log(err);
                setUserPosition([50.987346, 12.960329]);
                // resethbf
            }
        );

    }, []);



    const route: [number, number][] = userPosition ? [userPosition, ...path] : [];

    return (
        <>
            {userPosition && (
                <MapContainer
                    className={styles.map}
                    center={userPosition}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <RoutingControl waypoints={route} />
                </MapContainer>
            )}

            {infoPage && (  <div className={styles.buttonContainer}>
                <button onClick={handleClick} className={styles.Endbutton}>View Location Details</button>
            </div>
                )}
            <img className={styles.BackMap} onClick={goBack} src={"/backIcon.png"} />
        </>
    );
}

