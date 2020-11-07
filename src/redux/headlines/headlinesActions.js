import axios from '../../../node_modules/axios'
import { FETCH_HEADLINES_REQUEST, FETCH_HEADLINES_SUCCESS, FETCH_HEADLINES_FAILURE} from './headlinesTypes'

export const fetchHeadlines = (query) => {
  return (dispatch) => {
    let apiKey = JSON.parse(localStorage.getItem('document'));
    dispatch(fetchHeadlinesRequest());
    axios.get(`https://newsapi.org/v2/top-headlines?${query}&${apiKey}`).then(response => {
      // response.data is the headlines
      const headlines = response.data.articles;
      console.log(headlines);
      dispatch(fetchHeadlinesSuccess(headlines));
    }).catch(error => {
      // error.message is the error message
      dispatch(fetchHeadlinesFailure(error.message));
    })
  }
}

export const fetchHeadlinesRequest = () => {
  return {
    type : FETCH_HEADLINES_REQUEST
  }
}

export const fetchHeadlinesSuccess = headlines => {
  return {
    type : FETCH_HEADLINES_SUCCESS,
    payload : headlines
  }
}

export const fetchHeadlinesFailure = err => {
  return {
    type : FETCH_HEADLINES_FAILURE,
    payload : err
  }
}