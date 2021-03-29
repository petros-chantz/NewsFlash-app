import React from "react";
import styled from "styled-components";

const MenuHomeWrapper = styled.div`
    width: 55%;
    height: 100%;
    display:grid;
    place-items: center start;
    padding-left: 20px;
    color: #242423;
    border: 2px solid #EBF2FA;
    :hover {
        color: #333533;
        border: 2px solid #333533;
        background-color: white;
         border-radius: 5px;
    }
    .home-text{
        font-weight: 700;
        
    }
`;

export default function MenuHome() {
    return (
                <MenuHomeWrapper>
                    <h3 className="home-text">Home</h3>
                </MenuHomeWrapper>
    );
}