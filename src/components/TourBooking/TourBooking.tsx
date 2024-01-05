import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "./TourBooking.module.css";

const TOUR_BUTTON_WIDTH = 105;
const NUM_OF_TOUR_BUTTON_PER_SECTION = 3;

const DatePickerButton = ({ date }: { date: string }) => (
  <button className={`py-12 rounded-lg ${styles.datePickerBtn}`}>{date}</button>
);

const handleStopScrolling = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
  document.getElementById(e.currentTarget.id)!.scrollLeft = 0;
};

const DatePicker = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // TODO: fetch number of tour days
  const tourDays = 10;

  const handleScrollLeft = () => {
    const newPosition = scrollPosition - TOUR_BUTTON_WIDTH;
    setScrollPosition(Math.max(newPosition, 0));
  };

  const handleScrollRight = () => {
    const newPosition = scrollPosition + TOUR_BUTTON_WIDTH;
    setScrollPosition(
      Math.min(
        newPosition,
        TOUR_BUTTON_WIDTH *
          Math.floor(tourDays / NUM_OF_TOUR_BUTTON_PER_SECTION)
      )
    );
  };

  return (
    <div className="w-full relative">
      <button
        className={`h-full left-0 ${styles.arrow}`}
        onClick={() => handleScrollLeft()}
      >
        <FaArrowLeft />
      </button>
      <button
        className={`h-full right-0 ${styles.arrow}`}
        onClick={() => handleScrollRight()}
      >
        <FaArrowRight />
      </button>
      <div
        id="date-picker-container"
        className={`w-full overflow-x-scroll ${styles.hiddenScrollBar}`}
        onScroll={handleStopScrolling}
      >
        <div
          className={`flex w-full ${styles.datePicker}`}
          style={{
            transform: `translateX(${-scrollPosition}%)`,
            transition: "transform 0.5s ease",
          }}
        >
          <DatePickerButton date="1" />
          <DatePickerButton date="2" />
          <DatePickerButton date="3" />
          <DatePickerButton date="4" />
          <DatePickerButton date="5" />
          <DatePickerButton date="6" />
          <DatePickerButton date="7" />
          <DatePickerButton date="8" />
          <DatePickerButton date="9" />
          <DatePickerButton date="10" />
        </div>
      </div>
    </div>
  );
};

export default function TourBooking({
  handleSetTourDate,
}: {
  handleSetTourDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
}) {
  return (
    <div className="flex flex-col justify-center bg-white shadow-lg rounded-lg p-6 gap-2">
      <div className="font-bold text-center text-3xl">Schedule a tour</div>
      <div className="text-center text-gray-500">Tour with a buyer's agent</div>
      <DatePicker />
    </div>
  );
}
