import React from "react";
import { Handle, Position } from "reactflow";

const BaseNode = ({ title, children, inputs = [], outputs = [] }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg min-w-[220px] relative">

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white px-3 py-2 rounded-t-xl text-sm font-semibold">
        {title}
      </div>

      {/* Body */}
      <div className="p-3 text-sm text-gray-700">
        {children}
      </div>

      {/* Inputs */}
      {inputs.map((input, i) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          className="w-2 h-2 bg-blue-500"
          style={{ top: 40 + i * 20 }}
        />
      ))}

      {/* Outputs */}
      {outputs.map((output, i) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          className="w-2 h-2 bg-green-500"
          style={{ top: 40 + i * 20 }}
        />
      ))}
    </div>
  );
};

export default BaseNode;