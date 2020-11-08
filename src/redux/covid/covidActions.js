import axios from '../../../node_modules/axios'
import { FETCH_COVID_DATA, FETCH_COVID_DATA_SUCCESS, FETCH_COVID_DATA_FAILURE } from "./covidTypes"

export const covidData = () => {
  return (dispatch) => {
    dispatch(fetchCovidData());
    axios.get('https://api.covid19api.com/summary').then(response => {
      dispatch(sucessResponse(response));
    }).catch(error => { 
      dispatch(failureResponse(error.message));
    });
  }
}

export const fetchCovidData = () => {
  return {
    type: FETCH_COVID_DATA
  }
} 

export const sucessResponse = (response) => {
  return  {
    type : FETCH_COVID_DATA_SUCCESS,
    payload : response
  }
}

export const failureResponse = (err) => {
  return  {
    type : FETCH_COVID_DATA_FAILURE,
    payload : err
  }
}