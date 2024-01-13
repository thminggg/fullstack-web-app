import ListingDetail from "./ListingDetail";
import AgentDetail from "./AgentDetail";
import HomeFact from "./HomeFact";
import PriceDetail from "./PriceDetail";

export default function HomeDetail() {
  return (
    <div className="p-9">
      <div className="font-bold text-xl mb-6">Home facts and features</div>
      <table className="border-separate border-spacing-x-2">
        <PriceDetail />
        <tr>
          <td className="text-gray-500 py-2">List Price</td>
          <td>$1,169,000</td>
        </tr>
        <HomeFact />
        <tr>
          <td className="text-gray-500 py-2">Bedroom</td>
          <td>1</td>
        </tr>
        <tr>
          <td className="text-gray-500 py-2">Full Batheroom</td>
          <td>1</td>
        </tr>
        <AgentDetail />
        <tr>
          <td className="text-gray-500 py-2">List Price</td>
          <td>$1,169,000</td>
        </tr>
        <ListingDetail />
        <tr>
          <td className="text-gray-500 py-2">List Price</td>
          <td>$1,169,000</td>
        </tr>
      </table>
    </div>
  );
}
