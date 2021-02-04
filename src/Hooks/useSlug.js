import slugify from "slugify";

const useSlug = (firstName, lastName) => {
   const res =  slugify(`${firstName}${lastName}`)
   return res;
};


export default useSlug;