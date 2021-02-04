import useSearch from "../../Hooks/useSearch";
import UserCard from "../../Components/UserCard";
import OptionBar from "../../Components/OptionBar";
import { useState } from "react";
import { useSelector } from "react-redux";
export default function MembersPage() {
  const [search, setSearch] = useState("");
  const state = useSelector((state) => state.members);
  const memberList = useSearch(search, "members", state).map((member) => (
    <UserCard member={member} />
  ));

  return (
    <div className="">
      <OptionBar setSearch={setSearch} />
      <div className="row row-cols-4 ">{memberList}</div>
    </div>
  );
}
