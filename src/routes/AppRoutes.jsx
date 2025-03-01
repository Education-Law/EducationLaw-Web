import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Navbar />} />
        </Routes>
    )
}

export default AppRoutes
