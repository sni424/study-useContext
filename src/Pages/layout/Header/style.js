import styled from "styled-components";

export const HeaderDiv = styled.div`
    width: 100%;
    height: 80px;
    border-bottom: 2px solid gray;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
`;
