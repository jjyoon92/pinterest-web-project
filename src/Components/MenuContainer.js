import React from "react";
import "../Styles/MenuContainer.css"
function MenuContainer({icon}) {
    return (
        <div className="iconContainer">
            {icon}
        </div>
    )
}
export default MenuContainer;