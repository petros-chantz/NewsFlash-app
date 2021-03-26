import styled from "styled-components";

export const NavBarWrapper = styled.div`
    height: calc(100vh - 85vh);
    margin: 10px;
    padding: 5px;
    border-radius: 8px;
    background-color: #B1D0E7;
    display:grid;
    grid-template-rows: repeat(3, 1fr);
    place-items: center;

    .NavBar-title{
        height: 100%;
        width: 100%;
        display:grid;
        place-items: center start;
        padding-left: 20px;

        .title{
            font-size: 35px;
            color: black;
            letter-spacing: 2px;
            font-weight: 700;
        }
    }

    .NavBar-subTitle{
        height: 100%;
        width: 100%;
        display:grid;
        place-items: center start;
        padding-left: 20px;

        .subTitle{
            font-size: 20px;
            color: black;
            font-weight: 500;
        }
    }

    .NavBar-btns{
        height: 100%;
        width: 100%;
        display:grid;
        grid-template-columns: repeat(6, 1fr);
        place-items: center;
        padding-left: 20px;

        .btn{
            padding: 5px 35px 5px 35px;
            border: 2px solid black;
            border-radius: 20px;
            background-color: white;
            font-weight: 500;
            letter-spacing: 1px;
            font-size: 12px

        }
    }
`;