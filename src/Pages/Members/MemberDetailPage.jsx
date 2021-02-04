import { useParams,Link } from "react-router-dom";
import useData from "../../Hooks/useData";
import MemberBooks from "../../Components/MemberBooks";
import useColorTest from "../../Hooks/useColorText";
import useColor from "../../Hooks/useColor";
import useBooksCount from "../../Hooks/useBooksCount";
import { useSelector } from "react-redux";

export default function MemberDetailPage() {
  const { memberSlug } = useParams();
  const members = useSelector(state => state.members)
  const member = useData(memberSlug,"member",members);

  return (
    <div>
      <div
        class={`card mb-3 ${useColor(member.membership)}`}
        style={{ maxWidth: "50%" }}
      >
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={member.imageURL}
              alt={member.firstName}
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">
                {`${member.firstName} ${member.lastName}`}
              </h5>
              <p class="card-text">
                <span className={`${useColorTest(member.membership)}`}>
                  {member.membership.charAt(0).toUpperCase() +
                    member.membership.slice(1)}
                </span>
              </p>
              <p className="card-text">
                {` ${member.currentlyBorrowedBooks.length}/${useBooksCount(
                  member.membership
                ).toString()}`}
              </p>
              <p className="card-text">
                <Link className="lead text-decoration-none" to={`/member/${member.slug}/edit`}>
                  Edit
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <MemberBooks books={member.currentlyBorrowedBooks} />
    </div>
  );
}
