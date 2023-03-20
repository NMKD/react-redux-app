import React from "react";
import { compose, pipe } from "lodash/fp";

const Composition = () => {
  const x = 2;
  const double = (number) => number * 2;
  const square = (number) => number * number;
  const half = (number) => number / 2;
  const mathCalculate = compose(half, square, double);
  const mathPipeline = pipe(double, square, half);
  return (
    <>
      <div className="card">
        <h5 className="card-header">Композиция функций</h5>
        <div className="card-body">
          <h5 className="card-title">Pipline</h5>
          <p className="card-text">
            Вложенность, результат: {half(square(double(x)))}
          </p>
          <p className="card-text">Compose, результат: {mathCalculate(x)}</p>
          <p className="card-text">Pipe, результат: {mathPipeline(x)}</p>
          <strong>
            Пайплайн (от английского pipeline — «трубопровод»)
          </strong>{" "}
          <p>
            {" "}
            — это документ, визуализирующий процесс разработки продукта. Он
            представляет собой последовательность этапов, расположенных так, что
            конец предыдущего является началом следующего. Благодаря этому
            создается эффект производственного конвейера или трубопровода, по
            которому проект движется от первоначальной идеи до конкретного
            продукта.
          </p>
        </div>
      </div>
    </>
  );
};

export default Composition;
