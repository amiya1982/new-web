export const CartReducer = (state, action) => {
  const { shoppingCart, totalPrice, qty } = state;
  let product;
  let index;
  let updatePrice;
  let updateQty;
  switch (action.type) {
    case "ADD_TO_CART":
      const check = shoppingCart.find((product) => product.id === action.id);
      if (check) {
        return state;
      } else {
        product = action.product;
        product["qty"] = 1;
        updateQty = qty + 1;
        updatePrice = totalPrice + product.price;
        return {
          shoppingCart: [product, ...shoppingCart],
          totalPrice: updatePrice,
          qty: updateQty,
        };
      }     

    case "INCREMENT":
      product = action.cart;
      product.qty = product.qty + 1;
      updateQty = qty + 1;
      updatePrice = totalPrice + product.price;
      index = shoppingCart.findIndex((cart) => cart.id === action.id);
      shoppingCart[index] = product;
      return {
        shoppingCart: [...shoppingCart],
        totalPrice: updatePrice,
        qty: updateQty,
      };
      
    case "DECREMENT":
      product = action.cart;
      if (product.qty > 1) {
        product.qty = product.qty - 1;
        updateQty = qty - 1;
        updatePrice = totalPrice - product.price;
        index = shoppingCart.findIndex((cart) => cart.id === action.id);
        shoppingCart[index] = product;
        return {
          shoppingCart: [...shoppingCart],
          totalPrice: updatePrice,
          qty: updateQty,
        };
      } else {
        return state;
      }

    case "DELETE":
      const filtered = shoppingCart.filter(
        (product) => product.id !== action.id
      );
      product = action.cart;
      updateQty = qty - product.qty;
      updatePrice = totalPrice - product.price * product.qty;
      return {
        shoppingCart: [...filtered],
        totalPrice: updatePrice,
        qty: updateQty,
      };

    default:
      return state;
  }
};
export default CartReducer;
