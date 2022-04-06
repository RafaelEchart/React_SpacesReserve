import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import SpaceCard from './SpaceCard';
import '../../assets/stylesheets/spaces.css';

const Spaces = () => {
  const [spaces, setSpaces] = useState([]);
  const fetchSpaces = async () => {
    const { token } = JSON.parse(localStorage.getItem('userInformation'));
    const response = await axios.get('http://localhost:3000/spaces', { headers: { Authorization: token } });
    setSpaces(response.data);
  };

  useEffect(() => {
    fetchSpaces();
  }, []);

  return (
    <div>
      <div className="container_spaces_title">
        <h1 className="spaces-title">SPACES</h1>
        <span>Please select a Space Option</span>
      </div>
      <div style={{ margin: '0 50px' }}>
        {spaces.length === 0
          ? (
            <div>
              <h1>No spaces available</h1>
              <Link to="/new_space">
                <Button type="primary">Create a space</Button>
              </Link>
            </div>
          )
          : (
            <Carousel itemsToShow={3} itemPadding={[5]}>
              {spaces.map((space) => {
                if (space.removed === true) {
                  return null;
                }
                return (
                  <SpaceCard
                    key={space.id}
                    id={space.id}
                    name={space.name.toUpperCase()}
                    description={space.description}
                    price={space.price}
                    image={space.image}
                    hoverable={false}
                  />
                );
              })}
            </Carousel>
          )}
      </div>
    </div>
  );
};

export default Spaces;
