import CreateForm from "../../Components/CreateForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function EditMemberPage() {
  const { memberSlug } = useParams();
  const members = useSelector((state) => state.members);

  
  return (
    <div
      className="d-flex justify-content-center"
      style={{ height: "90vh", alignItems: "center", flexDirection: "column" }}
    >
      <h1 className="display-5 mb-3">Edit New Member</h1>
      <CreateForm />
    </div>
  );
}
