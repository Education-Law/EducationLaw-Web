import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Navbar />} />
        </Routes>
    )
}
