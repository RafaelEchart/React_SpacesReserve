import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Image } from 'antd';
import {
  CaretLeftOutlined,
  RightCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';

const Details = () => {
  const { id } = useParams();
  const [space, setSpace] = useState({});

  const getSpace = async () => {
    const { token } = JSON.parse(localStorage.getItem('userInformation'));
    const response = await fetch(`http://localhost:3000/spaces/${id}`, {
      headers: { Authorization: token },
    });
    const data = await response.json();
    setSpace(data);
  };

  useEffect(() => {
    getSpace();
  }, []);
  return (
    <section className="details-page">
      <div className="details-section">
        <div>
          <Image width={600} height={600} src={space.image} alt="Space Image" />
        </div>
        <div className="space-details">
          <div className="space-main-details">
            <p className="space-name">{space.name}</p>
            <p className="space-desc">{space.description}</p>
          </div>
          <ul className="details">
            <li className="details-row">
              <span>Price</span>
              <span>{space.price}</span>
            </li>
            <li className="details-row">
              <span>Purchase</span>
              <span>{space.price}</span>
            </li>
            <li className="details-row">
              <span>Total</span>
              <span>{space.price}</span>
            </li>
            <li className="details-row">
              <span>Duration</span>
              <span>{space.price}</span>
            </li>
          </ul>
          <Link key="link1" to={`/spaces/${id}/reservation`}>
            <div className="reserve-btn">
              <SettingOutlined />
              Reserve
              <RightCircleOutlined />
            </div>
          </Link>
        </div>
      </div>
      <div className="back-btn">
        <Link key="link" to="/">
          <CaretLeftOutlined style={{ color: '#fff' }} className="back-icon" />
        </Link>
      </div>
    </section>
  );
};

export default Details;
