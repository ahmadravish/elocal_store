//product actions
export const SET_LOADING = 'SET_LOADING';
export const GET_PRODUCTS = 'GET_PRODUCTS';

//seller actions

export const GET_SELLER = 'GET_SELLER';

//action creators
export const setLoading = () => {
  return { type: SET_LOADING };
};
export const getProducts = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    const response = await fetch(
      'http://35.225.50.138:9091/productDetail?sellerId=12&productId=9&variantId=6'
    );
    const data = await response.json();
    dispatch({ type: GET_PRODUCTS, payload: data });
  };
};

export const getSeller = () => {
  return async function (dispatch) {
    dispatch(setLoading());
    const response = await fetch(
      'http://35.225.50.138:9091/otherSellers?productId=9&variantId=6'
    );
    const data = await response.json();
    dispatch({ type: GET_SELLER, payload: data });
  };
};
