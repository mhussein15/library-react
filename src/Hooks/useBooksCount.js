const useBooksCount = (membership) => {
  let max = 0;
  if (membership.toLowerCase() === "silver") {
    max = 2;
  } else if (membership.toLowerCase() === "gold") {
    max = 3;
  } else if (membership.toLowerCase() === "platinum") {
    max = 5;
  }

  return max;
};


export default useBooksCount;