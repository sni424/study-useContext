import { createContext, useContext } from "react";
import { ThemeContext } from "styled-components";

const themeDefault = { border: "10px solid green" };
const themeContext = createContext(themeDefault);

const UseContextStudy = () => {
    const theme = useContext(themeContext);

    return (
        <themeContext.Provider value={{ border: "10px solid blue" }}>
            <div style={theme}>
                <h1>useContext</h1>
                <Sub1 />
            </div>
        </themeContext.Provider>
    );
};

const Sub1 = () => {
    const theme = useContext(themeContext);
    return (
        <themeContext.Provider value={{ border: "10px solid red" }}>
            <div style={theme}>
                <h1>useContext2</h1>
                <Sub2 />
            </div>
        </themeContext.Provider>
    );
};
const Sub2 = () => {
    const theme = useContext(themeContext);
    return (
        <themeContext.Provider value={{ border: "10px solid black" }}>
            <div style={theme}>
                <h1>useContext3</h1>
                <Sub3 />
            </div>
        </themeContext.Provider>
    );
};
const Sub3 = () => {
    const theme = useContext(themeContext);
    return (
        <div style={theme}>
            <h1>useContext4</h1>
        </div>
    );
};

export default UseContextStudy;
