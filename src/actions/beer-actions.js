import { client } from './';

export function getBeers() {
  return dispatch => {
    dispatch({
      type: 'GET_BEERS',
      payload: client.get('beers')
    })
  }
}

export function getBeerDetails(id = 1) {
  return dispatch => {
    dispatch({
      type: 'GET_BEER_DETAILS',
      payload: client.get(`beers/${id}`)
    })
  }
}
