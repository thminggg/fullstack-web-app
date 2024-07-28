import { formatCurrency } from "../../utils/number";
import { useUnitContext } from "../../containers/Unit/UnitProvider";

const PriceAndMortgage = () => {
  const {
    property: { listing_price },
  } = useUnitContext();

  return (
    <div className="flex items-end">
      <span className="text-3xl font-bold mr-3">
        {formatCurrency(listing_price || 0)}
      </span>
      <span>
        Est. {formatCurrency((listing_price || 0) / (25 * 12))}
        /mo
      </span>
    </div>
  );
};

export default PriceAndMortgage;
