import { Label, RangeSlider } from "flowbite-react";
import { useState } from "react";
import { capFirst } from "../../utils/utils";

export const FilterSlider = ({
  title,
  searchParams,
  searchParamName,
  min = 0,
  max = 5,
  step = 1,
  defaultVal = 0,
}: {
  title: string;
  searchParams: URLSearchParams;
  searchParamName: string;
  min?: number;
  max?: number;
  step?: number;
  defaultVal?: number;
}) => {
  const [value, setValue] = useState(
    Number(searchParams.get(searchParamName) || defaultVal)
  );

  return (
    <>
      <div className="mb-1 block">
        <Label
          htmlFor={`${title}-range`}
          value={`${capFirst(title)} - ${value}+`}
        />
      </div>
      <RangeSlider
        id={`${searchParamName}-range`}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value || defaultVal));
          e.target.value === "0"
            ? searchParams.delete(searchParamName)
            : searchParams.set(searchParamName, e.target.value);
        }}
      />
    </>
  );
};
