export const WishReducer = (state, action) => {

  const { wishshoppingCart, wqty } = state;

  let product;
  let updateQty;

  switch (action.type) {
      case "ADD_TO_WISHLIST":
      const checkwish = wishshoppingCart.find((product) => product.id === action.id);
      if (checkwish) {
        return state;
      } else {
        product = action.product;
        product["wqty"] = 1;
        updateQty = wqty + 1;
        return {
          wishshoppingCart: [product, ...wishshoppingCart],
          wqty: updateQty,
        };
      }

      case "DELETE_WISH":
      const filteredwish = wishshoppingCart.filter(
        (product) => product.id !== action.id
      );
      product = action.wcart;
      updateQty = wqty - product.wqty;
      return {
        wishshoppingCart: [...filteredwish],
        wqty: updateQty,
      };

    default:
      return state;
  }
};
export default WishReducer;
