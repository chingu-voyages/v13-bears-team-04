import React, { useState } from "react";
import "./faqdropdown.scss";

export default function FaqDropdown() {
  const [selectedQuestion, toggleQuestion] = useState(-1);

  function revealAnswer(index) {
    toggleQuestion(selectedQuestion === index ? -1 : index);
  }

  const faqs = getFaqs();

  return (
    <div className="faqdropdown">
      {faqs.map(({ question, answer }, index) => (
        <div
          key={`item-${index}`}
          className={`item ${
            selectedQuestion === index ? "faqdropdown__open" : ""
          }`}
        >
          <p
            className="faqdropdown__question"
            onClick={() => revealAnswer(index)}
          >
            {question}
          </p>
          <p className="faqdropdown__answer">{answer}</p>
        </div>
      ))}
    </div>
  );
}

function getFaqs() {
  const faqs = [
    {
      question: "Question 1",
      answer: "Answer 1",
    },
    {
      question: "Question 2",
      answer: "Answer 2",
    },
  ];
  return faqs;
}
