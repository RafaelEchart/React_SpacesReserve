import React, { useState } from 'react';
import { message } from 'antd';
import { useParams } from 'react-router-dom';

const ReservationForm = () => {
  const [reservationData, setReservationData] = useState({
    city: '',
    date: '',
  });

  const { details } = useParams();
  const handleInput = (e, field) => {
    const input = e.target.value;
    switch (field) {
      case 'city':
        setReservationData({ ...reservationData, city: input });
        break;

      case 'date':
        setReservationData({ ...reservationData, date: input });
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const { token, id } = JSON.parse(localStorage.getItem('userInformation'));
    try {
      fetch(`http://localhost:3000/spaces/${details}/reservations`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
        body: JSON.stringify({
          space: {
            city: reservationData.city,
            date: reservationData.date,
            space_id: details,
            user_id: id,
          },
        }),
      });
      message.success('Space successfully reserved!');
    } catch (error) {
      message.error(error);
    }
  };

  return (
    <section>
      <div className="login_container">
        <div className="session">
          <div action="" className="log-in add-space" autoComplete="off">
            <h4 className="login_title">Add Reservation</h4>

            <input
              placeholder="Reservation Name"
              className="login_input space_input"
              type="text"
              name="cityName"
              onChange={(e) => handleInput(e, 'city')}
              id="city"
              autoComplete="off"
            />

            <input
              placeholder="Date"
              className="login_input space_input"
              type="date"
              name="date"
              onChange={(e) => handleInput(e, 'date')}
              id="date"
              autoComplete="off"
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="login_button"
            >
              Add Reservation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationForm;
