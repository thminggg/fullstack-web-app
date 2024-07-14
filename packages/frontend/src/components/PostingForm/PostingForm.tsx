import { Button, Label, Select, Textarea } from "flowbite-react";
import { FormEvent, useState } from "react";
import TextInputField from "./TextInputField";
import { useMutation } from "@apollo/client";
import { CREATE_PROPERTIES } from "../../graphql/mutations/createProperties";
import Loader from "../Loader/Loader";

const FIELDS: {
  [key: string]: {
    id: string;
    displayName: string;
    required: boolean;
    isNumber?: boolean;
  };
} = {
  name: {
    id: "name",
    displayName: "Property Name",
    required: false,
  },
  listing_price: {
    id: "listing_price",
    displayName: "Listing Price",
    required: false,
    isNumber: true,
  },
  address: { id: "address", displayName: "Address", required: false },
  city: { id: "city", displayName: "City", required: false },
  province: { id: "province", displayName: "Province", required: false },
  country: { id: "country", displayName: "Country", required: false },
  zip: { id: "zip", displayName: "Zip", required: false },
  num_of_bathroom: {
    id: "num_of_bathroom",
    displayName: "Number of Bathroom",
    required: false,
    isNumber: true,
  },
  num_of_bedroom: {
    id: "num_of_bedroom",
    displayName: "Number of Bedroom",
    required: false,
    isNumber: true,
  },
  size: { id: "size", displayName: "Size", required: false, isNumber: true },
  type: { id: "type", displayName: "Type", required: false },
  overview: { id: "overview", displayName: "Overview", required: false },
};

const HOUSE_TYPES = [
  "Townhouse",
  "Condo",
  "House",
  "Duplex",
  "Semi-detached house",
];

export default function PostingForm({ brokerId }: { brokerId?: string }) {
  const [createProperties, { data, loading }] = useMutation(CREATE_PROPERTIES);
  const [errMsg, setErrMsg] = useState<string>();
  const [formState, setFormState] = useState<{
    [key: string]: string | number;
  }>({});
  const handleInputChange = (
    event:
      | FormEvent<HTMLInputElement>
      | FormEvent<HTMLSelectElement>
      | FormEvent<HTMLTextAreaElement>
  ) => {
    const { id, value } = event.currentTarget;
    setFormState((prevState) => {
      console.log({
        ...prevState,
        [id]: !FIELDS[id]?.isNumber ? value : Number(value),
      });

      return {
        ...prevState,
        [id]: !FIELDS[id]?.isNumber ? value : Number(value),
      };
    });
  };

  const handleSubmit = () => {
    // Error handling
    const errorFields = [];
    for (const key in FIELDS) {
      if (FIELDS[key].required && (!formState[key] || formState[key] === "")) {
        errorFields.push(FIELDS[key].displayName);
      }
    }
    if (errorFields.length > 0) {
      console.error(`Error ${errorFields.join(", ")} are not filled`);
      setErrMsg(`Error ${errorFields.join(", ")} are not filled`);
      return;
    }
    if (!brokerId) {
      console.error(`Error user is not a broker`);
      setErrMsg(`Error user is not a broker`);
      return;
    }

    // Submit
    console.log("submit");
    console.log({
      propertyData: [
        {
          ...formState,
          broker_id: brokerId,
          listed_timestamp: Math.floor(Date.now() / 1000),
        },
      ],
    });

    createProperties({
      variables: {
        propertyData: [
          {
            ...formState,
            broker_id: brokerId,
            listed_timestamp: Math.floor(Date.now() / 1000),
          },
        ],
      },
    }).catch((err) => console.error(err));
  };

  if (loading) return <Loader />;
  if (data) {
    console.log(data);
  }

  return (
    <>
      {errMsg && <div className="text-red-600 mt-4">{errMsg}</div>}
      <div className="grid grid-cols-4 gap-4 mt-4">
        <TextInputField
          id={FIELDS.name.id}
          value="Property Name"
          className="grid-cols-subgrid col-span-3"
          handleOnChange={handleInputChange}
        />
        <TextInputField
          id={FIELDS.listing_price.id}
          value="Listing Price"
          type="number"
          className="grid-cols-subgrid col-span-1"
          handleOnChange={handleInputChange}
        />
        <TextInputField
          id={FIELDS.address.id}
          value="Address"
          className="grid-cols-subgrid col-span-4"
          handleOnChange={handleInputChange}
        />
        <TextInputField
          id={FIELDS.city.id}
          value="City"
          handleOnChange={handleInputChange}
        />
        <TextInputField
          id={FIELDS.province.id}
          value="Province"
          handleOnChange={handleInputChange}
        />
        <TextInputField
          id={FIELDS.country.id}
          value="Country"
          handleOnChange={handleInputChange}
        />
        <TextInputField
          id="zip"
          value="Zip"
          handleOnChange={handleInputChange}
        />
        <TextInputField
          id={FIELDS.num_of_bathroom.id}
          value="Number of Bathroom"
          type="number"
          className="grid-cols-subgrid col-span-2"
          handleOnChange={handleInputChange}
        />
        <TextInputField
          id={FIELDS.num_of_bedroom.id}
          value="Number of Bedroom"
          type="number"
          className="grid-cols-subgrid col-span-2"
          handleOnChange={handleInputChange}
        />
        <TextInputField
          className="grid-cols-subgrid col-span-2 md:col-span-1"
          id={FIELDS.size.id}
          value="Size"
          type="number"
          handleOnChange={handleInputChange}
        />
        <div className="grid-cols-subgrid col-span-2 md:col-span-1">
          <div className="mb-2 block">
            <Label htmlFor="type" value="Type" />
          </div>
          <Select id={FIELDS.type.id} onChange={handleInputChange}>
            <option key={""} />
            {HOUSE_TYPES.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </Select>
        </div>
        <div className="grid-cols-subgrid col-span-4">
          <div className="mb-2 block">
            <Label htmlFor="overview" value="Overview" />
          </div>
          <Textarea
            id={FIELDS.overview.id}
            placeholder="Overview of the property..."
            rows={4}
            onChange={handleInputChange}
          />
        </div>
        <div className="grid-cols-subgrid col-span-3" />
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}
