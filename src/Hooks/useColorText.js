const useColorTest = (membership) => {
    let cardColor = "";
    if (membership.toLowerCase() === "silver") {
      cardColor = "text-secondary";
    } else if (membership.toLowerCase() === "gold") {
      cardColor = "text-warning";
    } else if (membership.toLowerCase() === "platinum") {
      cardColor = "text-info";
    }
    return cardColor;
  };
  
  export default useColorTest;
  