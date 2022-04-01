import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'antd';
import PropTypes from 'prop-types';

const SpaceCard = ({
  id, name, image, description, price,
}) => (
  <Card
    hoverable
    className="space-card"
    cover={<img alt="Space" src={image} />}
    actions={[
      <Link key="link" to={`space/${id}`}> View</Link>,
    ]}
  >
    <Card.Meta title={name} description={description} />
    <div className="space-card-price">
      <span>{price}</span>
    </div>
  </Card>
);

SpaceCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default SpaceCard;
