import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSpaces } from '../redux/reducers/spaces';

const Spaces = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSpaces());
  }, []);

  const spaces = useSelector((state) => state.spacesReducer);
  console.log('spacesssssss', spaces);
  return (
    <div>
      <h1>Spaces</h1>
      <ul>
        {spaces.map((space) => (
          <>
            <li key={space.id}>{space.image}</li>
            <li key={space.id}>{space.description}</li>
            <li key={space.id}>{space.price}</li>
            <li key={space.id}>{space.reservation}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Spaces;
