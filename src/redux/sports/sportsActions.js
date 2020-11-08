import axios from '../../../node_modules/axios'
import { FETCH_SPORTS_REQUEST, FETCH_SPORTS_SUCCESS, FETCH_SPORTS_FAILURE, SPORT_POSTS_NEXT, SPORT_POSTS_PREVIOUS } from './sportsTypes';

export const fetchSportsNews = (query) => {
  return (dispatch) => {
    let apiKey = JSON.parse(localStorage.getItem('document'));
    dispatch(fetchSportsRequest());
    axios.get(`https://newsapi.org/v2/everything?${query}&${apiKey}`).then(response => {
      const sports = response.data.articles;
      dispatch(fetchSportsSuccess(sports));
    }).catch(error => {
      dispatch(fetchSportsFailure(error.message));
    });
  }
}

export const fetchSportsRequest = () => {
  return {
    type : FETCH_SPORTS_REQUEST
  }
}

export const fetchSportsSuccess = headlines => {
  return {
    type : FETCH_SPORTS_SUCCESS,
    payload : headlines
  }
}

export const fetchSportsFailure = err => {
  return {
    type : FETCH_SPORTS_FAILURE,
    payload : err
  }
}

export const nextPost = index => {
  return {
    type : SPORT_POSTS_NEXT,
    payload : index
  }
}

export const previousPost = index => {
  return {
    type : SPORT_POSTS_PREVIOUS,
    payload : index
  }
}