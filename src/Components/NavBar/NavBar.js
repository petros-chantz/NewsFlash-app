import React from "react";
import { NavBarWrapper } from "./NavBarStyles";

export default function NavBar() {
    return (
        <NavBarWrapper>
            <div className="NavBar-title">
                <h2 className="title">NewsFlash</h2>    
            </div>
            <div className="NavBar-subTitle">
                <h2 className="subTitle">Read the latest stories from the New York Times</h2>
            </div>
            <div className="NavBar-btns">
                <button className="btn">world</button>
                <button className="btn">us</button>
                <button className="btn">Top</button>
                <button className="btn">Top</button>
                <button className="btn">Top</button>
                <button className="btn">Top</button>
            </div>
        </NavBarWrapper>
    );
}