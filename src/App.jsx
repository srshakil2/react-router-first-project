import { NavLink, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex gap-10 justify-center">
        <div>
          <NavLink to={"/"}>home btn</NavLink>
        </div>
        <div>
          <NavLink to={"/book"}>book btn</NavLink>
        </div>
        <div>
          <NavLink to={"/lists"}>lists btn</NavLink>
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default App;
