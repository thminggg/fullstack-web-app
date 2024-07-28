import SectionTitle from "./SectionTitle";
import { useUnitContext } from "../../containers/Unit/UnitProvider";
import { daysBetween } from "../../utils/utils";

export default function ListingDetail() {
  const {
    property: { listed_timestamp, num_of_view },
  } = useUnitContext();

  return (
    <>
      <SectionTitle title="Listing details" />
      <tr>
        <td className="text-gray-500 py-2">Days Listed</td>
        <td>{daysBetween(listed_timestamp || 0)} Days</td>
      </tr>
      <tr>
        <td className="text-gray-500 py-2">Property Views</td>
        <td>{num_of_view}</td>
      </tr>
      <tr>
        <td className="text-gray-500 py-2">Source</td>
        <td>Broker Listing</td>
      </tr>
    </>
  );
}
