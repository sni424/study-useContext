import React, { useState } from "react";
import Pages from "./Page";

import { ThemeContext } from "../../../context/ThemeContext";
import { UserContext } from "../../../context/UserContext";

const DarkPage = () => {
    const [isDark, setIsDark] = useState(false);

    return (
        <UserContext.Provider value={"사용자"}>
            <ThemeContext.Provider value={{ isDark, setIsDark }}>
                <div>
                    <Pages />
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    );
};

export default DarkPage;
