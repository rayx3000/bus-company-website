import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusSide, faArrowRightLong, faClock } from "@fortawesome/free-solid-svg-icons";
import './PopularRouteCard.scss'

const PopularRouteCard = () => {
  return (
    <div className='popular-route-card'>
      <div className='route-name-section'>
        <FontAwesomeIcon className="bus-route-icon" icon={faBusSide} />
        <div>
          <h3>Cagayan De Oro  <FontAwesomeIcon icon={faArrowRightLong} /> Davao</h3>
        </div>
      </div>
      <div className='route-schedule-section'>
        <FontAwesomeIcon icon={faClock} />
        Every Hour
      </div>
      <div className='route-price-duration-section'>
        <span id='price'>₱655 - ₱1,015</span>
        <span id='duration'>5.5 to 6.5 hours</span>
      </div>
    </div>
  )
}

export default PopularRouteCard