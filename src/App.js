import Routes from "./Pages/Routes";
import "startbootstrap-sb-admin-2/css/sb-admin-2.min.css";
import SideBar from "./Components/SideBar.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div class="row">
      <div class="col-2">
        <SideBar />
      </div>
      <div class="col-10">
        <Routes />
      </div>
    </div>
  );
}

export default App;
