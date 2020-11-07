import { FETCH_TECHCRUNCH_REQUEST, FETCH_TECHCRUNCH_SUCCESS, FETCH_TECHCRUNCH_FAILURE } from './techCrunchTypes';

const initialState = {
  loading: false,
  posts: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TECHCRUNCH_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_TECHCRUNCH_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ''
      }
    case FETCH_TECHCRUNCH_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer