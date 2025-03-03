import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Register from "../pages/register";
import Course from "../pages/course";

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
            <Route path="/register" element={
                <>
                    <Register />
                </>
            } />
            <Route path="/course" element={
                <>
                    <Course />
                </>
            } />
        </Routes>
    )
}

export default AppRoutes
