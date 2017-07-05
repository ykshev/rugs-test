const getProducts = () => dispatch =>
  dispatch({
    type: 'GET_PRODUCTS',
    url: '/595a992d0f00006b039fe487',
  });

export const actionCreators = {
  getProducts,
};

const ACTION_HANDLERS = {
  GET_PRODUCTS_SUCCESS: (state, action) => ({ ...state, items: action.responseJSON.rugs }),
};

const initialState = {
  items: [],
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
