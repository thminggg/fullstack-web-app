import { Button, Modal } from "flowbite-react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAMS } from "../../common/const";
import { FilterSlider } from "./FilterSlider";

const FilterModal = ({
  filterModal,
  setFilterModal,
}: {
  filterModal: boolean;
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Modal
      dismissible
      popup
      show={filterModal}
      onClose={() => setFilterModal(false)}
    >
      <Modal.Header>Filters</Modal.Header>
      <Modal.Body>
        <FilterSlider
          title="bedroom"
          searchParams={searchParams}
          searchParamName={SEARCH_PARAMS.BEDROOM}
        />
        <FilterSlider
          title="bathroom"
          searchParams={searchParams}
          searchParamName={SEARCH_PARAMS.BATHROOM}
          max={8}
        />
        <FilterSlider
          title="Sqft"
          searchParams={searchParams}
          searchParamName={SEARCH_PARAMS.SIZE_FILTER}
          min={0}
          max={5000}
          step={10}
          defaultVal={0}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="ml-auto"
          onClick={() => {
            setSearchParams(searchParams);
            setFilterModal(false);
          }}
        >
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
