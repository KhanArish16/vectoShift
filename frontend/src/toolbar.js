import { DraggableNode } from "./draggableNode";
import { MdInput, MdOutlineOutput } from "react-icons/md";
import { TbBoxModel2, TbMultiplier2X } from "react-icons/tb";
import { CiText } from "react-icons/ci";
import { GoNumber } from "react-icons/go";
import { IoIosCheckboxOutline } from "react-icons/io";
import { VscSymbolString } from "react-icons/vsc";
import { IoColorPaletteOutline } from "react-icons/io5";

export const PipelineToolbar = () => {
  return (
    <div className="bg-white border-b shadow-sm flex justify-center items-center">
      <div className="flex flex-wrap gap-3 p-5">
        <DraggableNode
          type="customInput"
          label="Input"
          icon={<MdInput />}
          className="border-green-500 text-green-700 bg-green-50"
        />
        <DraggableNode
          type="llm"
          label="LLM"
          icon={<TbBoxModel2 />}
          className="border-purple-500 text-purple-700 bg-purple-50"
        />
        <DraggableNode
          type="customOutput"
          label="Output"
          icon={<MdOutlineOutput />}
          className="border-red-500 text-red-700 bg-red-50"
        />
        <DraggableNode
          type="text"
          label="Text"
          icon={<CiText />}
          className="border-blue-500 text-blue-700 bg-blue-50"
        />
        <DraggableNode
          type="numberInput"
          label="Number"
          icon={<GoNumber />}
          className="border-yellow-500 text-yellow-700 bg-yellow-50"
        />
        <DraggableNode
          type="checkboxNode"
          label="Checkbox"
          icon={<IoIosCheckboxOutline />}
          className="border-pink-500 text-pink-700 bg-pink-50"
        />
        <DraggableNode
          type="stringConcatenate"
          label="Concatenate"
          icon={<VscSymbolString />}
          className="border-indigo-500 text-indigo-700 bg-indigo-50"
        />
        <DraggableNode
          type="colorPicker"
          label="Color"
          icon={<IoColorPaletteOutline />}
          className="border-amber-500 text-amber-700 bg-amber-50"
        />
        <DraggableNode
          type="multiplierNode"
          label="Multiplier"
          icon={<TbMultiplier2X />}
          className="border-cyan-500 text-cyan-700 bg-cyan-50"
        />
      </div>
    </div>
  );
};
