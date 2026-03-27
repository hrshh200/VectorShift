import React from "react";
import BaseNode from "./baseNode";

const inputNode = () => {
  return (
    <BaseNode
      title="Input"
      outputs={[{ id: "output" }]}
    >
      <p>User Input</p>
    </BaseNode>
  );
};

export default inputNode;