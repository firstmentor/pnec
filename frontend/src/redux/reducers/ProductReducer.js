import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    CLEAR_ERRORS,
    PRODUCT_DETAILS_FAILED,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_REQUEST
  } from '../constants/ProductConstant';


  export const productsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case ALL_PRODUCT_REQUEST:
  
        return {
          loading: true,
          products: [],
        };
      case ALL_PRODUCT_SUCCESS:
        return {
          loading: false,
          products: action.payload.allProducts,
         
        };
  
      //   case ADMIN_PRODUCT_SUCCESS:
      // return {
      //   loading: false,
      //   products: action.payload,
      // };
      case ALL_PRODUCT_FAIL:
        //   case ADMIN_PRODUCT_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };

  export const productDetailReducer = (state = { productDetail: {} }, action) => {
    // console.log("action",action.type)
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
                ...state
            }
        case PRODUCT_DETAILS_SUCCESS:
            return {
                loading: false,
                productDetail: action.payload.productDetail
            }
        case PRODUCT_DETAILS_FAILED:
            return {
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state
    }
}