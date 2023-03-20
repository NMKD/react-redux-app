import React from "react";
// import { compose, pipe } from "lodash/fp";

const CleanFn = () => {
  return (
    <>
      <div className="card">
        <h5 className="card-header">Чистые функции</h5>
        <div className="card-body">
          <h5 className="card-title">Pure functions</h5>
          <strong>Чистые функции (pure functions) </strong>{" "}
          <p>
            {" "}
            — функции, результат которых зависит только от значений переданных
            аргументов и стабильных переменных локальной области видимости,
            которые при одинаковых аргументах всегда возвращают один и тот же
            результат, и не имеют видимых побочных эффектов, то есть не изменяют
            состояние программы.
          </p>
        </div>
      </div>
    </>
  );
};

export default CleanFn;
