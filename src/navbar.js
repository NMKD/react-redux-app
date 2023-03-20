import React from "react";

const Navs = () => {
  return (
    <ul className="nav justify-content-center p-3 mb-3">
      <li className="nav-item">
        <a className="nav-link" href={"/composition"}>
          Композиция функций
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={"/currying"}>
          Каррирование
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={"/cleanfunction"}>
          Чистые функции (pure functions)
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href={"/store"}>
          Store
        </a>
      </li>
    </ul>
  );
};

export default Navs;
