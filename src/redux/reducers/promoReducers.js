import { PromoActionTypes } from "../actions/promoActions";

const initialState = {
  discount: 0,
  discountCodes: { discount: 10 }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PromoActionTypes.ADD_DISCOUNT: {
      return Object.assign({}, state, {
        discount: state.discountCodes[action.payload.toLowerCase()] || 0
      });
    }
    default:
      return state;
  }
}
