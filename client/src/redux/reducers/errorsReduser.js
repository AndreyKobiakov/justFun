import { ERRORS } from '../types';

export default function postsReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case ERRORS:
      return payload;
    default:
      return state;
  }
}
