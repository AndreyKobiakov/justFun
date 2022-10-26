import axios from 'axios';
import {
  ADD_ROOM, DELETE_ROOM, SELEKTED_ROOM, SET_ROOMS, UPDATE_ROOM,
} from '../types';

export const addRoom = (payload) => ({ type: ADD_ROOM, payload });
export const deleteRoom = (payload) => ({ type: DELETE_ROOM, payload });
export const setRooms = (payload) => ({ type: SET_ROOMS, payload });
export const updateRooms = (payload) => ({ type: UPDATE_ROOM, payload });
export const setRoomItem = (payload) => ({ type: SELEKTED_ROOM, payload });

export const allRooms = () => (dispatch) => {
  axios.get('/rooms')
    .then((res) => dispatch(setRooms(res.data)))
    .catch(console.log);
};
export const roomItem = (id) => (dispatch) => {
  axios.get(`/rooms/${id}`)
    .then((res) => dispatch(setRoomItem(res.data)))
    .catch(console.log);
};
