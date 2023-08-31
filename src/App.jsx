import { Route, Routes } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Home, Login, Music, Sports, Art, NotFound } from "./pages";
import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import NavbarUi from "./components/Navbar";

function App() {
    return (
        <NextUIProvider>
            <NavbarUi />
            <Routes>
                <Route
                    path="/"
                    element={<Home />}
                />
                <Route
                    path="/music"
                    element={<Music />}
                />
                <Route
                    path="/sports"
                    element={<Sports />}
                />
                <Route
                    path="/art"
                    element={<Art />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="*"
                    element={<NotFound />}
                />
            </Routes>
            <Footer />
        </NextUIProvider>
    );
}

export default App;
