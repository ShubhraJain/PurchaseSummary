export const PromoActionTypes = {
  ADD_DISCOUNT: "ADD_DISCOUNT"
};

export const PromoActions = {
  addDiscount: code => {
    return {
      type: PromoActionTypes.ADD_DISCOUNT,
      payload: code
    };
  }
};
