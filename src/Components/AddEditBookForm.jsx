import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addBook, updateBook } from "../store/actions";

export default function AddEditBookForm({ bookEdit }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const bookLastID = useSelector((state) => state.bookLastID);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      author: bookEdit ? bookEdit.author : "",
      title: bookEdit ? bookEdit.title : "",
      genre: bookEdit ? bookEdit.genre : [],
      available: bookEdit ? bookEdit.available : true,
      imageURL: bookEdit ? bookEdit.imageURL : "",
      borrowedBy:bookEdit?bookEdit.borrowedBy:[]
    },
  });
  const onSubmit = (data) => {
    if (bookEdit) {
      dispatch(updateBook({ ...data, id: bookEdit.id }));
    } else {
      dispatch(addBook({ ...data, id: bookLastID + 1 ,borrowedBy:[]}));
      reset();
    }
    console.log(data);
    history.push("/books/");
  };
  return (
    <form
      class="row g-2 p-3"
      style={{ width: "50%" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        class="form-control"
        placeholder="Author"
        name="author"
        ref={register({ required: true })}
        required
      />
      <input
        class="form-control"
        type="text"
        placeholder="Title"
        name="title"
        ref={register}
        required
      />
      <div class="form-check form-switch">
        <input
          name="available"
          type="checkbox"
          ref={register}
          class="form-check-input"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Available
        </label>
      </div>

      <div class="form-floating">
        <textarea
          name="genre"
          class="form-control"
          style={{ height: "150px", fontSize: "20px" }}
          ref={register}
        />
        <label for="floatingTextarea2">Enter Genre sperate by ;</label>
      </div>
      <input
        class="form-control"
        type="url"
        placeholder="ImageURL"
        name="imageURL"
        ref={register}
      />

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
