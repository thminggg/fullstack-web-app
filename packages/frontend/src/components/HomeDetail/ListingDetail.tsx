import SectionTitle from "./SectionTitle";

export default function ListingDetail() {
  return (
    <>
      <SectionTitle title="Listing details" />
      <tr>
        <td className="text-gray-500 py-2">Days Listed</td>
        <td>133 Days</td>
      </tr>
      <tr>
        <td className="text-gray-500 py-2">Property Views</td>
        <td>326</td>
      </tr>
      <tr>
        <td className="text-gray-500 py-2">Source</td>
        <td>Broker Listing</td>
      </tr>
    </>
  );
}
