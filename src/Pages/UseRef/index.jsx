import React, { useState, useRef, useEffect } from "react";

const UseRefStudy = () => {
    const [count, setCount] = useState(0);
    const [render, setRender] = useState(0);
    const countRef = useRef(0);
    const countVar = 0;

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
        console.log("렌더링", render);
    }, []);

    return (
        <div>
            <h1>State : {count}</h1>
            <h1>Ref : {countRef.current}</h1>
            <h1>countVar : {countVar}</h1>
            <button onClick={changeState}>use업버튼</button>
            <button onClick={changeRef}>ref업버튼</button>
            <button onClick={changeVar}>var업버튼</button>
        </div>
    );
};

export default UseRefStudy;
