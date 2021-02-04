import CreateForm from "../../Components/CreateForm";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
export default function NewMemberPage() {
  const { memberSlug } = useParams();
  const members = useSelector((state) => state.members);
  console.log(memberSlug);

  const memberEdit = members.find((member) => member.slug === memberSlug);

  const title = memberSlug
    ? `Edit ${memberEdit.firstName} Information`
    : "Create New Member";
  return (
    <div
      className="d-flex justify-content-center"
      style={{ height: "90vh", alignItems: "center", flexDirection: "column" }}
    >
      <h1 className="display-5 mb-3">{title}</h1>
      <CreateForm memberEdit={memberEdit} />
    </div>
  );
}
