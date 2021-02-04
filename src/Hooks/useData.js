
const useMember = (Slug,dataType,state) => {
  let data;
  if(dataType === "member"){
    data = state.find((member) => member.slug === Slug);
  }
  else if(dataType === "book"){
    data = state.find((book) => book.slug === Slug);
  }
  return data;
};

export default useMember;
