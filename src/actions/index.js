import { FETCH_QUOTE } from './types';
import jsonp from 'jsonp';

const ROOT_URL = 'https://api.forismatic.com/api/1.0/';

export function fetchQuote() {
  return dispatch => {
    jsonp(
      `${ROOT_URL}?method=getQuote&format=jsonp&lang=en`,
      {
        param: 'jsonp'
      },
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          dispatch({ type: FETCH_QUOTE, payload: data });
        }
      }
    );
  };
}
