import { Link } from "react-router"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/online-booking">Booking</Link>
        </li>
        <li>
          <Link to="/schedules">Schedules</Link>
        </li>
        <li>
          <Link to="/terminals">Terminals</Link>
        </li>
        <li>
          <Link to="/rates">Rates</Link>
        </li>
        <li>
          <Link to="/routes">Routes</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/travel-guides">Travel Guides</Link>
        </li>
      </ul>
      <button className="book-now-btn">Book Now</button>
    </nav>
  )
}

export default Navbar