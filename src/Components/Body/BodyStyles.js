import styled from "styled-components";

export const BodyWrapper = styled.div`
    height: 80vh;
    background-color: white;
    margin: 10px;
    padding: 5px;
    border-radius: 8px;
    background-color: #EFF6FA;
    display:grid;
    place-items: center;
`;

export const NewsList = styled.div`
    height: 85%;
    width: 90%;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 20px;
`;

export const NewsItem = styled.div`
    height: 100%;
    width: 100%;
    background-color: white;
    border: 2px solid blue;
    border-radius: 8px;
    padding: 15px;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;
    place-items: center;

    .section-topic{
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);

        .topic{}
        .date{
            display:grid;
            place-items: center end;
        }
    }
    .section-description{
        width:100%;
        display:grid;
        place-items: center;

        .title{
            font-size: 25px;
            text-align: justify;
        }
    }

    .section-author{
        width:100%;
        display:grid;
        place-items: center end;
    }

`;
