import { Link } from "react-router"
import "./Home.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { resourceCardData } from "../../data/resourceCardData.js";
import ResourceCard from "../../components/ResourceCard/ResourceCard";



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
          {resourceCardData.map((card) => (
            <ResourceCard
              icon={card.icon}
              name={card.name}
              description={card.description}
            />
          ))}
        </div>
      </div>
      <div className="popular-routes-section"></div>
    </div>
  )
}

export default Home