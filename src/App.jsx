import { Route, Routes } from "react-router-dom";

import Main from "./Pages/Main";
import TodoList from "./Pages/TodoList";
import UseContextStudy from "./Pages/UseContext";
import DarkPage from "./Pages/UseContext/DarkPage";
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
            </Routes>
        </div>
    );
};

export default App;
