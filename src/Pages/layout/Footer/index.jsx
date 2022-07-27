import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import * as S from "./style";

const Footer = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);
    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <S.FooterDiv
            bgColor={isDark ? "black" : "lightgray"}
            color={isDark ? "white" : "black"}
        >
            <S.DarkButton onClick={toggleTheme}>Dark Mode</S.DarkButton>
        </S.FooterDiv>
    );
};

export default Footer;
