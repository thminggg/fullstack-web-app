import SectionTitle from "./SectionTitle";
import { useUnitContext } from "../../containers/Unit/UnitProvider";

export default function AgentDetail() {
  const {
    broker: { name: broker_name },
    brokerCompany: { name: broker_company_name },
  } = useUnitContext();
  return (
    <>
      <SectionTitle title="Agent details" />
      <tr>
        <td className="text-gray-500 py-2">Primary Agent</td>
        <td>{broker_name}</td>
      </tr>
      <tr>
        <td className="text-gray-500 py-2">Primary Broker</td>
        <td>{broker_company_name} Real Estate Inc.</td>
      </tr>
    </>
  );
}
