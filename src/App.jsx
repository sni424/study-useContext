import { Route, Routes } from "react-router-dom";

import Main from "./Pages/Main";
import StyledComponent from "./Pages/StyledComponent";
import TodoList from "./Pages/TodoList";
import UseCallBackStudy from "./Pages/UseCallback";
import UseContextStudy from "./Pages/UseContext";
import DarkPage from "./Pages/UseContext/DarkPage";
import UseMemoStudy from "./Pages/UseMemo";
import OtherMemo from "./Pages/UseMemo/OtherMemo";
import UseReducerStudy from "./Pages/UseReducer";
import DeepReducer from "./Pages/UseReducer/Deep";
import UseRefStudy from "./Pages/UseRef";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="context" element={<UseContextStudy />} />
                <Route path="dark" element={<DarkPage />} />
                <Route path="todo" element={<TodoList />} />
                <Route path="useref" element={<UseRefStudy />} />
                <Route path="usememo" element={<UseMemoStudy />} />
                <Route path="usememo1" element={<OtherMemo />} />
                <Route path="usecallback" element={<UseCallBackStudy />} />
                <Route path="usereducer" element={<UseReducerStudy />} />
                <Route path="usereducer1" element={<DeepReducer />} />
                <Route path="style" element={<StyledComponent />} />
            </Routes>
        </div>
    );
};

export default App;
