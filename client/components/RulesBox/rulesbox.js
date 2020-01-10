import React, { useState } from "react";
import Button from "../Button";
import "../Button/";
import "./rulesbox.scss";

export default function RulesBox() {
  const [rules] = useState({
    rule1: "1. Be nice",
    rule2: "2. Be cool",
    rule3: "3. Be Bueller",
  });

  return (
    <div>
      <h1>Rules!</h1>
    </div>
  );
}
