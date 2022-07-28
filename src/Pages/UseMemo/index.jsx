import React, { useMemo, useState } from "react";

const hardCalculate = (number) => {
    console.log("어려운 계산!");
    for (let i = 0; i < 999999999; i++) {}
    return number + 10000;
};

const easyCalculate = (number) => {
    console.log("쉬운 계산!");
    return number + 1;
};

const UseMemoStudy = () => {
    const [hardNumber, setHardNumber] = useState(1);
    const [easyNumber, setEasyNumber] = useState(1);

    const hardSum = useMemo(() => {
        return hardCalculate(hardNumber);
    }, [hardNumber]);
    const easySum = easyCalculate(easyNumber);

    return (
        <div>
            <h1>어려운 계산기</h1>
            <input
                type="number"
                value={hardNumber}
                onChange={(e) => {
                    setHardNumber(parseInt(e.target.value));
                }}
            />
            <span> + 10000 = {hardSum}</span>
            <h1>쉐운 계산기</h1>
            <input
                type="number"
                value={easyNumber}
                onChange={(e) => {
                    setEasyNumber(parseInt(e.target.value));
                }}
            />
            <span> + 1 = {easySum}</span>
        </div>
    );
};

export default UseMemoStudy;
