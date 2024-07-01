import { Label, TextInput } from "flowbite-react";

const FormField = ({
  id,
  value,
  required = false,
}: {
  id: string;
  value: string;
  required?: boolean;
}) => (
  <div className="flex-[90%] md:flex-[45%]">
    <div className="mb-2 block">
      <Label htmlFor={id} value={value} />
    </div>
    <TextInput id={id} required={required} />
  </div>
);

export default FormField;
