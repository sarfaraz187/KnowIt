import axios from '../../../node_modules/axios'
import { FETCH_TECHNOLOGY_REQUEST, FETCH_TECHNOLOGY_SUCCESS, FETCH_TECHNOLOGY_FAILURE } from './technologyTypes';

export const fetchTechnology = (query) => {
  return (dispatch) => {
    let apiKey = JSON.parse(localStorage.getItem('document'));
    dispatch(fetchTechnologyRequest());
    axios.get(`https://newsapi.org/v2/top-headlines?${query}&${apiKey}`).then(response => {
      // response.data is the headlines
      const technology = response.data.articles;
    //   console.log(technology);
      dispatch(fetchTechnologySuccess(technology));
    }).catch(error => {
      // error.message is the error message
      dispatch(fetchTechnologyFailure(error.message));
    })
  }
}

export const fetchTechnologyRequest = () => {
  return {
    type : FETCH_TECHNOLOGY_REQUEST
  }
}

export const fetchTechnologySuccess = headlines => {
  return {
    type : FETCH_TECHNOLOGY_SUCCESS,
    payload : headlines
  }
}

export const fetchTechnologyFailure = err => {
  return {
    type : FETCH_TECHNOLOGY_FAILURE,
    payload : err
  }
}