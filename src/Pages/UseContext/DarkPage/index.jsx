import React, { useState } from "react";
import Pages from "./Page";

import { ThemeContext } from "../../../context/ThemeContext";

const DarkPage = () => {
    const [isDark, setIsDark] = useState(false);
    return (
        <ThemeContext.Provider value={{ isDark, setIsDark }}>
            <div>
                <Pages />
            </div>
        </ThemeContext.Provider>
    );
};

export default DarkPage;
