import React, { useCallback, useEffect, useState } from "react";

const UseCallBackStudy = () => {
    const [size, setSizes] = useState(100);
    const [isDark, setIsDark] = useState(false);

    const createBoxStyle = useCallback(() => {
        return {
            backgroundColor: "pink",
            width: `${size}px`,
            height: `${size}px`,
        };
    }, [size]);

    return (
        <div
            style={{
                background: isDark ? "black" : "white",
            }}
        >
            <input
                type="number"
                value={size}
                onChange={(e) => setSizes(e.target.value)}
            />
            <Box createBoxStyle={createBoxStyle} />
            <button onClick={() => setIsDark(!isDark)}>Dark Mode</button>
        </div>
    );
};

const Box = ({ createBoxStyle }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        console.log("박스 키우기");
        setStyle(createBoxStyle());
    }, [createBoxStyle]);

    return <div style={style}>hello</div>;
};

export default UseCallBackStudy;
