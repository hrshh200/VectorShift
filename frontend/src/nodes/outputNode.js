import React from "react";
import BaseNode from "./baseNode";

const outputNode = () => {
  return (
    <BaseNode
      title="Output"
      inputs={[{ id: "input" }]}
    >
      <p>Final Result</p>
    </BaseNode>
  );
};

export default outputNode;