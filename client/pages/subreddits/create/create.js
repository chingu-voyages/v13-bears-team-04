import React, { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/Button";
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
            <h3 className="subcreate__header">Name</h3>
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
            <h3 className="subcreate__header">Topics</h3>
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
            <h3 className="subcreate__header">Description</h3>
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

const Checkbox = ({ cx, isEmpty }) => {
  const d = `M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z`;
  const empty = `M1.66666667,3.34755033 L1.66666667,16.6524497 C1.66666667,17.5781756 2.42112363,18.3333333 3.34755033,18.3333333 L16.6524497,18.3333333 C17.5781756,18.3333333 18.3333333,17.5788764 18.3333333,16.6524497 L18.3333333,3.34755033 C18.3333333,2.42182438 17.5788764,1.66666667 16.6524497,1.66666667 L3.34755033,1.66666667 C2.42182438,1.66666667 1.66666667,2.42112363 1.66666667,3.34755033 Z`;
  const full = `M8.50575,15.1995 L15.797625,7.907625 C16.25325,7.452625 16.25325,6.71325 15.797625,6.25825 C15.342,5.802625 14.602625,5.802625 14.147625,6.25825 L7.7295,12.676375 L5.635125,10.327625 C5.20575,9.846375 4.46825,9.805125 3.987625,10.23325 C3.506375,10.662625 3.4645,11.400125 3.89325,11.88075 L6.810125,15.151375 C7.023875,15.39075 7.327,15.531375 7.647625,15.54075 C7.658875,15.54075 7.6695,15.541375 7.68075,15.541375 C7.990125,15.541375 8.287,15.41825 8.50575,15.1995 Z`;
  const path = isEmpty ? `${empty}${d}` : `${d}${full}`;
  return (
    <svg className={cx} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
      <path fill="inherit" d={path} />
    </svg>
  );
};
