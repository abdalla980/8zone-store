import {Route} from "wouter";
import {HomePage} from "./Pages/HomePage/HomePage.tsx";
import {Jerseys} from "./Pages/Jerseys/Jerseys.tsx";

export const App = () => {

    return (
        <div>
            <Route path="/" component={HomePage} />
            <Route path="/Jerseys" component={Jerseys} />

        </div>
    )
}
