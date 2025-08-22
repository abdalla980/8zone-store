import { Route } from "wouter";
import { HomePage } from "./Pages/HomePage/HomePage.tsx";
import { Jerseys } from "./Pages/Jerseys/Jerseys.tsx";
import { Nike1891 } from "./SpecificPages/1891/1891Nike.tsx";

import { Whyus } from "./Pages/Whyus/Whyus.tsx";
import { Contact } from "./Contact/contact.tsx";
import {BlackBarca} from "./SpecificPages/BlackBarca/1891Nike.tsx";
import {BlackPalestine} from "./SpecificPages/BlackPalestine/1891Nike.tsx";
import {England} from "./SpecificPages/Englandshirt/1891Nike.tsx";
import {Miami} from "./SpecificPages/Miamishirt/1891Nike.tsx";
import {PinkPalestine} from "./SpecificPages/Pinkpalestine/1891Nike.tsx";
import {PSG} from "./SpecificPages/psgshirt/1891Nike.tsx";
import {Santos} from "./SpecificPages/santos/1891Nike.tsx";
import {Yamal} from "./SpecificPages/LamineYamal/1891Nike.tsx";
import {PortugalSpecial} from "./SpecificPages/PortugalSpecial/1891Nike.tsx";
import {Americas} from "./SpecificPages/Americas/1891Nike.tsx";

export const App = () => {
    return (
        <div>
            <Route path="/" component={HomePage} />
            <Route path="/Jerseys" component={Jerseys} />
            <Route path="/Whyus" component={Whyus} />
            <Route path="/Contact" component={Contact} />

            <Route path="/1891" component={Nike1891} />
            <Route path="/black-barca" component={BlackBarca} />
            <Route path="/black-palestine" component={BlackPalestine} />
            <Route path="/england" component={England} />
            <Route path="/miami" component={Miami} />
            <Route path="/pink-palestine" component={PinkPalestine} />
            <Route path="/psg" component={PSG} />
            <Route path="/santos" component={Santos} />
            <Route path="/LamineYamal" component={Yamal} />
                <Route path="/Portugal" component={PortugalSpecial} />
                <Route path="/Americas" component={Americas} />


        </div>
    );
};
