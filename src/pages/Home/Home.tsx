import { Link } from "react-router"
import "./Home.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong, faTicket, faCalendarDay,
         faMapLocationDot, faSquarePollHorizontal, faRoute,
         faHandshakeAngle, faCircleQuestion, faMap
       } from "@fortawesome/free-solid-svg-icons";



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
      <div className="why-book-section">
        <div className="why-book-header">
          <h1>Everything You Need to Know</h1>
          <p>Your complete resource for Rural Transit</p>
        </div>
        <div className="resource-grid">
          <div className="resource-grid-card">
            <div className="card-icon-container">
              <FontAwesomeIcon className="resource-card-icon" icon={faTicket} />
            </div>
            <h3>Booking</h3>
            <p>Bus Ticket Online via third party booking sites</p>
          </div>
          <div className="resource-grid-card">
            <div className="card-icon-container">
              <FontAwesomeIcon className="resource-card-icon" icon={faCalendarDay} />
            </div>
            <h3>Schedules</h3>
            <p>View complete departure time, arrival time and duration in each available bus routes</p>
          </div>
          <div className="resource-grid-card">
            <div className="card-icon-container">
              <FontAwesomeIcon className="resource-card-icon" icon={faMapLocationDot} />
            </div>
            <h3>Terminals</h3>
            <p>Find your local nearby terminal, address, and contact information</p>
          </div>
          <div className="resource-grid-card">
            <div className="card-icon-container">
              <FontAwesomeIcon className="resource-card-icon" icon={faSquarePollHorizontal} />
            </div>
            <h3>Rates</h3>
            <p>Check current fares and pricing for different bus types</p>
          </div>
          <div className="resource-grid-card">
            <div className="card-icon-container">
              <FontAwesomeIcon className="resource-card-icon" icon={faRoute} />
            </div>
            <h3>Routes</h3>
            <p>Explore and browse all available bus routes</p>
          </div>
          <div className="resource-grid-card">
            <div className="card-icon-container">
              <FontAwesomeIcon className="resource-card-icon" icon={faHandshakeAngle} />
            </div>
            <h3>Third Party Buses</h3>
            <p>Guide to other buses that is affilated with Rural Transit and from Mindanao</p>
          </div>
          <div className="resource-grid-card">
            <div className="card-icon-container">
              <FontAwesomeIcon className="resource-card-icon" icon={faCircleQuestion} />
            </div>
            <h3>FAQ</h3>
            <p>Answers in common questions about Rural Transit services</p>
          </div>
          <div className="resource-grid-card">
            <div className="card-icon-container">
              <FontAwesomeIcon className="resource-card-icon" icon={faMap} />
            </div>
            <h3>Travel Guide</h3>
            <p>Tips and guide for better and smooth travel experience</p>
          </div>
        </div>
      </div>
      <div className="popular-routes-section"></div>
    </div>
  )
}

export default Home