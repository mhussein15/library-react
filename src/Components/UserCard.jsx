import UserAvatar from "react-user-avatar";
import { Link } from "react-router-dom";
import useColor from "../Hooks/useColor"
export default function UserCard({ member }) {
  const membership = member.membership;
  const cardColor = useColor(membership)

  return (
    <div className={`card ${cardColor}  shadow h-100 p-2 m-2 `}>
      <div className="card-body ">
        <div className="row no-gutters align-items-center">
          <div className="col mr-2">
            <div className=" mb-0 lead">
              {`${member.firstName} ${member.lastName}`}
            </div>
            <Link
              className="lead text-decoration-none"
              to={`/member/${member.slug}`}
              style={{ fontSize: "15px" }}
            >
              Detail
            </Link>
          </div>
          <div className="col-auto">
            <UserAvatar
              size="100"
              name={member.firstName}
              src={member.imageURL}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
