import React from "react";
import "../Styles/Pin.css";
function Pin({pinSize}) {
    return (
        <div className={`pin ${pinSize}`}>
            <img className="mainPic" src="https://images.unsplash.com/photo-1678538065976-7b9bfe8a3092?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60"/>

            <div className="content">
                <div className="link">
                    <img src="/images/icons/icon-up-right-48.png"/>
                    <span>sample_image.com</span>
                </div>
                <div className="icon share">
                    <img src="/images/icons/icon-share-90.png" />
                </div>
                <div className="icon more">
                    <img src="/images/icons/icon-more-64.png" />
                </div>
            </div>
        </div>
    )
}

export default Pin;