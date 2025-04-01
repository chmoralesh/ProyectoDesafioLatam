// const miles = (number) => {
//   if (isNaN(number)) return number;
//   return Number(number).toLocaleString("es-ES");
// };

// export default miles;
const miles = (number) => {
  if (isNaN(number)) return number;
  return number.toLocaleString("es-ES", { useGrouping: true });
};

export default miles;
