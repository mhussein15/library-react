import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div>
      <ul class="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion ">
        <div
          class="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div class="sidebar-brand-text mx-3">
            <img
              src="https://image.flaticon.com/icons/png/512/225/225932.png"
              style={{ width: "65px" }}
            />
          </div>
        </div>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item active p-2">
          <Link class="nav-link" to="/">
            <i class="fa fa-home" aria-hidden="true"></i>
            <span className="lead">Dashboard</span>
          </Link>
        </li>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item active p-2">
          <Link class="nav-link" to="/members/">
            <i class="fa fa-address-book" aria-hidden="true"></i>
            <span className="lead"> Members</span>
          </Link>
        </li>

        <hr class="sidebar-divider my-0" />

        <li class="nav-item active p-2">
          <Link class="nav-link" to="/books/">
            <i class="fa fa-address-book" aria-hidden="true"></i>
            <span className="lead"> Books List</span>
          </Link>
        </li>

        <hr class="sidebar-divider my-0" />

      </ul>
    </div>
  );
}
