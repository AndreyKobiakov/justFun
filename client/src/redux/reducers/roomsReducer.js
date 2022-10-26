import {
  ADD_ROOM, DELETE_ROOM, SELEKTED_ROOM, SET_ROOMS, UPDATE_ROOM,
} from '../types';

export default function roomsReducer(state = { list: [], selekted: null }, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_ROOM:
      return { ...state, payload };
    case SELEKTED_ROOM:
      return { ...state, selekted: payload };
    case SET_ROOMS:
      return { ...state, list: payload };
    case DELETE_ROOM:
      return state.filter((room) => room.id !== payload); // payload -> id
    case UPDATE_ROOM:
      console.log('reduser', state.selekted.devices, payload);
      return {
        ...state,
        selekted: {
          ...state.selekted,
          devices: state.selekted.devices.map((el) => (el.id === payload
            ? { ...el, status: !el.status } : el)),
        },
      };
    default:
      return state;
  }
}
