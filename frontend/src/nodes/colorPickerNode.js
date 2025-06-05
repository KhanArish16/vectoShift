import { BaseNode } from "../components/BaseNode";

export const ColorPickerNode = (props) => {
  const { id, data } = props;

  const customFields = [
    {
      label: "Pick a color",
      name: "selectedColor",
      type: "text",
      default: "#F59E0B",
    },
  ];

  const inputHandles = [];
  const outputHandles = [{ id: `${id}-output` }];

  return (
    <BaseNode
      id={id}
      label="Color Picker"
      data={data}
      customFields={customFields}
      inputHandles={inputHandles}
      outputHandles={outputHandles}
      className="border-amber-500 text-amber-700"
      fieldClassName="border-amber-400"
      children={
        <div>
          <input
            type="color"
            value={data?.selectedColor || "rgb(245,158,11)"}
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      }
    />
  );
};
