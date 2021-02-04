import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
export default function TakeBookForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  const members = useSelector((state) => state.members);

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="search" name="search" ref={register} />

      <input type="submit" />
    </form>
  );
}
