import React, { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import "./create.scss";

export default function Create() {
  const [name, setName] = useState("");
  const [topics, setTopics] = useState([]);
  const [description, setDescription] = useState("");

  function handleSubmit() {
    console.log("processing...");
  }

  return (
    <div className="subredditscreate-container">
      <div className="subcreate__left" />
      <div className="subcreate__right">
        <h1 className="subcreate__header">Create a community</h1>
        <div className="subcreate__field">
          <div className="subcreate__field__info">
            <h3 className="subcreate__header required-dot">Name</h3>
            <p className="subcreate__field__info__note">
              Community names includes capitalization cannot be changed.
              {/* <span className="subcreate__field__info__note__span"></span> */}
            </p>
          </div>
          <div className="subcreate__field__content">
            <input
              type="text"
              maxLength="21"
              className="subcreate__field__content__input"
            />
          </div>
        </div>
        <div className="subcreate__field">
          <div className="subcreate__field__info">
            <h3 className="subcreate__header required-dot">Topics</h3>
            <p className="subcreate__field__info__note">
              This will help relevant users find your community. 0/25
              {/* <span className="subcreate__field__info__note__span"></span> */}
            </p>
          </div>
          <div className="subcreate__field__content">
            <Select />
          </div>
        </div>
        <div className="subcreate__field">
          <div className="subcreate__field__info">
            <h3 className="subcreate__header required-dot">Description</h3>
            <p className="subcreate__field__info__note">
              This is how new members come to understand your community.
              {/* <span className="subcreate__field__info__note__span"></span> */}
            </p>
          </div>
          <div className="subcreate__field__content">
            <textarea
              type="text"
              rows="2"
              maxLength="500"
              className="subcreate__field__content__textarea"
            />
          </div>
        </div>
        <div className="subcreate__type">
          <h3 className="subcreate__header">Community type</h3>
          {/* RadioGroup */}
          <input type="hidden" value="private" />
          <div
            className="subcreate__type__radiogroup"
            aria-label="type"
            role="radiogroup"
          >
            <div className="subcreate__type__item">
              <Radio cx="subcreate__type__item__radio" />
              <FontAwesomeIcon
                className="subcreate__type__item__icon"
                icon="user"
                color="#24a0ed"
              />
              <div className="subcreate__type__item__text">
                <div className="subcreate__type__item__text__header">
                  Public
                </div>
                <div className="subcreate__type__item__text__note">
                  Anyone can view, post, and comment to this community
                </div>
              </div>
            </div>
            <div className="subcreate__type__item">
              <Radio cx="subcreate__type__item__radio" isEmpty />
              <FontAwesomeIcon
                className="subcreate__type__item__icon"
                icon="eye"
                color="#0dd3bb"
              />
              <div className="subcreate__type__item__text">
                <div className="subcreate__type__item__text__header">
                  Restricted
                </div>
                <div className="subcreate__type__item__text__note">
                  Anyone can view this community, but only approved users can
                  post
                </div>
              </div>
            </div>
            <div className="subcreate__type__item">
              <Radio cx="subcreate__type__item__radio" isEmpty />
              <FontAwesomeIcon
                className="subcreate__type__item__icon"
                icon="lock"
                color="#ffd635"
              />
              <div className="subcreate__type__item__text">
                <div className="subcreate__type__item__text__header">
                  Private
                </div>
                <div className="subcreate__type__item__text__note">
                  Only approved users can view and submit to this community
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="subcreate__adult">
          <h3 className="subcreate__header">Adult content</h3>
          <Checkbox cx="subcreate__adult__checkbox" />
          <Checkbox cx="subcreate__adult__checkbox" isEmpty />
          {/* checkbox */}
          {/* label */}
          {/* text */}
        </div>
        <Button
          cx="subcreate__button"
          text="Create Community"
          handleClick={handleSubmit}
        />
      </div>
    </div>
  );
}

const Radio = ({ cx, isEmpty }) => {
  const emptyPath = `M10,1.66666667 C5.39762708,1.66666667 1.66666667,5.39762708 1.66666667,10 C1.66666667,14.6023729 5.39762708,18.3333333 10,18.3333333 C14.6023729,18.3333333 18.3333333,14.6023729 18.3333333,10 C18.3333333,5.39762708 14.6023729,1.66666667 10,1.66666667`;
  const fullPath = `M10,6.66666667 C8.15905083,6.66666667 6.66666667,8.15905083 6.66666667,10 C6.66666667,11.8409492 8.15905083,13.3333333 10,13.3333333 C11.8409492,13.3333333 13.3333333,11.8409492 13.3333333,10 C13.3333333,8.15905083 11.8409492,6.66666667 10,6.66666667`;
  const path = isEmpty ? emptyPath : fullPath;
  return (
    <svg
      className={cx}
      role="presentation"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <g fill="inherit">
        <path
          d={`${path} Z M10,0 C15.5228475,-1.01453063e-15 20,4.4771525 20,10 C20,15.5228475 15.5228475,20 10,20 C4.4771525,20 6.76353751e-16,15.5228475 0,10 C-6.76353751e-16,4.4771525 4.4771525,1.01453063e-15 10,0 Z`}
        />
      </g>
    </svg>
  );
};
