import { useState, useEffect } from "react";
import { BaseNode } from "../components/BaseNode";

export const TextNode = ({ id, data = {}, onChange }) => {
  const [inputHandles, setInputHandles] = useState([]);

  // Extract and update variable handles from text
  const updateHandlesForVariables = (text) => {
    const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const matches = [...text.matchAll(regex)];
    const newHandles = matches.map((match, index) => ({
      id: `${id}-${match[1]}`,
      style: { top: `${(index + 1) * 15}%` },
    }));
    setInputHandles(newHandles);
  };

  useEffect(() => {
    updateHandlesForVariables(data.text || "");
  }, [data.text, id]);

  const customFields = [
    {
      label: "Prompt",
      name: "text",
      type: "textarea",
      placeholder: "Enter text with variables like {{context}}",
      default: data.text || "",
      autoResize: true,
    },
  ];

  const outputHandles = [{ id: `${id}-output` }];

  return (
    <BaseNode
      id={id}
      label="Text"
      data={data}
      customFields={customFields}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      className="border-blue-500 text-blue-700"
      fieldClassName="border-blue-300 w-full text-sm border rounded-md p-2 resize-none overflow-hidden h-auto"
      onFieldChange={(name, value) => {
        if (name === "text") {
          const updatedData = { ...data, [name]: value };
          updateHandlesForVariables(value);
          if (onChange) onChange(id, updatedData);
        }
      }}
    />
  );
};
