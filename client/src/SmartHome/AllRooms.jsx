import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { allRooms, roomItem } from '../redux/actions/roomsAction';
import Room from './Room';
import RoomItems from './RoomItems';

export default function AllRooms() {
  const dispatch = useDispatch();
  const allRoomsSelektor = useSelector((state) => state.rooms.list);
  const RoomsSelektor = useSelector((state) => state.rooms.selekted);
  const { id } = useParams();
  // console.log('Селетор и id', id, RoomsSelektor);
  useEffect(() => {
    if (!window.initState?.allRooms) {
      dispatch(allRooms());
    } else {
      delete window.initState.allRooms;
    }
  }, []);
  useEffect(() => {
    dispatch(roomItem(id));
  }, [id, allRoomsSelektor]);

  return (
    <Row>
      <Col>
        {allRoomsSelektor?.length ? allRoomsSelektor.map((el) => (
          <Room
            key={el.id}
            room={el}
          />
        )) : 'the base is empty'}
      </Col>
      {RoomsSelektor?.devices ? <RoomItems roomsSelektor={RoomsSelektor} /> : null }
    </Row>
  );
}
