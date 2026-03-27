import React from "react";
import BaseNode from "../baseNode";

const FilterNode = () => (
  <BaseNode
    title="Filter"
    inputs={[{ id: "input" }]}
    outputs={[{ id: "output" }]}
  >
    <p>Filters data based on condition</p>
  </BaseNode>
);

export default FilterNode;