import { FETCH_TECHNOLOGY_REQUEST, FETCH_TECHNOLOGY_SUCCESS, FETCH_TECHNOLOGY_FAILURE } from './technologyTypes'

const initialState = {
  loading: false,
  posts: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TECHNOLOGY_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_TECHNOLOGY_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ''
      }
    case FETCH_TECHNOLOGY_FAILURE:
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