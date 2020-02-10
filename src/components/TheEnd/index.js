import React from 'react';

const TheEnd = () => {
  return (
    <div className="the-end">
      <p className="the-end__congrats">Поздравляем!</p>
      <p className="the-end__result">
        Вы прошли викторину и набрали 9 из 30 возможных баллов
      </p>
      <button
        type="button"
        // onClick={goNextLevel}
        className="the-end__btn-congrats"
      >
        Попробовать еще раз!
      </button>
      <button
        type="button"
        // onClick={goNextLevel}
        className="the-end__btn-certificate"
      >
        Скачать сертификат
      </button>
    </div>
  );
};

export default TheEnd;
