import axios from '../../../node_modules/axios'
import { FETCH_TECHCRUNCH_REQUEST, FETCH_TECHCRUNCH_SUCCESS, FETCH_TECHCRUNCH_FAILURE } from './techCrunchTypes';

export const fetchTechCrunch = (query) => {
  return (dispatch) => {
    let apiKey = JSON.parse(localStorage.getItem('document'));
    dispatch(fetchTechCrunchRequest());
    axios.get(`https://newsapi.org/v2/everything?${query}&${apiKey}`).then(response => {
      // response.data is the headlines
      const techCrunch = response.data.articles;
      // console.log({techCrunch});
      dispatch(fetchTechCrunchSuccess(techCrunch));
    }).catch(error => {
      // error.message is the error message
      dispatch(fetchTechCrunchFailure(error.message));
    })
  }
}

export const fetchTechCrunchRequest = () => {
  return {
    type : FETCH_TECHCRUNCH_REQUEST
  }
}

export const fetchTechCrunchSuccess = techCrunch => {
  return {
    type : FETCH_TECHCRUNCH_SUCCESS,
    payload : techCrunch
  }
}

export const fetchTechCrunchFailure = err => {
  return {
    type : FETCH_TECHCRUNCH_FAILURE,
    payload : err
  }
}