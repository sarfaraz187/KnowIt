import { FETCH_COVID_DATA, FETCH_COVID_DATA_SUCCESS, FETCH_COVID_DATA_FAILURE } from "./covidTypes"

const initialState = {
  loading: false,
  posts: [],
  global : '',
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_DATA:
      return {
        ...state, 
        loading: true
      }
    case FETCH_COVID_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        error : '',
        posts : action.payload.data.Countries,
        global : action.payload.data.Global
      }
    case FETCH_COVID_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        posts: [],
        error : action.payload
      }
    default :
      return state
  }
}

export default reducer