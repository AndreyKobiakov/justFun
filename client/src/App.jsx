import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import AllRooms from './SmartHome/AllRooms';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AllRooms />} />
        <Route path="/room/:id" element={<AllRooms />} />
      </Routes>
    </Container>
  );
}

export default App;
