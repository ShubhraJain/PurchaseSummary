import reducer from "./reducers/promoReducers";
import { createStore } from "redux";
// import { PromoActions } from "./actions/promoActions";
const PurchaseSummaryStore = createStore(reducer);
export default PurchaseSummaryStore;

// console.log("store: ", store.getState());
// console.log(addDiscount);
// // store.dispatch(PromoActions.addDiscount());
// console.log("store: ", store.getState());
