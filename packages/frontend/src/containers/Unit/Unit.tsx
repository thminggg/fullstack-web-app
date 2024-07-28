import { useQuery } from "@apollo/client";
import { BrokerCompany, Broker as BrokerType, Property } from "@thminggg/db";
import { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";
import Broker from "../../components/Broker/Broker";
import Error from "../../components/Error/Error";
import HomeDetail from "../../components/HomeDetail/HomeDetail";
import HomeOverview from "../../components/HomeOverview/HomeOverview";
import Loader from "../../components/Loader/Loader";
import TourBooking from "../../components/TourBooking/TourBooking";
import Address from "../../components/UnitDetail/Address";
import BasicInfo from "../../components/UnitDetail/BasicInfo";
import Gallery from "../../components/UnitDetail/Gallery";
import PriceAndMortgage from "../../components/UnitDetail/PriceAndMortgage";
import { GET_PROPERTY } from "../../graphql/queries/getProperty";
import { UnitProvider } from "./UnitProvider";

type PropertyQueryResult = {
  property: {
    data: {
      property: Property;
      broker: BrokerType;
      brokerCompany: BrokerCompany;
    };
  };
};

export default function Unit() {
  const navigate = useNavigate();
  const [tourDate, setTourDate] = useState<Date>();
  const params = useParams();
  const { brokerId, propertyId } = params;

  const {
    loading,
    error,
    data: queryResult,
  } = useQuery<PropertyQueryResult>(GET_PROPERTY, {
    variables: {
      brokerId: brokerId,
      propertyId: propertyId,
    },
  });

  if (loading) return <Loader />;
  if (error) return <Error error={error} />;

  return (
    <div className="px-6 md:px-24 lg:px-30">
      <div className="flex flex-wrap justify-between lg:flex-nowrap py-6 px-6 gap-6">
        <UnitProvider
          unitData={
            {
              property: { ...queryResult?.property?.data?.property },
              broker: { ...queryResult?.property?.data?.broker },
              brokerCompany: { ...queryResult?.property?.data?.brokerCompany },
            } ?? null
          }
        >
          <div className="w-full lg:w-8/12">
            <div className="flex flex-col gap-3">
              <button
                className="flex items-center"
                onClick={() => navigate(-1)}
              >
                <IoMdArrowRoundBack className="text-2xl inline-block" />
                <p className="text-xl inline-block">back</p>
              </button>
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
        </UnitProvider>
      </div>
    </div>
  );
}
