import React from "react";
import CreateTypeItem from "./createtypeitem";

const CreateType = ({ setComType, checkedValue }) => (
  <div className="subcreate__type">
    <h3 className="subcreate__header">Community type</h3>
    {/* RadioGroup */}
    <input type="hidden" value={checkedValue} />
    <div
      className="subcreate__type__radiogroup"
      aria-label="type"
      role="radiogroup"
    >
      <CreateTypeItem
        isChecked={checkedValue === "public"}
        handleClick={() => setComType("public")}
        iconName="user"
        iconColor="#24a0ed"
        header="Public"
        note="Anyone can view, post, and comment to this community"
      />
      <CreateTypeItem
        isChecked={checkedValue === "restricted"}
        handleClick={() => setComType("restricted")}
        iconName="eye"
        iconColor="#0dd3bb"
        header="Restricted"
        note="Anyone can view this community, but only approved users can post"
      />
      <CreateTypeItem
        isChecked={checkedValue === "private"}
        handleClick={() => setComType("private")}
        iconName="lock"
        iconColor="#ffd635"
        header="Private"
        note="Only approved users can view and submit to this community"
      />
    </div>
  </div>
);

export default CreateType;
