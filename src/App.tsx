import Header from "./components/Header/Header.jsx"
import { Routes, Route } from 'react-router'
import Home from "./pages/Home/Home.js"
import Booking from "./pages/Booking/Booking.js"
import Schedules from "./pages/Schedules/Schedules.js"
import Terminals from "./pages/Terminals/Terminals.js"
import Rates from "./pages/Rates/Rates.js"
import FAQ from "./pages/FAQ/FAQ.js"
import TravelGuides from "./pages/TravelGuides/TravelGuides.js"
import BusRoutes from "./pages/BusRoutes/BusRoutes.js"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/online-booking" element={<Booking />}/>
        <Route path="/schedules" element={<Schedules />}/>
        <Route path="/terminals" element={<Terminals />}/>
        <Route path="/rates"  element={<Rates />}/>
        <Route path="/routes" element={<BusRoutes />}/>
        <Route path="/faq" element={<FAQ />}/>
        <Route path="/travel-guides" element={<TravelGuides />}/>
      </Routes>
    </>
  )
}

export default App