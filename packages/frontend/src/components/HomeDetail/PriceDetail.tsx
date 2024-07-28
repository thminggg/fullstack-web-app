import SectionTitle from "./SectionTitle";
import { useUnitContext } from "../../containers/Unit/UnitProvider";
import { formatCurrency } from "../../utils/number";

export default function PriceDetail() {
  const {
    property: { listing_price },
  } = useUnitContext();
  return (
    <>
      <SectionTitle title="Price details" />
      <tr>
        <td className="text-gray-500 py-2">List Price</td>
        <td>{formatCurrency(listing_price || 0)}</td>
      </tr>
    </>
  );
}
