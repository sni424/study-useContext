import * as S from "./style";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Header = () => {
    const { isDark } = useContext(ThemeContext);
    return (
        <S.HeaderDiv
            bgColor={isDark ? "black" : "lightgray"}
            color={isDark ? "white" : "black"}
        >
            <h1>어서오세요!</h1>
        </S.HeaderDiv>
    );
};

export default Header;
