import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'reactstrap';

export default function Room({ room }) {
  return (
    <Row>
      <Col>
        <Link to={`/room/${room.id}`}>{room.room}</Link>
      </Col>
    </Row>
  );
}
