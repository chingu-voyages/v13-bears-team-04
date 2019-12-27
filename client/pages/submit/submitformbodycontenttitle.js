import React, { useState } from "react";

const SubmitFormBodyContentTitle = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="submit__form__body__content__title">
      <input
        type="text"
        placeholder="Title"
        minLength="4"
        maxLength="300"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="submit__form__body__content__title__input"
      />
      <div className="submit__form__body__content__title__count">{`${title.length}/300`}</div>
    </div>
  );
};

export default SubmitFormBodyContentTitle;
