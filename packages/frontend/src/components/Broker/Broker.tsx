import { Avatar } from "flowbite-react";

export default function Broker() {
  return (
    <div className="hidden lg:block mb-3 p-9 rounded-lg bg-white text-center">
      <div className="font-bold">Listed By</div>
      <div>
        <Avatar img="/townhouses/1.jpg" alt="avatar" size="lg" rounded />
      </div>
      <div className="text-xl">Tom Holland</div>
      <div className="text-sm text-gray-400 font-semibold">Company</div>
    </div>
  );
}
