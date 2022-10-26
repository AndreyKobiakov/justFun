import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { updateRooms } from '../redux/actions/roomsAction';

export default function RoomItems({ roomsSelektor }) {
  const dispatch = useDispatch();
  const room = roomsSelektor?.devices?.map((el) => el);
  function onOffHandler(id) {
    dispatch(updateRooms(id));
  }

  return (
    <div>
      {room.map((el) => (
        <div className="room-item">
          devices:
          {' '}
          {el.device}
          <p>
            {el.status === true ? 'status : включено' : 'status : выключено'}
          </p>
          {el.status === false
            ? (
              <img
                src={`http://localhost:3000${el.offPicture}`}
                style={{
                  height: '25vh',
                  width: 'auto',
                }}
              />
            )
            : (
              <img
                src={`http://localhost:3000${el.onPicture}`}
                style={{
                  height: '20vh',
                  width: 'auto',
                }}
              />
            )}
          <Button onClick={() => onOffHandler(el.id)}>on/off</Button>
        </div>
      ))}
    </div>
  );
}
