import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import ContactUs from "./Pages/ContactUs";
import Events from "./Pages/Events";
import Login from "./Pages/Login";
import MeetTheTeam from "./Pages/MeetTheTeam";
import Sponsors from "./Pages/Sponsors";
import NotFound from "./Pages/NotFound";
import EventDetails from "./Pages/EventDetails.tsx";
import Dashboard from "./Pages/Dashboard.tsx";

import "./App.css";
import CampusAmba from "./Pages/CampusAmba.tsx";
import VantaFogBackground from "./Components/VantaFogBackground";

function App() {
    return (
        <Router>
            <div className="relative min-h-screen">
                {/* Global Fog Background - Persist across navigation */}
                <VantaFogBackground />

                {/* Main Content */}
                <div className="relative" style={{ zIndex: 10 }}>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<Home />} />
                            <Route path="about" element={<About />} />
                            <Route path="contact" element={<ContactUs />} />
                            <Route path="events" element={<Events />} />
                            <Route
                                path="/eventdetails/:category/:id"
                                element={<EventDetails />}
                            />
                            <Route path="team" element={<MeetTheTeam />} />
                            <Route path="sponsors" element={<Sponsors />} />
                            <Route path="campus-ambassador" element={<CampusAmba />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
