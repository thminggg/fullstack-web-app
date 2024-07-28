import { Modal } from "flowbite-react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_PARAMS } from "../../common/const";
import SortCard from "./SortCard";

const SortingModal = ({
  sortModal,
  setSortModal,
}: {
  sortModal: boolean;
  setSortModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <Modal
      dismissible
      popup
      show={sortModal}
      onClose={() => setSortModal(false)}
    >
      <Modal.Header>Sorting</Modal.Header>
      <Modal.Body>
        <SortCard title={SEARCH_PARAMS.PRICE} searchParams={searchParams} />
        <SortCard title={SEARCH_PARAMS.SIZE} searchParams={searchParams} />
      </Modal.Body>
      <Modal.Footer>
        <button
          className="ml-auto"
          onClick={() => {
            setSearchParams(searchParams);
            setSortModal(false);
          }}
        >
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default SortingModal;
