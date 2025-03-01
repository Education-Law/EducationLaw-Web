import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Navbar />
                    <Dashboard />
                    <Footer />
                </>
            } />
            <Route path="/login" element={
                <>
                    <Login />
                </>
            } />
        </Routes>
    )
}

export default AppRoutes
