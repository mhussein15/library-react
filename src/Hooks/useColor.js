const useColor = (membership) => {
  let cardColor = "";
  if (membership.toLowerCase() === "silver") {
    cardColor = "border-left-secondary border-bottom-secondary";
  } else if (membership.toLowerCase() === "gold") {
    cardColor = "border-left-warning border-bottom-warning";
  } else if (membership.toLowerCase() === "platinum") {
    cardColor = "border-left-info border-bottom-info";
  }
  return cardColor;
};

export default useColor;
