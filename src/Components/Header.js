import MenuContainer from "./MenuContainer";
import "../Styles/Header.css";
import {Add, Chat, FavoriteRounded, Home, Notifications, Person, QuestionMark} from "@mui/icons-material";
import {useEffect} from "react";

function Header(){



    useEffect(() => {

        const homeIcon = document.querySelectorAll(".iconContainer")[0];
        homeIcon.classList.add("active");

        const allIcon = document.querySelectorAll(".iconContainer");

        function setMenuActive() {
            allIcon.forEach(n => n.classList.remove("active"));
            this.classList.add("active");
        }

        allIcon.forEach(n => n.addEventListener("click", setMenuActive));
    }, []);


    return(
        <header id="header">
            <img className="logo" src="/images/pinterest-logo.png" alt="pinterest logo"/>

            <div className="subMenu">
                <div className="subWrap">
                    <MenuContainer icon={<Home/>}/>
                    <MenuContainer icon={<Add/>}/>
                </div>
                {/*<div className="subWrap">*/}
                    <div className="search">
                        <input type="text" placeholder="Search"/>
                        <div className="iconSearch"></div>
                    </div>
                {/*</div>*/}
                <div className="subWrap">
                    <MenuContainer icon={<Notifications/>}/>
                    <MenuContainer icon={<FavoriteRounded/>}/>
                    <MenuContainer icon={<Chat/>}/>
                    <MenuContainer icon={<Person/>}/>
                </div>
            </div>
        </header>
    )
}

export default Header;