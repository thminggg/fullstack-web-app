import styles from "./TourBooking.module.css";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DatePickerButton = () => (
  <button className={`py-12 rounded-lg ${styles.datePickerBtn}`}>
    Button 1
  </button>
);

const DatePicker = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollRight = () => {
    // Assuming each DatePickerButton has a fixed width (e.g., 33%)
    const buttonWidth = 33;
    const newPosition = scrollPosition + buttonWidth;

    // Set the new scroll position, but ensure it doesn't go beyond the content width
    setScrollPosition(Math.min(newPosition, 100 - buttonWidth)); // 100 is the total width of the container
  };

  return (
    <div className="w-full relative">
      <button className={`h-full left-0 ${styles.arrow}`}>
        <FaArrowLeft />
      </button>
      <button className={`h-full right-0 ${styles.arrow}`}>
        <FaArrowRight />
      </button>
      <div className={`${styles.datePicker}`}>
        <DatePickerButton />
        <DatePickerButton />
        <DatePickerButton />
        <DatePickerButton />
        <DatePickerButton />
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
    <div className="flex flex-col justify-center bg-white shadow-lg rounded-lg p-6 gap-6">
      <div className="font-bold text-center text-3xl">Schedule a tour</div>
      <div className="text-center text-gray-500">Tour with a buyer's agent</div>
      <DatePicker />
    </div>
  );
}
