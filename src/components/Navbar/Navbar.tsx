import { Link } from "react-router"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link className="link" to="/">Home</Link>
        </li>
        <li>
          <Link className="link" to="/online-booking">Booking</Link>
        </li>
        <li>
          <Link className="link" to="/schedules">Schedules</Link>
        </li>
        <li>
          <Link className="link" to="/terminals">Terminals</Link>
        </li>
        <li>
          <Link className="link" to="/rates">Rates</Link>
        </li>
        <li>
          <Link className="link" to="/routes">Routes</Link>
        </li>
        <li>
          <Link className="link" to="/faq">FAQ</Link>
        </li>
        <li>
          <Link className="link" to="/travel-guides">Travel Guides</Link>
        </li>
      </ul>
      <button className="book-now-btn">Book Now</button>
    </nav>
  )
}

export default Navbar