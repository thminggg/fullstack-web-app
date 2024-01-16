import SectionTitle from "./SectionTitle";

export default function AgentDetail() {
  return (
    <>
      <SectionTitle title="Agent details" />
      <tr>
        <td className="text-gray-500 py-2">Primary Agent</td>
        <td>Adam Smith</td>
      </tr>
      <tr>
        <td className="text-gray-500 py-2">Primary Broker</td>
        <td>Canada Westtt Real Estate</td>
      </tr>
    </>
  );
}
