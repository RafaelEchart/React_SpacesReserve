import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const SpaceCard = ({
  name, image, description, price,
}) => (
  <Card
    hoverable
    className="space-card"
    cover={<img alt="Space" src={image} />}
    actions={[
      <Link className="view-btn" key="link" to="/details">View Space</Link>,
    ]}
  >
    <Card.Meta title={name} description={description} />
    <div className="space-card-price">
      <span>{price}</span>
    </div>
  </Card>
);

SpaceCard.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default SpaceCard;
