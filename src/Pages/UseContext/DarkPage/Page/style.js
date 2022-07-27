import styled from "styled-components";

export const PageDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export const ContentDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
`;
