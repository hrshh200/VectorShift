import React from "react";
import BaseNode from "../baseNode";

const SwitchNode = () => (
  <BaseNode
    title="Switch"
    inputs={[{ id: "input" }]}
    outputs={[{ id: "true" }, { id: "false" }]}
  >
    <p>Conditional branching</p>
  </BaseNode>
);

export default SwitchNode;