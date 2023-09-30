import { Route, Routes } from "react-router-dom";
import { Home, Login, Music, Sports, Comedy, Event, NotFound } from "./pages";
import { Footer } from "./components/Footer";
import { NextUIProvider } from "@nextui-org/react";
import "./App.css";
import NavbarUi from "./components/Navbar";
import { Contact } from "./pages/Contact";

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
                    path="/comedy"
                    element={<Comedy />}
                />
                <Route
                    path="/login"
                    element={<Login />}
                />
                <Route
                    path="/contact"
                    element={<Contact />}
                />
                <Route
                    path="/event/:id"
                    element={<Event />}
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
