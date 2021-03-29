import React, { useEffect, useState } from "react";
import useFetch from "../../api/useFetch";
import styled from "styled-components";
import Menu from "../Menu/Menu";
import Showcase from "../Showcase/Showcase";
import topicNames from "../../db.json" 

const BodyWrapper = styled.div`
    height: 85vh;
    display: grid;
    grid-template-columns: 1fr 3fr;
    background-color: #EBF2FA;
`;
export default function Body() {
    const { get, loading } = useFetch("https://react-tutorial-demo.firebaseio.com/");
    const [topic, setTopic] = useState("");
   
    return (
        <BodyWrapper>
            <Menu topicNames={topicNames} topic={topic}/>
            <Showcase topic={topic}/>
        </BodyWrapper>
    );
}

{/* <h2>{loading ? "Loading..." : ""}</h2> */}

    // useEffect(() => {
    //     get("users.json").then(data => {
    //         console.log(data);
    //     })
    //     .catch(error => console.error(error));
    // }, []);