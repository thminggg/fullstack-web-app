import { Carousel } from "flowbite-react";
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Broker from "../../components/Broker/Broker";
import HomeDetail from "../../components/HomeDetail/HomeDetail";
import HomeOverview from "../../components/HomeOverview/HomeOverview";
import TourBooking from "../../components/TourBooking/TourBooking";
import { formatCurrency } from "../../utils/number";

const PriceAndMortgage = () => (
  <div className="flex items-end">
    <span className="text-3xl font-bold mr-3">{formatCurrency(1169000)}</span>
    <span>
      Est. {formatCurrency(5730)}
      /mo
    </span>
  </div>
);

const Address = () => (
  <div className="flex flex-wrap font-semibold">
    <div className="w-full text-lg">1102 8555 Granville Street</div>
    <div className="w-full">Vancouver, BC, V6P 0C3</div>
  </div>
);

const BasicInfo = () => (
  <div className="tracking-wider">2 Bed • 2 Bath • 1018 Sqft • Apt/Condo</div>
);

const Gallery = () => (
  <div className="h-96">
    <Carousel slide={false}>
      <img src="/condos/1.jpg" alt="..." />
      <img src="/condos/2.jpg" alt="..." />
      <img src="/condos/3.jpg" alt="..." />
      <img src="/condos/4.jpg" alt="..." />
      <img src="/condos/5.jpg" alt="..." />
      <img src="/condos/6.jpg" alt="..." />
      <img src="/condos/7.jpg" alt="..." />
    </Carousel>
  </div>
);

export default function Unit() {
  const [tourDate, setTourDate] = useState<Date>();
  const params = useParams();

  // TODO: fetch data from server
  console.log(useLoaderData());
  console.log(params);

  return (
    <div className="px-6 md:px-24 lg:px-30">
      <div className="flex flex-wrap justify-between lg:flex-nowrap py-6 px-6 gap-6">
        <div className="w-full lg:w-8/12">
          <div className="flex flex-col gap-3">
            <PriceAndMortgage />
            <Address />
            <BasicInfo />
            <Gallery />
            <HomeOverview />
            <HomeDetail />
          </div>
        </div>
        <div className="w-full lg:w-1/12 lg:grow lg:mx-auto">
          <Broker />
          <TourBooking handleSetTourDate={setTourDate} />
        </div>
      </div>
    </div>
  );
}
