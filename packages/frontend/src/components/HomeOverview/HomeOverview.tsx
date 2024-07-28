import { Avatar } from "flowbite-react";
import styles from "./HomeOverview.module.css";
import { useUnitContext } from "../../containers/Unit/UnitProvider";

export default function HomeOverview() {
  const {
    property: { num_of_bedroom, num_of_bathroom, type },
    broker: { name: broker_name },
    brokerCompany: { name: broker_company_name },
  } = useUnitContext();

  // Add broker info to overview
  return (
    <div className="flex flex-wrap px-3 py-9 rounded-lg bg-white">
      <div className="font-bold text-2xl mb-6">About this home</div>
      <div>
        Welcome to this delightful {num_of_bedroom}-bedroom, {num_of_bathroom}
        -bath
        {type?.toLowerCase()}, a perfect blend of comfort and convenience in the
        city. The open-plan living area is bright and welcoming, leading into a
        modern kitchen with stainless steel appliances. The bedroom is a cozy
        retreat with ample closet space, complemented by a sleek, well-appointed
        bathroom. Residents enjoy amenities like a gym and rooftop terrace.
        Located just minutes from shopping, dining, and transport, this condo is
        ideal for urban living.
      </div>
      <div className="mt-9 w-full">
        <div className="text-gray-400 font-bold">Listed by</div>
        <div className="w-full flex mt-3 items-center gap-3">
          <Avatar img="/townhouses/1.jpg" alt="avatar" size="lg" rounded />
          <div className="flex flex-wrap">
            <div className="w-full">{broker_name}</div>
            <div className="w-full">{broker_company_name} Real Estate Inc.</div>
          </div>
          <button
            className={`${styles.questionBtn} rounded-lg p-3 ml-auto hidden md:inline-block`}
          >
            Ask a question
          </button>
        </div>
      </div>
    </div>
  );
}
