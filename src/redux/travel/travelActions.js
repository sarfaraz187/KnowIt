import { TRAVEL_POSTS, TRAVEL_POSTS_NEXT, TRAVEL_POSTS_PREVIOUS } from './travelTypes';
import { travelContent } from './travelPosts'

export const travelPosts = () => {
  return {
    type: TRAVEL_POSTS,
    payload: travelContent
  }
}

export const travelPostNext = ({prevBtn, nextBtn}) => {
  nextBtn = (nextBtn == 4) ? 0 : nextBtn + 1
  prevBtn = (prevBtn == 4) ? 0 : prevBtn + 1
  return {
    type : TRAVEL_POSTS_NEXT,
    payload : { prevBtn , nextBtn }
  }
}

export const travelPostPrevious = ({prevBtn, nextBtn}) => {
  nextBtn = (nextBtn == 0) ? 4 : nextBtn - 1
  prevBtn = (prevBtn == 0) ? 4 : prevBtn - 1
  return {
    type : TRAVEL_POSTS_PREVIOUS,
    payload : { prevBtn , nextBtn }
  }
}