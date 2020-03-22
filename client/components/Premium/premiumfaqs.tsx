import React, { useState } from "react";
import clsx from "clsx";
import FAIcon from "../FAIcon";

const faqs = [
  {
    question: "What is a Reddit Premium Membership?",
    answer:
      "Reddit Premium is our subscription membership program, and it directly supports Reddit and the communities that it hosts. It offers an entirely ads-free Reddit experience as well as other benefits, including monthly Coins and access to the exclusive r/lounge community.",
  },
  {
    question:
      "Why change the name to Premium? What happened to calling it Gold?",
    answer:
      "The membership has a new name for a good reason. Many people confused the subscription Reddit Gold membership with a virtual good or coin. To make things easier to understand, we’ve renamed the membership to “Reddit Premium”, while the virtual good is called “Coins”. We have kept your favorite features and added more.",
  },
  {
    question: "What if I was subscribed to the old Gold Membership program?",
    answer:
      "Fine people everywhere with a Gold Membership are now members of Reddit Premium. It still offers the same great ads-free browsing experience and access to r/lounge, but now you will also receive 700 Coins monthly so you can award exceptional contributions.",
  },
  {
    question: "The Premium membership gives me Coins, what are those for?",
    answer:
      "Coins are a virtual good, and you can use them to award exceptional posts or comments with a Silver, Gold, or Platinum Award. This is a way to show appreciation for an exceptional contribution to Reddit, and can also grant the recipient special bonus benefits. You can award someone by clicking on “Give Award” below a post or comment.",
  },
  {
    question: "Do I have to subscribe to Reddit Premium to get Coins?",
    answer:
      "Monthly Coins are a great benefit for being a Premium member, but if you wish you can also buy individual quantities of Coins here. Additionally, you will receive Coins if you are awarded Gold or Platinum.",
  },
];

export default function PremiumFaqs() {
  const [faqsOpen, setFaqsOpen] = useState<number[]>([]);

  function revealFaq(index: number) {
    setFaqsOpen(state =>
      state.includes(index) ? state.filter(i => i !== index) : [...state, index]
    );
  }

  return (
    <div className="premium__faqs">
      <h2 className="premium__faqs__header">Reddit Premium FAQ</h2>

      <div className="premium__faqs__container">
        {faqs.map(({ question, answer }, i) => {
          const isOpen = faqsOpen.includes(i);
          return (
            <div key={question} className="premium__faqs__item">
              <button
                type="button"
                className="premium__faqs__item__question"
                onClick={() => revealFaq(i)}
              >
                <span>{question}</span>
                <FAIcon
                  color="#1a1a1a"
                  icon={isOpen ? "caret-up" : "caret-down"}
                />
              </button>
              <p
                className={clsx("premium__faqs__item__answer", {
                  "premium__faqs__item__answer--open": isOpen,
                })}
              >
                {answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
