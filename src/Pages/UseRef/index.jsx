import React, { useState, useRef, useEffect } from "react";

const UseRefStudy = () => {
    const [count, setCount] = useState(0);
    const [render, setRender] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const countRef = useRef(0);
    const countVar = 0;
    const inputRef = useRef();

    const changeState = () => {
        setCount(count + 1);
    };
    const changeRef = () => {
        countRef.current = countRef.current + 1;
    };

    const changeVar = () => {
        countVar = countVar + 1;
    };

    useEffect(() => {
        setRender(render + 1);
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <h1>State : {count}</h1>
            <h1>Ref : {countRef.current}</h1>
            <h1>countVar : {countVar}</h1>
            <input
                ref={inputRef}
                type="text"
                placeholder="입력해주세요."
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    setInputValue("");
                }}
            >
                로그인
            </button>
            <div>
                <button onClick={changeState}>use업버튼</button>
                <button onClick={changeRef}>ref업버튼</button>
                <button onClick={changeVar}>var업버튼</button>
            </div>
        </div>
    );
};

export default UseRefStudy;
