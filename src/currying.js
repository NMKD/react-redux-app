import React from "react";

const Currying = () => {
  return (
    <>
      <div className="card">
        <h5 className="card-header">Каррирование</h5>
        <div className="card-body">
          <h5 className="card-title">Замыкания</h5>

          <strong>Каррирование или карринг (currying) </strong>
          <p>
            в функциональном программирование — это преобразование функции с
            множеством аргументов в набор вложенных функций с одним аргументом.
            При вызове каррированной функции с передачей ей одного аргумента,
            она возвращает новую функцию, которая ожидает поступления следующего
            аргумента.
          </p>

          <div className="my-3">
            <strong>Узнать подробнее:</strong>{" "}
          </div>

          <ul>
            <li>
              <a href="https://www.youtube.com/watch?v=pahO5XjnfLA">
                Что такое замыкания{" "}
              </a>
            </li>
            <li>
              <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures">
                Статья на MDN{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Currying;
