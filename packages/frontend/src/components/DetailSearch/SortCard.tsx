import { Card, Label, Radio } from "flowbite-react";
import { useCallback } from "react";
import { capFirst } from "../../utils/utils";

const SortCard = ({
  title,
  searchParams,
}: {
  title: string;
  searchParams: URLSearchParams;
}) => {
  const val = searchParams.get(title) || null;
  const handleDefault = useCallback(() => {
    searchParams.delete(title);
  }, [searchParams, title]);

  const handleAsc = useCallback(() => {
    searchParams.set(title, "asc");
  }, [searchParams, title]);

  const handleDesc = useCallback(() => {
    searchParams.set(title, "desc");
  }, [searchParams, title]);

  return (
    <Card className="mt-3">
      <div>{capFirst(title)}</div>
      <div className="flex flex-wrap gap-6">
        <div className="flex gap-1 items-center">
          <Radio
            id={`${title}-default`}
            name={title}
            value="default"
            onClick={handleDefault}
            defaultChecked={val === "default" || !val}
          />
          <Label htmlFor={`${title}-default`}>Default</Label>
        </div>
        <div className="flex gap-1 items-center">
          <Radio
            id={`${title}-asc`}
            name={title}
            value="asc"
            onClick={handleAsc}
            defaultChecked={val === "asc"}
          />
          <Label htmlFor={`${title}-asc`}>Ascending</Label>
        </div>
        <div className="flex gap-1 items-center">
          <Radio
            id={`${title}-desc`}
            name={title}
            value="desc"
            onClick={handleDesc}
            defaultChecked={val === "desc"}
          />
          <Label htmlFor={`${title}-desc`}>Descending</Label>
        </div>
      </div>
    </Card>
  );
};

export default SortCard;
