import { Avatar } from "flowbite-react";
import { useUnitContext } from "../../containers/Unit/UnitProvider";

export default function Broker() {
  const {
    broker: { name: broker_name },
    brokerCompany: { name: broker_company_name },
  } = useUnitContext();

  return (
    <div className="hidden lg:block mb-3 p-9 rounded-lg bg-white text-center">
      <div className="font-bold">Listed By</div>
      <div>
        <Avatar img="/townhouses/1.jpg" alt="avatar" size="lg" rounded />
      </div>
      <div className="text-xl">{broker_name}</div>
      <div className="text-sm text-gray-400 font-semibold">
        {broker_company_name} Real Estate Inc.
      </div>
    </div>
  );
}
