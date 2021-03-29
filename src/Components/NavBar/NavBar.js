import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.div`
    height: 15vh;
    background-color: #EBF2FA;
    border-bottom: 3px solid #242423;
    display: grid;
    place-items: end start;

    .navBar-title{
        padding-left: 50px;
        .title{
            font-size: 60px;
            color: #242423;
        }
    }
`;
export default function NavBar() {
    return (
        <NavBarWrapper>
            <div className="navBar-title">
                <h2 className="title">NewsFlash</h2>
            </div>
        </NavBarWrapper>
    );
}