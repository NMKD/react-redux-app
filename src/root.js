import { Outlet } from "react-router-dom";
import Navs from "./navbar";

export default function Root() {
  return (
    <>
      <Navs />
      {/* all the other elements */}
      <div className="container">
        <h1 className="text-center mb-5">Redux</h1>
        <Outlet />
      </div>
    </>
  );
}
