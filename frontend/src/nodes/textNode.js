import React, { useState, useEffect } from "react";
import BaseNode from "./baseNode";

const TextNode = () => {
  const [text, setText] = useState("");
  const [variables, setVariables] = useState([]);

  // Detect variables like {{input}}
  useEffect(() => {
    const matches = [...text.matchAll(/{{(.*?)}}/g)];
    const vars = matches.map(m => m[1].trim());
    setVariables([...new Set(vars)]);
  }, [text]);

  return (
    <BaseNode
      title="Text"
      inputs={variables.map(v => ({ id: v }))}
      outputs={[{ id: "output" }]}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text with {{variables}}"
        className="w-full resize-none outline-none border rounded p-2 text-sm"
        rows={Math.max(2, text.split("\n").length)}
        style={{
          height: `${Math.max(60, text.length * 0.5)}px`,
        }}
      />
    </BaseNode>
  );
};

export default TextNode;