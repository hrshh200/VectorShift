import React from "react";
import BaseNode from "./baseNode";

const llmNode = () => {
  return (
    <BaseNode
      title="LLM"
      inputs={[{ id: "input" }]}
      outputs={[{ id: "output" }]}
    >
      <p>Process with AI Model</p>
    </BaseNode>
  );
};

export default llmNode;