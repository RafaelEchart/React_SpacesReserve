import React, { useState } from 'react';
import { message, Modal, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import ImagePicker from 'react-image-picker';
import 'react-image-picker/dist/index.css';

import { FileImageOutlined } from '@ant-design/icons';

const Form = () => {
  const navigate = useNavigate();

  const [modalState, setModalState] = useState(false);

  const showModal = () => {
    setModalState(true);
  };

  const closeModal = () => {
    setModalState(false);
  };

  const imageList = ['https://ctfassets.imgix.net/vh7r69kgcki3/2HM1ow9oXjHVnGUKO09dxS/8bdcc43b8643c35951e2c4194c04aa7a/Space_StandardOffice__Size_XL__Aspect_1x1.png?auto=format%20compress&fit=crop&q=50&w=1050&h=1050',
    'https://ctfassets.imgix.net/vh7r69kgcki3/2HbLseNzmnFCH4vMJyLuVO/30eeab003f239aa46cdc07f030a17a49/Space_DedicatedDesk__Size_M__Aspect_1x1.png?auto=format%20compress&fit=crop&q=50&w=750&h=750',
    'https://ctfassets.imgix.net/vh7r69kgcki3/2PLXjS5AcbmchOMy6QScMm/256a7b64daf50f0e72a51cca63027bed/Space_OfficeSuite__Size_M__Aspect_1x1.png?auto=format%20compress&fit=crop&q=50&w=750&h=750',
    'https://ctfassets.imgix.net/vh7r69kgcki3/2PLXjS5AcbmchOMy6QScMm/256a7b64daf50f0e72a51cca63027bed/Space_OfficeSuite__Size_M__Aspect_1x1.png?auto=format%20compress&fit=crop&q=50&w=750&h=750'];

  const [spaceData, setSpaceData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const onPick = (image) => {
    setSpaceData({ ...spaceData, image: image.src });
  };

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

            <div className="space_image">
              <input
                placeholder="Image URL"
                className="login_input space_input"
                type="text"
                name="spaceImage"
                onChange={(e) => handleInput(e, 'image')}
                value={spaceData.image}
                id="spaceImage"
                autoComplete="off"
              />
              <button type="button" onClick={showModal}>
                <FileImageOutlined />
              </button>
            </div>

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
      <Modal
        title="Pick an Image"
        visible={modalState}
        onOk={closeModal}
        footer={[<Button key="submit" type="primary" onClick={closeModal}>Ok</Button>]}
        closable={false}
      >
        <ImagePicker
          images={imageList.map((image, i) => ({ src: image, value: i }))}
          onPick={onPick}
        />
      </Modal>

    </>
  );
};

export default Form;
