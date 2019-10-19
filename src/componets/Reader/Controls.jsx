import React from "react";

const Controls = ({ next, prev, isActiveButtonNext, isActiveButtonPrev }) => {
  return (
    <section className="controls">
      <button
        type="button"
        className="button"
        onClick={prev}
        disabled={isActiveButtonPrev}
      >
        Назад
      </button>
      <button
        type="button"
        className="button"
        onClick={next}
        disabled={isActiveButtonNext}
      >
        Вперед
      </button>
    </section>
  );
};
export default Controls;
