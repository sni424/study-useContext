import { Route, Routes } from "react-router-dom";

import Main from "./Pages/Main";
import UseContextStudy from "./Pages/UseContext";
import DarkPage from "./Pages/UseContext/DarkPage";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/context" element={<UseContextStudy />} />
                <Route path="/dark" element={<DarkPage />} />
            </Routes>
        </div>
    );
};

export default App;
