import SectionTitle from "./SectionTitle";
import { useUnitContext } from "../../containers/Unit/UnitProvider";

export default function HomeFact() {
  const {
    property: { num_of_bedroom, num_of_bathroom },
  } = useUnitContext();
  return (
    <>
      <SectionTitle title="Home facts" />
      <tr>
        <td className="text-gray-500 py-2">Bedroom</td>
        <td>{num_of_bedroom}</td>
      </tr>
      <tr>
        <td className="text-gray-500 py-2">Full Batheroom</td>
        <td>{num_of_bathroom}</td>
      </tr>
    </>
  );
}
