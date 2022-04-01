import React from 'react';
import PropTypes from 'prop-types';

const Space = ({ space, key }) => (
  <div className="space-card" key={key}>
    <div className="space-main">
      <div className="space-imgae-container">
        <img src={space.image} alt="space" />
      </div>
      <div className="space-info">
        <h2>{space.name}</h2>
        <p>{space.description}</p>
      </div>
    </div>
    <div className="space-footer">
      <small>
        Added:
        {space.created_at}
      </small>
      <button type="button" className="remove-btns">Remove</button>
    </div>
  </div>
);

Space.propTypes = {
  space: PropTypes.element.isRequired,
  key: PropTypes.element.isRequired,
};

export default Space;
