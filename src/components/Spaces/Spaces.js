import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
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
    <div className="spaces-container">
      <h1 className="spaces-title">Spaces</h1>
      <Carousel itemsToShow={3} itemPadding={[5]}>
        {spaces.map((space) => (
          <SpaceCard
            key={space.id}
            name={space.name}
            description={space.description}
            price={space.price}
            image={space.image}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Spaces;
