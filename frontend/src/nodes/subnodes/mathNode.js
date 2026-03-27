import React from "react";
import BaseNode from "../baseNode" 

const MathNode = () => (
  <BaseNode
    title="Math"
    inputs={[{ id: "a" }, { id: "b" }]}
    outputs={[{ id: "result" }]}
  >
    <p>Performs calculations</p>
  </BaseNode>
);

export default MathNode;