import {Navigationbar} from "../../NavigationBar/Navigationbar.tsx";
import {BackgroundVideo} from "../../BackgroundVideo/BackgroundVideo.tsx";
import {Footer} from "../../Footer/Footer.tsx";

export const HomePage = () => {
    return (
        <div>
            <Navigationbar/>
            <BackgroundVideo/>
            <Footer/>
        </div>
    )
}
