import {
  
    CLEAR_ERRORS,
    CONTACT_USER_REQUEST,
    CONTACT_USER_SUCCESS,
    CONTACT_USER_FAIL,
  
} from '../constants/ContactConstant'
import axios from 'axios';

export const contactRegister = (myForm) => async (dispatch) => {
    try {
        dispatch({ type: CONTACT_USER_REQUEST })

        const config = {
            headers: {
                'content-type': 'multiparts/form-data'
            }
        }
        const { data } = await axios.post('/api/contact', myForm, config);
        console.log(data);
        dispatch({
            type: CONTACT_USER_SUCCESS,
            payload: data.result
        })
    } catch (error) {
        dispatch({
            type: CONTACT_USER_FAIL,
            payload: error.response.data.message
        });
    }
    
}
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};

    
 