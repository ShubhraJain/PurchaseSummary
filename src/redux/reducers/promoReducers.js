import { ADD_DISCOUNT } from "../actions/promoActions";

const initialState = {
  discount: 0,
  discountCodes: { DISCOUNT: 10 }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_DISCOUNT": {
      return Object.assign({}, state, {
        discount: state.discountCodes[action.payload] || 0
      });
    }
    default:
      return state;
  }
}
