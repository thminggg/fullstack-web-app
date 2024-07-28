import { useUnitContext } from "../../containers/Unit/UnitProvider";

const BasicInfo = () => {
  const {
    property: { num_of_bedroom, num_of_bathroom, size, type },
  } = useUnitContext();

  return (
    <div className="tracking-wider">
      {num_of_bedroom} Bed • {num_of_bathroom} Bath • {size} Sqft • {type}
    </div>
  );
};
export default BasicInfo;
