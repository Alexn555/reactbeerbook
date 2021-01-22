const defaultState = {
  beerList: [],
  beer: {},
  loading: false,
  errors:{}
};

const beerReducer = (state = defaultState, action = {}) => {
	switch(action.type){

		// all beers
		case 'GET_BEERS_FULFILLED': {
		  return {
			...state,
			beerList: action.payload.data,
			loading: false,
			errors: {}
		  }
        }

		case 'GET_BEERS_PENDING': {
		  return {
			...state,
			loading: true,
			errors: {}
		  }
		}

		case 'GET_BEERS_REJECTED': {
		  return {
			...state,
			loading: false,
			errors: { global: 'not loaded' }
		  }
		}	
		
		
		// one beer (details)
		case 'GET_BEER_DETAILS_FULFILLED': {
		  return {
			...state,
			beer: action.payload.data,
			loading: false,
			errors: {}
		  }
        }

		case 'GET_BEER_DETAILS_PENDING': {
		  return {
			...state,
			loading: true,
			errors: {}
		  }
		}

		case 'GET_BEER_DETAILS_REJECTED': {
		  return {
			...state,
			loading: false,
			errors: { global: 'not loaded' }
		  }
		}	
			

		default:
			return state;
	}

};

export default beerReducer;