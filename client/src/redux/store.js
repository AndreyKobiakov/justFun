import { configureStore } from '@reduxjs/toolkit';
import roomsReducer from './reducers/roomsReducer';
import errorsReduser from './reducers/errorsReduser';

export default configureStore({
  reducer: {
    rooms: roomsReducer,
    errors: errorsReduser,
  },
});
