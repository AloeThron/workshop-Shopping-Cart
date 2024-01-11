export default function reducer(state, action) {
  if (action.type === "remove_item") {
    return {
      ...state,
      cart: state.cart.filter((p) => p.name !== action.payload),
    };
  }
  if (action.type === "quantity") {
    let newCart = state.cart
      .map((p) => {
        if (p.id === action.payload.id) {
          if (action.payload.status === "increment") {
            return { ...p, num: p.num + 1 };
          }
          if (action.payload.status === "decrement") {
            return { ...p, num: p.num - 1 };
          }
        }
        return p;
      })
      .filter((p) => p.num !== 0);
    return { ...state, cart: newCart };
  }
  if (action.type === "calculate") {
    const { total, amount } = state.cart.reduce(
      (cartTotal, item) => {
        const { price, num } = item;
        const itemTotal = price * num;
        cartTotal.total += itemTotal;
        cartTotal.amount += num;
        return cartTotal;
      },
      { total: 0, amount: 0 }
    );
    return { ...state, total, amount };
  }
}
