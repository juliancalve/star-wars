import React from "react";

import { Text, TEXT_TYPES } from "../Text";

import "./Sheet.scss";

const Sheet = ({ data }) => (
  <div className="sheet--container">
    {data.map((d, i) => (
      <div key={i} className="sheet--text">
        <Text bold type={TEXT_TYPES.MD} title={d.key} />
        <Text type={TEXT_TYPES.MD} title={d.value} />
      </div>
    ))}
  </div>
);

export default Sheet;
