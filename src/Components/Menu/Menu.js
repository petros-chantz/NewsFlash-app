import React from "react";
import styled from "styled-components";
import MenuHome from "./MenuHome";
import MenuTopic from "./MenuTopic";


const MenuWrapper = styled.div`
    padding: 20px 30px 20px 30px;
`;

const MenuListWrapper = styled.div`
    height: 40%;
    display: grid;
    grid-template-rows: repeat(7,1fr);
    grid-gap: 10px;
    place-items: center;
`;

export default function Menu(props) {
const { topicNames } = props;
    return (
        <MenuWrapper>
            <MenuListWrapper>
                <MenuHome/>
                {Object.keys(topicNames).map((id) => <MenuTopic topicNames={topicNames[id]}/>)}
            </MenuListWrapper>
        </MenuWrapper>
    );
}

// {Object.keys(projects).map((id) => {
//                         return (
//                             <Project projects={projects[id]}/>
//                         );
//                     })}