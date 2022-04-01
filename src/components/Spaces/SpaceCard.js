import React from 'react';
import { Card, Button } from 'antd';
import PropTypes from 'prop-types';

const SpaceCard = ({
  name, image, description, price,
}) => (
  <Card
    hoverable
    className="space-card"
    cover={<img alt="Space" src={image} />}
    actions={[
      <Button type="primary" key="link">View Space</Button>,
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
