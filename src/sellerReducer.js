import { SET_LOADING, GET_SELLER } from './action';

const defaultState = {
  loading: false,
  seller: {},
};

export default function reducer(state = defaultState, action) {
  if (action.type === SET_LOADING) return { ...state, loading: true };
  if (action.type === GET_SELLER)
    return { ...state, loading: false, seller: action.payload };
  return state;
}
