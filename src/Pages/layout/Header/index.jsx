import * as S from "./style";
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import { UserContext } from "../../../context/UserContext";

const Header = () => {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);
    return (
        <S.HeaderDiv
            bgColor={isDark ? "black" : "lightgray"}
            color={isDark ? "white" : "black"}
        >
            <h1>{user}님 어서오세요!</h1>
        </S.HeaderDiv>
    );
};

export default Header;
