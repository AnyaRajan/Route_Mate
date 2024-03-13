import React, {useState} from "react";
import confirmed from "../../Assets/confirmed_people.png";
import waiting from "../../Assets/waiting_people.png";
import './train.css';

export default function Traindetails() {
    const [buttonText, setButtonText] = useState("Add Me  ");

    const toggleButtonText = () => {
        setButtonText((prevText) => (prevText === "Add Me" ? "Remove" : "Add Me"));
    };

    return (
        <div className="train">
            <h3 className="name">Telangana express(12723)</h3>
            <div className="details">
                <div className="train-text">
                <div className="departure">
                    <h4>6:25 AM, Sun</h4>
                    <h5>Secunderabad Jn(SC)</h5>
                </div>
                <div className="journey">
                    <h5>25hrs 15min</h5>
                </div>
                <div className="arrival">
                    <h4>7:40 AM, Mon</h4>
                    <h5>New Delhi(NDLS)</h5>
                </div>
                </div>
                <div className="options">
                    <div className="icons-button">
                        <img className="icon1 confirm" src={confirmed} alt="confirmed_people" />
                        <img className="icon1 wait" src={waiting} alt="waiting_people" />
                        <button className="chat-button" >Chat</button>
                        <button className="Add-me" onClick={toggleButtonText}>{buttonText}</button> 
                    </div>
                    <div className="count pr-48 pt-1">
                        <h4 id = "cnum" className="confirm number" >83</h4>
                        <h4 id = "wnum" className="wait number">57</h4>
                    </div>
                    
                </div>
            </div>
            
        </div>
    );
}
