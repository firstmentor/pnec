import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
import { productDetailReducer, productsReducer } from './reducers/ProductReducer';
import { authReducer } from "./reducers/UserReducer";
import { CartReducer} from "./reducers/CartReducer"; 
import { ContactReducer} from "./reducers/ContactReducer";
import { myOrdersReducer, newOrderReducer } from './reducers/OrderReducer';

const reducer = combineReducers({
    p:productsReducer,
    pdetail: productDetailReducer,
    auth:authReducer,
    cart:CartReducer,
    contact:ContactReducer,
    newOrder:newOrderReducer,
    myOrders:myOrdersReducer
});

let intialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

//middleware thunk

const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
