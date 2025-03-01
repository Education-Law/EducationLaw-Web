import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";
import Dashboard from "../pages/Dashboard";

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
        </Routes>
    )
}

export default AppRoutes
