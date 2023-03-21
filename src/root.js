/* eslint-disable react/jsx-no-target-blank */
import { Outlet } from "react-router-dom";
import Navs from "./navbar";

export default function Root() {
  return (
    <>
      <Navs />
      {/* all the other elements */}
      <div className="container">
        <h1 className="text-center mb-2">Redux</h1>
        <p className="text-center mb-3">
          {" "}
          <a
            href="https://tproger.ru/translations/redux-for-beginners/"
            target="_blank"
          >
            читать...
          </a>
        </p>
        <Outlet />
      </div>
    </>
  );
}
