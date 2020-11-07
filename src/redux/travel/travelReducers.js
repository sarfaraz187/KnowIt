import { TRAVEL_POSTS, TRAVEL_POSTS_NEXT, TRAVEL_POSTS_PREVIOUS } from './travelTypes';
import { travelContent } from './travelPosts'

const initialState= {
  posts : travelContent,
  leftIndex : 0,
  rightIndex : 1
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRAVEL_POSTS:
      return {
        ...state,
        posts : action.payload,
        rightIndex : state.rightIndex
      }
    case TRAVEL_POSTS_NEXT :
      return {
        ...state,
        leftIndex : action.payload.prevBtn,
        rightIndex : action.payload.nextBtn
      }
    case TRAVEL_POSTS_PREVIOUS :
      return {
        ...state,
        leftIndex : action.payload.prevBtn,
        rightIndex : action.payload.nextBtn
      }
    default : return state
  }
}

export default reducer