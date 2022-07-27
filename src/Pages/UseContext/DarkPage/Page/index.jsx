import * as S from "./style.js";

import Header from "../../../layout/Header";
import Footer from "../../../layout/Footer/index.jsx";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext.js";
import { UserContext } from "../../../../context/UserContext.js";

const Pages = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (
        <S.PageDiv>
            <Header />
            <S.ContentDiv
                bgColor={isDark ? "black" : "lightgray"}
                color={isDark ? "white" : "black"}
            >
                {user}님 좋은하루 되세요
            </S.ContentDiv>
            <Footer />
        </S.PageDiv>
    );
};

export default Pages;
