import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import NotFound from "./Pages/NotFound";

import "./App.css";
<<<<<<< HEAD
import CampusAmba from "./Pages/CampusAmba.tsx";
import VantaFogBackground from "./Components/VantaFogBackground";
=======
>>>>>>> a331ce39967023072a0c96480c61ad7e851ab65d

function App() {
    return (
        <Router>
<<<<<<< HEAD
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
=======
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<Home />} />
                    <Route path="/contact" element={<Home />} />
                    <Route path="/events" element={<Events />} />
                    <Route
                        path="/eventdetails/:category/:id"
                        element={<Home />}
                    />
                    <Route path="/register" element={<Home />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/meet-the-team" element={<Home />} />
                    <Route path="/sponsors" element={<Home />} />
                    <Route path="/campus-ambassador" element={<Home />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
>>>>>>> a331ce39967023072a0c96480c61ad7e851ab65d
        </Router>
    );
}

export default App;
