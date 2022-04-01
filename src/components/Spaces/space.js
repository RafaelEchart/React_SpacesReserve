/* eslint-disable no-param-reassign */
import React from 'react';
import PropTypes from 'prop-types';
import { message } from 'antd';

const Space = ({ space, key }) => {
  const resetButton = (btnId, value) => {
    const targetBtn = document.getElementById(btnId);
    const recoverBtn = document.getElementById(`recover-${btnId}`);
    targetBtn.disabled = value;
    recoverBtn.disabled = !value;
  };

  const removeSpace = async (spaceId) => {
    const { token } = JSON.parse(localStorage.getItem('userInformation'));
    try {
      fetch(`http://localhost:3000/spaces/${spaceId}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          space: {
            removed: true,
          },
        }),
      });
      resetButton(spaceId, true);
      message.success('Space removed successfully');
    } catch (error) {
      message.error(error);
    }
  };

  const recoverSpace = async (spaceId) => {
    const { token } = JSON.parse(localStorage.getItem('userInformation'));
    try {
      fetch(`http://localhost:3000/spaces/${spaceId}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          space: {
            removed: false,
          },
        }),
      });
      message.success('Space recovered successfully');
      resetButton(spaceId, false);
    } catch (error) {
      message.error(error);
    }
  };

  return (
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
        <button id={space.id} type="button" className="remove-btns" onClick={() => removeSpace(space.id)}>Remove</button>
        <button id={`recover-${space.id}`} type="button" className="recover-btns" onClick={() => recoverSpace(space.id)}>Recover</button>
      </div>
    </div>
  );
};

Space.propTypes = {
  space: PropTypes.element.isRequired,
  key: PropTypes.element.isRequired,
};

export default Space;
