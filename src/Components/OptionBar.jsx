import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
export default function OptionBar({ setSearch }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => setSearch(data.search);
  const { pathname } = useLocation();
    return (
    <div className="row mb-3 p-2 ">
      <form className="col-3" style={{ width: "40%" }}>
        <div className="input-group ">
          <input
            type="search"
            name="search"
            ref={register}
            className="form-control bg-light border-0 small"
            placeholder="Search for..."
            aria-label="Search"
            onChange={handleSubmit(onSubmit)}
          />
        </div>
      </form>

      <div className="col-6 mx-2">
        <Link to={`${pathname}add`}>
          <button type="button" class="btn btn-success mx-1 btn-sm float-end">
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}
