import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Space from './space';
import './style.css';

const Spaces = () => {
  const [spaces, setSpaces] = useState([]);

  const getSpaces = async () => {
    const { token } = JSON.parse(localStorage.getItem('userInformation'));
    const response = await fetch('http://localhost:3000/spaces', { headers: { Authorization: token } });
    const data = await response.json();
    setSpaces(data);
  };

  useEffect(() => {
    getSpaces();
  }, []);

  return (
    <div className="spaces">
      <h2>Space managment</h2>
      <div className="spaces-container">
        {spaces.map((target) => (
          <Space space={target} key={uniqid()} />
        ))}
      </div>

    </div>
  );
};

export default Spaces;