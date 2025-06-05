import React from "react";
import { Checkbox } from "@nextui-org/checkbox";
import { Input, Select, SelectItem } from "@nextui-org/react";

const FieldRenderer = ({ field, value, onChange, label, className = "" }) => {
  const handleInputChange = (e) => {
    onChange(field.name, e.target.value);
  };

  // Select Field
  if (field.type === "select") {
    return (
      <div className={className}>
        <Select
          label={label || field.label}
          selectedKeys={[value]}
          onChange={handleInputChange}
          variant="bordered"
          radius="full"
          classNames={{
            trigger: className,
            popoverContent: className,
          }}
        >
          {field.options?.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </Select>
      </div>
    );
  }

  // Checkbox Field
  if (field.type === "checkbox") {
    return (
      <div className={className}>
        <Checkbox
          isSelected={value}
          onChange={(e) => onChange(field.name, e.target.checked)}
        >
          {label || field.label || "Option"}
        </Checkbox>
      </div>
    );
  }

  // Number Field
  if (field.type === "number") {
    return (
      <div className={className}>
        <Input
          type="number"
          label={label || field.label}
          value={value}
          onChange={handleInputChange}
          variant="bordered"
          radius="full"
          classNames={{
            input: className,
            inputWrapper: className,
          }}
        />
      </div>
    );
  }

  // Textarea Field
  if (field.type === "textarea") {
    return (
      <div>
        <label>{label || field.label}</label>
        <textarea
          value={value}
          onChange={(e) => onChange(field.name, e.target.value)}
          placeholder={field.placeholder}
          className={className}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = e.target.scrollHeight + "px";
          }}
        />
      </div>
    );
  }

  // Default Text Input
  return (
    <div className={className}>
      <Input
        type="text"
        label={label || field.label}
        value={value}
        onChange={handleInputChange}
        variant="bordered"
        radius="full"
        classNames={{
          input: className,
          inputWrapper: className,
        }}
      />
    </div>
  );
};

export default FieldRenderer;
