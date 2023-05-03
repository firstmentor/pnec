import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILED,
  CREATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAILED,
  // CLEAR_ERRORS
} from '../constants/ProductConstant'

import axios from 'axios'

export const GetProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST })
    let link = `/api/GetAllProduct`
    const { data } = await axios.get(link)
    console.log(data)
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message,
    })
  }
}
export const createProduct = (myForm) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PRODUCT_REQUEST })
    let link = `/api/CreateProduct`
    const config = {
      headers: {
        'content-type': 'multiparts/form-data',
      },
    }
    const { data } = await axios.post(link, myForm, config)
    console.log(data)
    dispatch({
      type: CREATE_PRODUCT_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILED,
      payload: error.response.data.message,
    })
  }
}

export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/api/getproductdetail/${id}`)
    // console.log(data)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      payload: error.response.data.message,
    })
  }
}

export const updateProduct = (myForm) => async (dispatch) => {
  try {
      dispatch({ type: UPDATE_PRODUCT_REQUEST })

      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      }
      const { data } = await axios.post('/api/UpdateProducts', myForm, config);
      console.log(data);
      dispatch({
          type: UPDATE_PRODUCT_SUCCESS,
          payload: data.result
      })
  } catch (error) {
      dispatch({
          type: UPDATE_PRODUCT_FAILED,
          payload: error.response.data.message
      });
  }
};

// export const CLEAR_ERRORS = () => async (dispatch) => {
//     dispatch({ type: CLEAR_ERRORS });
// }
