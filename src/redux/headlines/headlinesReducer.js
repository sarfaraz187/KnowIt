import { FETCH_HEADLINES_REQUEST, FETCH_HEADLINES_SUCCESS, FETCH_HEADLINES_FAILURE } from './headlinesTypes'

const initialState = {
  loading: false,
  posts: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HEADLINES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_HEADLINES_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ''
      }
    case FETCH_HEADLINES_FAILURE:
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