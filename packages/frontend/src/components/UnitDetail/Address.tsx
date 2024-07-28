import { useUnitContext } from "../../containers/Unit/UnitProvider";

const Address = () => {
  const {
    property: { address, name, city, province, zip },
  } = useUnitContext();

  return (
    <div className="flex flex-wrap font-semibold">
      <div className="w-full text-lg">{address}</div>
      <div className="w-full">
        {name}, {city}, {province}, {zip || "N/A"}
      </div>
    </div>
  );
};

export default Address;
