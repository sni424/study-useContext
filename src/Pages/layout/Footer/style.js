import styled from "styled-components";

export const FooterDiv = styled.div`
    width: 100%;
    height: 80px;
    border-top: 2px solid gray;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.color};
`;

export const DarkButton = styled.button`
    padding: 10px;
    margin-right: 30px;
`;
