import React, { useState } from "react";
import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../../components/Button";
import Checkbox from "../../../components/Checkbox";
import Radio from "../../../components/Radio";
import "./create.scss";
import Label from "../../../components/Label/label";

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
          <h3 className="subcreate__header required-dot">Name</h3>
          <p className="subcreate__field__note">
            Community names includes capitalization cannot be changed.
          </p>
          <div className="subcreate__field__content">
            <input
              type="text"
              maxLength="21"
              className="subcreate__field__content__input"
            />
          </div>
        </div>
        <div className="subcreate__field">
          <h3 className="subcreate__header required-dot">Topics</h3>
          <p className="subcreate__field__note">
            This will help relevant users find your community. 0/25
          </p>
          <div className="subcreate__field__content">
            <Select />
          </div>
        </div>
        <div className="subcreate__field">
          <h3 className="subcreate__header required-dot">Description</h3>
          <p className="subcreate__field__note">
            This is how new members come to understand your community.
          </p>
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
              <Radio />
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
              <Radio isChecked />
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
              <Radio isChecked />
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
        <h3 className="subcreate__header">Adult content</h3>
        <div className="subcreate__adult">
          <Checkbox />
          <Label text="NSFW" backgroundColor="#ff585b" color="white" />
          <div className="subcreate__header">18+ year old community</div>
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
