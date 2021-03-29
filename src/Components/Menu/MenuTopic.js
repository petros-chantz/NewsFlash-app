import React from "react";
import styled from "styled-components";

const MenuTopicWrapper = styled.div`
    width: 55%;
    height: 100%;
    display:grid;
    grid-template-columns: 1fr 3fr;
    grid-gap: 20px;
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
    .topic-text{
        font-weight: 600;
    }

    img{
        
        height: 100%;
        width: 100%;
    }
`;

export default function MenuTopic(props) {
    const { topicNames } = props;
    return (
        <MenuTopicWrapper onClick={() => props.setTopic(topicNames.topic)}>
            <img src={topicNames.icon} alt={topicNames.topic}/>
            <h3 className="topic-text">{topicNames.topic}</h3>
        </MenuTopicWrapper>
    );
}