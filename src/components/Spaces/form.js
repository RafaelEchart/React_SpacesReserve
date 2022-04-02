import React, { useState } from 'react';
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();

  const [spaceData, setSpaceData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const handleInput = (e, field) => {
    const input = e.target.value;
    switch (field) {
      case 'name':
        setSpaceData({ ...spaceData, name: input });
        break;

      case 'description':
        setSpaceData({ ...spaceData, description: input });
        break;

      case 'price':
        setSpaceData({ ...spaceData, price: parseFloat(input) });
        break;

      case 'image':
        setSpaceData({ ...spaceData, image: input });
        break;

      default:
        break;
    }
  };

  const handleSubmisson = async () => {
    const { token } = JSON.parse(localStorage.getItem('userInformation'));
    try {
      fetch('http://localhost:3000/spaces', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          space: {
            name: spaceData.name,
            description: spaceData.description,
            price: spaceData.price,
            image: spaceData.image,
          },
        }),
      });
      message.success('New space added successfully');
      navigate('/');
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <>
      <div className="login_container">
        <div className="session">
          <div action="" className="log-in add-space" autoComplete="off">
            <h4 className="login_title">
              Add new Space
            </h4>

            <input
              placeholder="Space Name"
              className="login_input space_input"
              type="text"
              name="spaceName"
              onChange={(e) => handleInput(e, 'name')}
              id="name"
              autoComplete="off"
            />

            <input
              placeholder="Price"
              className="login_input space_input"
              type="number"
              name="spacePrice"
              onChange={(e) => handleInput(e, 'price')}
              id="spacePrice"
              autoComplete="off"
            />

            <input
              placeholder="Image URL"
              className="login_input space_input"
              type="text"
              name="spaceImage"
              onChange={(e) => handleInput(e, 'image')}
              id="spaceImage"
              autoComplete="off"
            />

            <textarea
              placeholder="Description"
              className="login_input space_input sp_textarea"
              name="Description"
              onChange={(e) => handleInput(e, 'description')}
              id="description"
              autoComplete="off"
            />
            <button type="submit" onClick={handleSubmisson} className="login_button">Add Space</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
