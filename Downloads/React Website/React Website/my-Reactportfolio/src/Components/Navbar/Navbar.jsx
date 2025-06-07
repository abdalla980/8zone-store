    import styles from './Navbar.module.css';
    import {useState} from "react";
    export function getImageUrl(path){
    return `/Assets/${path}`;
    }


    export default function Navbar(){
        const [menuOpen,setMenuOpen]=useState(false)

        return(
           <nav className={styles.Navbar}>
               <a className={styles.title} href={"/"}>Portfolio</a>
               <div className={styles.menu}>
                   <img className={styles.menuBtn} src={ menuOpen ? getImageUrl("X.png") :
                       getImageUrl("hamburger-menu.png")}
                   onClick={()=> setMenuOpen(!menuOpen)}
                   />
               <ul className={`${styles.menuItems} ${menuOpen &&styles.menuOpen}`} onClick={()=>setMenuOpen(false)}>
                   <li>
                       <a href={"#About"}>About</a>
                   </li>
                   <li>
                       <a href={"#Experience"} >Experience</a>
                   </li>
                   <li>
                       <a href={"#Projects"}>Projects</a>
                   </li>
                   <li>
                       <a href={"#Contact"}>Contact</a>
                   </li>
               </ul>
           </div>
       </nav>
    )
}