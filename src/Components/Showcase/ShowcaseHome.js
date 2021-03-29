import React from "react";
import styled from "styled-components";

const ShowcaseHomeWrapper = styled.div`
    background-color: white;
    width: 90%;
    height: 90%;
    display: grid;
    grid-template-rows: 3fr 1fr;
    place-items: center;
    box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
`;
export default function ShowcaseHome() {
    return (
            <ShowcaseHomeWrapper>
                <div>
                    <h3>hello</h3>
                </div>
                <div>
                    
                </div>
            </ShowcaseHomeWrapper>
    );
}