import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import LandingPage from "../pages/LandingPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Course from "../pages/course";
import Blog from "../pages/blog";
import QuizMultiple from "../pages/QuizMultiple";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Navbar />
                    <LandingPage />
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
                    <Navbar />
                    <Course />
                    <Footer />
                </>
            } />
            <Route path="/blog" element={
                <>
                    <Navbar />
                    <Blog />
                    <Footer />
                </>
            } />
            <Route path="/quiz" element={
                <>
                    <Navbar />
                    <QuizMultiple />
                    <Footer />
                </>
            } />
        </Routes>
    )
}

export default AppRoutes
