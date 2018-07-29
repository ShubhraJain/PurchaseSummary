export const PromoActionTypes = {
  ADD_DISCOUNT: "ADD_DISCOUNT"
};

export const PromoActions = {
  addDiscount: code => {
    return {
      type: "ADD_DISCOUNT",
      payload: code
    };
  }
};
