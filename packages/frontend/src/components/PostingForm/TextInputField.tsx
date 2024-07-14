import { Label, TextInput } from "flowbite-react";
import { ChangeEventHandler } from "react";

const TextInputField = ({
  id,
  value,
  handleOnChange,
  type = "text",
  className = "",
}: {
  id: string;
  value: string;
  handleOnChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  className?: string;
}) => (
  <div className={className}>
    <div className="mb-2 block">
      <Label htmlFor={id} value={value} />
    </div>
    <TextInput id={id} type={type} onChange={handleOnChange} />
  </div>
);

export default TextInputField;
