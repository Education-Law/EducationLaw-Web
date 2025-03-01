import { Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "../component/footer";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Navbar />
                    <Footer />
                </>
            } />
        </Routes>
    )
}

export default AppRoutes
