import fetch from 'isomorphic-fetch';
import { API_ROOT } from 'cfg';


const callAPI = ({ dispatch, getState }) => next => (action) => {
  const {
    type,
    filter,
    url,
    shouldCallAPI = () => true,
    payload = {},
  } = action;

  if(!url) {
    return next(action);
  }

  if(!shouldCallAPI(getState())) {
    return false;
  }

  const typeRequest = `${ type }_REQUEST`;
  const typeSuccess = `${ type }_SUCCESS`;
  const typeFail = `${ type }_FAIL`;

  dispatch({
    type: typeRequest,
    payload,
  });

  return new Promise((resolve, reject) => { 
    fetch(`${ API_ROOT }${ url }?filter=${ JSON.stringify(filter) }`)
    .then(response => response.json())
    .then((json) => {
      if(!json.error) {
        dispatch({
          type: typeSuccess,
          payload,
          responseJSON: json,
        });
        resolve(json);
      } else {
        dispatch({
          type: typeFail,
          payload,
          responseJSON: json.error,
        });
        reject(json);
        throw new Error(json.error.name || json.error.status);
      }
    });
  });
};

export default callAPI;
