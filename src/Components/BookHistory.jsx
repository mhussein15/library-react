import { useSelector } from "react-redux";
import MemberRow from "./MemberRow";
import _ from "lodash";
export default function BookHistory({ borrowed }) {
  const memebrList = [];

  const mainMember = useSelector((state) => state.members);

  mainMember.forEach((member) => {
    borrowed.forEach((el) => {
      if (el === member.id) {
        memebrList.push(member);
      }
    });
  });
  const memberlist = memebrList.map((book) => <MemberRow memberInfo={book} />);
  return (
    <div>
      <div class="row">
        <p className="display-6 lead">History</p>
        <div class="col-sm-12">
          <table
            class="table table-bordered "
            style={{ width: "100%" }}
            role="grid"
          >
            <thead>
              <tr role="row">
                <th style={{ width: "150px" }}>Member ID</th>
                <th>Member Name</th>
              </tr>
            </thead>
            <tbody>{memberlist}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
