import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import SpaceCard from './SpaceCard';
import '../../assets/stylesheets/spaces.css';

const Spaces = () => {
  const [spaces, setSpaces] = useState([]);
  const fetchSpaces = async () => {
    const { token } = JSON.parse(localStorage.getItem('userInformation'));
    const res = await axios.get('http://localhost:3000/spaces', { headers: { Authorization: token } });
    const response = res.data.map((space) => {
      if (space.removed === false) {
        return space;
      }
      return null;
    });
    setSpaces(response);
  };

  useEffect(() => {
    fetchSpaces();
  }, []);

  return (
    <div>
      <h1 className="spaces-title">Spaces</h1>
      <div className="spaces-container">
        <Carousel itemsToShow={3} itemPadding={[5]}>
          {spaces.length === 0
            ? <h1>No spaces available</h1>
            : spaces.map((space) => (
              <SpaceCard
                key={space.id}
                id={space.id}
                name={space.name}
                description={space.description}
                price={space.price}
                image={space.image}
              />
            ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Spaces;
