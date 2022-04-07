import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import { Button, message } from 'antd';
import SpaceCard from './SpaceCard';
import '../../assets/stylesheets/spaces.css';
import SpinLoading from '../Spinner';

const Spaces = () => {
  const [slideShowToShow, setSlideShowToShow] = useState(3);
  const [spaces, setSpaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchSpaces = async () => {
    try {
      setIsLoading(true);
      const { token } = JSON.parse(localStorage.getItem('userInformation'));
      const response = await axios.get('http://localhost:3000/spaces', { headers: { Authorization: token } });
      setSpaces(response.data);
      setIsLoading(false);
    } catch (err) {
      message.error('Error fetching the data, try again!');
    }
  };

  const updateDimensions = () => {
    console.log(window.innerWidth);

    if (window.innerWidth > 1120) {
      setSlideShowToShow(3);
    }

    if (window.innerWidth < 1120 && window.innerWidth > 795) {
      setSlideShowToShow(2);
    }

    if (window.innerWidth < 795) {
      setSlideShowToShow(1);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    fetchSpaces();
  }, []);

  return (
    <>
      {isLoading ? <SpinLoading /> : null}
      {spaces.length && !isLoading
        ? (
          <div>
            <div className="container_spaces_title">
              <h1 className="spaces-title">SPACES</h1>
              <span>Please select a Space Option</span>
            </div>
            <div className="container_spaces_width_ok">
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
                  <Carousel itemsToShow={slideShowToShow} itemPadding={[5]}>
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
        ) : null}
    </>
  );
};

export default Spaces;
