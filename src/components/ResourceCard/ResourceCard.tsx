import './ResourceCard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface ResourceCardProps {
  icon: IconProp;
  name: string;
  description: string;
}

const ResourceCard = ({ icon, name, description }: ResourceCardProps) => {
  return (
    <div className="resource-grid-card">
      <div className="card-icon-container">
        <FontAwesomeIcon
          className="resource-card-icon"
          icon={icon}
        />
      </div>

      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ResourceCard;
