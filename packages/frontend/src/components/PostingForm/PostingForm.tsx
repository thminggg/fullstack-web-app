import { Button } from "flowbite-react";
import FormField from "./FormField";

export default function PostingForm() {
  return (
    <form className="flex flex-row flex-wrap mt-4 gap-3">
      <FormField id="propertyName" value="Property Name" required={true} />
      <FormField id="address" value="Address" required={true} />
      <FormField id="city" value="City" required={true} />
      <FormField id="province" value="Province" required={true} />
      <FormField id="zip" value="Zip" required={true} />
      <FormField id="country" value="Country" required={true} />
      <FormField id="listing_price" value="Listing Price" required={true} />
      <FormField
        id="num_of_bathroom"
        value="Number of Bathroom"
        required={true}
      />
      <FormField
        id="num_of_bedroom"
        value="Number of Bedroom"
        required={true}
      />
      <FormField id="num_of_view" value="Number of View" required={true} />
      <FormField id="size" value="Size" required={true} />
      <FormField id="type" value="Type" required={true} />
      <Button className="flex=[90%] ml-auto" type="submit">
        Submit
      </Button>
    </form>
  );
}
