import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;
const BoxOne = styled.div`
    background-color: teal;
    width: 100px;
    height: 100px;
`;
const BoxTwo = styled.div`
    background-color: tomato;
    width: 100px;
    height: 100px;
`;
const Text = styled.span`
    color: white;
`;
const Button = styled.button`
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    cursor: pointer;
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
            <BoxTwo />
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
