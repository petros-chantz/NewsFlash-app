import React from "react";
import styled from "styled-components";
import ShowcaseHome from "./ShowcaseHome";
import ShowcaseTopic from "./ShowcaseTopic";

const ShowcaseWrapper = styled.div`
    padding: 20px 30px 20px 30px;
    display:grid;
    place-items: center;
`;

export default function Showcase(props) {
    return (
        <ShowcaseWrapper>
            {/* <ShowcaseHome/> */}
            <ShowcaseTopic topic={props.topic}/>
            
        </ShowcaseWrapper>
    );
}