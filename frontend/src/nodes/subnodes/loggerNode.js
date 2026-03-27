import React from "react";
import BaseNode from "../baseNode";

const LoggerNode = () => (
  <BaseNode
    title="Logger"
    inputs={[{ id: "input" }]}
  >
    <p>Logs data for debugging</p>
  </BaseNode>
);

export default LoggerNode;