import React, { useEffect, useState } from 'react';
import {
  Avatar, Table,
} from 'antd';

import './style.css';

const ReservationsInfo = () => {
  const [selectedSpaceInfo, myReservationsInfo] = useState([]);

  const columns = [
    {
      title: 'Space Image',
      dataIndex: 'spaceImage',
      key: 'spaceImage',

      align: 'center',
      render: (spaceImage) => (
        <>
          <Avatar
            key="imagen"
            size={80}
            shape="square"
            src={spaceImage}
          />
        </>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'spaceName',
      key: 'spaceName',
      width: 100,
      align: 'center',
      render: (spaceName) => (
        <div
          key={spaceName}
          style={{ wordBreak: 'normal', fontSize: '15px' }}
        >
          {spaceName}
        </div>
      ),
    },
    {
      title: 'Reservation City',
      dataIndex: 'reservationCity',
      key: 'reservationCity',
      width: 70,
      align: 'center',
    },
    {
      title: 'Reservation Date',
      dataIndex: 'reservationDate',
      key: 'reservationDate',
      width: 70,
      align: 'center',
    },

  ];
  const fetchSpaces = async () => {
    try {
      const { token } = JSON.parse(localStorage.getItem('userInformation'));

      const response = await fetch('http://localhost:3000/reservations', {
        method: 'get',
        headers: {
          'Content-Type': 'application/json',
          Authorization: token,
        },
      });

      const backendResponseData = await response.json();

      const tempData = [];

      backendResponseData.forEach((reservation) => {
        tempData.push({
          key: reservation.id,
          spaceName: reservation.space.name,
          spaceImage: reservation.space.image,
          reservationCity: reservation.city,
          reservationDate: reservation.date,

        });
      });

      myReservationsInfo(tempData);
      console.log(backendResponseData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSpaces();
  }, []);

  return (
    <>
      {selectedSpaceInfo.length
        ? (
          <>
            <div className="myreservation_container">
              <div className="table_container">

                <Table columns={columns} dataSource={selectedSpaceInfo} pagination={false} />
              </div>
            </div>
          </>
        )
        : <span>There is no data</span>}
    </>
  );
};

export default ReservationsInfo;
