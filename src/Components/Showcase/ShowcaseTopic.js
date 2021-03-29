import React from "react";
import styled from "styled-components";

const ShowcaseTopicWrapper = styled.div`
    background-color: white;
    height: 90%;
    width:90%;
    display: grid;
    place-items: center;
    box-shadow: 0 13px 27px -5px hsl(240deg 30% 28% / 25%), 0 8px 16px -8px hsl(0deg 0% 0% / 30%), 0 -6px 16px -6px hsl(0deg 0% 0% / 3%);
`;

export default function ShowcaseTopic(props) {
    return (
            <ShowcaseTopicWrapper>
            <h2>{props.topic}</h2>
            </ShowcaseTopicWrapper>
    );
}