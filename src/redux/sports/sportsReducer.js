import { FETCH_SPORTS_REQUEST, FETCH_SPORTS_SUCCESS, FETCH_SPORTS_FAILURE, SPORT_POSTS_NEXT, SPORT_POSTS_PREVIOUS } from './sportsTypes'

const initialState = {
  loading: false,
  posts: [],
  index : 0,
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPORTS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_SPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload,
        error: ''
      }
    case FETCH_SPORTS_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error: action.payload
      }
    case SPORT_POSTS_NEXT:
      return {
        ...state,
        index : state.index + 1
      }
    case SPORT_POSTS_PREVIOUS:
      return {
        ...state,
        index : state.index - 1
      }
    default: return state
  }
}

export default reducer