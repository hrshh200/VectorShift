import React from "react";
import BaseNode from "../baseNode";

const APINode = () => (
  <BaseNode
    title="API Call"
    inputs={[{ id: "trigger" }]}
    outputs={[{ id: "response" }]}
  >
    <p>Fetch data from API</p>
  </BaseNode>
);

export default APINode;