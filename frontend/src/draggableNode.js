// draggableNode.js

export const DraggableNode = ({ type, label, icon, className = "" }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className={` rounded-lg min-w-24 min-h-20 gap-2 cursor-grab bg-white flex items-center justify-center flex-col p-2 flex-wrap ${type} ${className}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  );
};
