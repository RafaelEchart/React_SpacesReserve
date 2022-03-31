import React, { useState } from 'react';

const Form = () => {
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

  const handleSubmisson = () => {
    console.log(spaceData);
  };

  return (
    <>
      <div className="login_container">
        <div className="session">
          <div className="left" />
          <div action="" className="log-in" autoComplete="off">
            <h4 className="login_title">
              Add new Space
            </h4>

            <div className="floating-label">
              <input
                placeholder="Space Name"
                className="login_input"
                type="text"
                name="spaceName"
                onChange={(e) => handleInput(e, 'name')}
                id="name"
                autoComplete="off"
              />
            </div>

            <div className="floating-label">
              <textarea
                placeholder="Description"
                className="login_input sp_textarea"
                name="Description"
                onChange={(e) => handleInput(e, 'description')}
                id="description"
                autoComplete="off"
              />
            </div>

            <div className="floating-label">
              <input
                placeholder="Price"
                className="login_input"
                type="number"
                name="spacePrice"
                onChange={(e) => handleInput(e, 'price')}
                id="spacePrice"
                autoComplete="off"
              />
            </div>

            <div className="floating-label">
              <input
                placeholder="Image URL"
                className="login_input"
                type="text"
                name="spaceImage"
                onChange={(e) => handleInput(e, 'image')}
                id="spaceImage"
                autoComplete="off"
              />
            </div>

            <button type="submit" onClick={handleSubmisson} className="login_button">Add Space</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
