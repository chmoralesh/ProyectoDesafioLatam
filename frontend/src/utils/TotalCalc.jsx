const TotalCalc = (cart) => {
  return cart.reduce((acc, item) => acc + item.price * item.count, 0);
};

export default TotalCalc;
