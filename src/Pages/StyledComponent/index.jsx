import styled, { keyframes } from "styled-components";

const Father = styled.div`
    display: flex;
`;

const rotateAnime = keyframes`
0%{
transform: rotate(0deg);
background-color: black;
color: white;
}50%{
transform: rotate(180deg);
background-color: green;
color: blue;
}
100%{
    transform: rotate(0deg);
    background-color: tomato;
    color: white;
}
`;

const hoverAnime = keyframes`
from{
    padding: 0.25em 1em;
}to{
    padding: 0.5em 1.5em;
}
`;
const BoxOne = styled.div`
    background-color: teal;
    width: 100px;
    height: 100px;
`;
const TextP = styled.p`
    font-size: 0.5rem;
`;
const BoxTwo = styled.div`
    background-color: tomato;
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${rotateAnime} 1s linear;
    span {
        font-size: 12px;
        font-weight: 800;
    }
    ${TextP} {
        &:hover {
            font-size: 18px;
        }
    }
`;
const Text = styled.span`
    color: white;
`;
const Button = styled.button`
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    cursor: pointer;
    &:hover {
        animation: ${hoverAnime} 0.5s;
        animation-fill-mode: forwards;
    }
`;

const TomatoButton = styled(Button)`
    background-color: tomato;
`;
const Input = styled.input.attrs({ required: true, minLength: 10 })`
    background-color: green;
`;

const StyledComponent = () => {
    return (
        <Father>
            <BoxOne>
                <Text>Hello</Text>
            </BoxOne>
            <BoxTwo>
                <span>적당히 바람이 시원해!</span>
                <TextP>알았어! 알았어!</TextP>
            </BoxTwo>
            <Button>안녕</Button>
            <TomatoButton>반가워</TomatoButton>
            <Button as="a" href="https://naver.com" target="_blank">
                안녕
            </Button>
            <Input />
        </Father>
    );
};

export default StyledComponent;
