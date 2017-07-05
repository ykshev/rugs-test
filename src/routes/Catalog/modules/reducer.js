import { union, unionBy } from 'lodash/array';
import { sortBy } from 'lodash/collection';


export const setSizeFilter = field => dispatch =>
  dispatch({
    type: 'SET_SIZE_FILTER',
    field,
  });

const buildFilterStr = (filterName, field, getState) => {
  const currentFilter = [ ...getState().catalogRoute.filters[filterName] ];
  return field.value ?
    union(currentFilter, [ field.name ]) :
    currentFilter.filter(el => el !== field.name);
};
const buildFilterObj = (filterName, field, getState) => {
  const currentFilter = [ ...getState().catalogRoute.filters[filterName] ];
  return field.value ?
    unionBy(currentFilter, [ field.name ], 'from') :
    currentFilter.filter(el => el.from !== field.name.from);
};

export const setCountryFilter = field => (dispatch, getState) => dispatch({
  type: 'SET_COUNTRY_FILTER',
  filter: buildFilterStr('country', field, getState),
});

export const setMaterialFilter = field => (dispatch, getState) => dispatch({
  type: 'SET_MATERIAL_FILTER',
  filter: buildFilterStr('material', field, getState),
});

export const setPriceFilter = field => (dispatch, getState) => dispatch({
  type: 'SET_PRICE_FILTER',
  filter: buildFilterObj('price', field, getState),
});

export const setSizeFilterDropdown = isDropdown => dispatch => dispatch({
  type: 'SET_SIZE_FILTER_DROPDOWN',
  isDropdown,
});

export const setCountryFilterDropdown = isDropdown => dispatch => dispatch({
  type: 'SET_COUNTRY_FILTER_DROPDOWN',
  isDropdown,
});

export const setMaterialFilterDropdown = isDropdown => dispatch => dispatch({
  type: 'SET_MATERIAL_FILTER_DROPDOWN',
  isDropdown,
});

export const setPriceFilterDropdown = isDropdown => dispatch => dispatch({
  type: 'SET_PRICE_FILTER_DROPDOWN',
  isDropdown,
});

export const clearFilters = () => dispatch => dispatch({
  type: 'CLEAR_FILTERS',
  filters: initialState.filters,
});

export const actionCreators = {
  setSizeFilter,
  setCountryFilter,
  setMaterialFilter,
  setPriceFilter,
  setSizeFilterDropdown,
  setCountryFilterDropdown,
  setMaterialFilterDropdown,
  setPriceFilterDropdown,
  clearFilters,
};

const ACTION_HANDLERS = {
  SET_SIZE_FILTER: (state, action) => ({
    ...state,
    filters: {
      ...state.filters,
      size: { ...state.filters.size, ...action.field },
    },
  }),
  SET_COUNTRY_FILTER: (state, action) => ({
    ...state,
    filters: {
      ...state.filters,
      country: action.filter,
    },
  }),
  SET_MATERIAL_FILTER: (state, action) => ({
    ...state,
    filters: {
      ...state.filters,
      material: action.filter,
    },
  }),
  SET_PRICE_FILTER: (state, action) => ({
    ...state,
    filters: {
      ...state.filters,
      price: sortBy(action.filter, 'from'),
    },
  }),
  CLEAR_FILTERS: (state, action) => ({
    ...state,
    filters: action.filters,
  }),
  SET_SIZE_FILTER_DROPDOWN: (state, action) => ({
    ...state,
    filters: { ...state.filters, isSizeFilterDropdown: action.isDropdown },
  }),
  SET_COUNTRY_FILTER_DROPDOWN: (state, action) => ({
    ...state,
    filters: { ...state.filters, isCountryFilterDropdown: action.isDropdown },
  }),
  SET_MATERIAL_FILTER_DROPDOWN: (state, action) => ({
    ...state,
    filters: { ...state.filters, isMaterialFilterDropdown: action.isDropdown },
  }),
  SET_PRICE_FILTER_DROPDOWN: (state, action) => ({
    ...state,
    filters: { ...state.filters, isPriceFilterDropdown: action.isDropdown },
  }),
};

const initialState = {
  filters: {
    isSizeFilterDropdown: false,
    isCountryFilterDropdown: false,
    isMaterialFilterDropdown: false,
    isPriceFilterDropdown: false,
    size: {},
    country: [],
    material: [],
    price: [],
  },
};

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
