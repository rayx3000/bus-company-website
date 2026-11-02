import { Link } from "react-router"
import "./Home.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";



const Home = () => {
  return (
    <div className="home">
      <div className="home-header">
        <h1>Travel Across The Island Of Mindanao With Rural Transit</h1>
        <p>You can see direct bus route schedules in buses, find terminals, and your fares
          across your journey in Mindanao.
        </p>
        <div className="home-header-links">
          <Link className="link" to="/schedules">
            <button className="schedule-btn">
              <span>View Schedules</span>
              <FontAwesomeIcon icon={faArrowRightLong} />
            </button>
          </Link>
          <Link className="link" to="/online-booking">
            <button className="online-book-btn">Book Online</button>
          </Link>
        </div>
      </div>
      <div className="why-book-section"></div>
      <div className="popular-routes-section"></div>
    </div>
  )
}

export default Home