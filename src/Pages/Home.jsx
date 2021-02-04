import { useSelector, useDispatch } from "react-redux";
export default function Home() {
  const latest = useSelector((state) => state.latest);

  const latestView = latest.map((news) => (
    <li class="list-inline-item">{news}</li>
  ));

  const msg = <h1 className="display-6">No changes tracked</h1>;
  return (
    <div className="text-center">
      <h1 className="display-3">Welcome Mohammad</h1>
      <ul class="list-inline mt-3 p-2">{latest.length === 0 ? msg : latestView}</ul>
    </div>
  );
}
