import ListingDetail from "./ListingDetail";
import AgentDetail from "./AgentDetail";
import HomeFact from "./HomeFact";
import PriceDetail from "./PriceDetail";

export default function HomeDetail() {
  return (
    <>
      <div className="font-bold text-xl my-6">Home facts and features</div>
      <table className="border-separate border-spacing-x-2">
        <tbody>
          <PriceDetail />
          <HomeFact />
          <AgentDetail />
          <ListingDetail />
        </tbody>
      </table>
    </>
  );
}
