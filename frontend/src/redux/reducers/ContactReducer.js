import {
  CLEAR_ERRORS,
  CONTACT_USER_REQUEST,
  CONTACT_USER_SUCCESS,
  CONTACT_USER_FAIL,
} from '../constants/ContactConstant'

export const ContactReducer = (state = { contact: {} }, action) => {
  //console.log(action.payload)
  switch (action.type) {
    case CONTACT_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      }

    case CONTACT_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
      }

    case CONTACT_USER_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      }
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      }
    default:
      return state
  }
}
