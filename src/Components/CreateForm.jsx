import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addMember, updateMember } from "../store/actions";
export default function CreateForm({ memberEdit }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const userLastID = useSelector((state) => state.userLastID);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: memberEdit ? memberEdit.firstName : "",
      lastName: memberEdit ? memberEdit.lastName : "",
      membership: memberEdit ? memberEdit.membership : "",
      imageURL: memberEdit ? memberEdit.imageURL : "",
    },
  });
  const onSubmit = (data) => {
    if (memberEdit) {
      dispatch(updateMember({ ...data, id: memberEdit.id }));
    } else {
      dispatch(addMember({ ...data, id: userLastID + 1 }));
      reset();
    }
    history.push("/members/");
  };

  return (
    <form
      class="row g-2 p-3"
      onSubmit={handleSubmit(onSubmit)}
      style={{ width: "50%" }}
    >
      <div className="col-12">
        <input
          required
          class="form-control"
          type="text"
          placeholder="First Name"
          name="firstName"
          ref={register({ required: true })}
        />
      </div>
      <div className="col-12">
        <input
          required
          class="form-control"
          type="text"
          placeholder="Last Name"
          name="lastName"
          ref={register({ required: true })}
        />
      </div>
      <div class="col-12">
        <select
          required
          class="form-select"
          name="membership"
          ref={register({ required: true })}
        >
          <option value="Silver">Silver</option>
          <option value="Gold">Gold</option>
          <option value="Platinum">Platinum</option>
        </select>
      </div>
      <div className="col-12">
        <input
          class="form-control"
          type="url"
          placeholder="Image"
          name="imageURL"
          ref={register({ required: false })}
        />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
