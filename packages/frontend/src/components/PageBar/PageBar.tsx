import type { CustomFlowbiteTheme } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { useSearchParams } from "react-router-dom";

const customTheme: CustomFlowbiteTheme["pagination"] = {
  pages: {
    base: "flex items-center -space-x-px justify-center",
    selector: {
      base: "w-6 md:w-10 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 enabled:dark:hover:bg-gray-700 enabled:dark:hover:text-white",
      active:
        "bg-amber-50 text-amber-600 hover:bg-amber-100 hover:text-amber-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
    },
  },
};

const EndButton = ({
  content,
  disabled,
  onPageChange,
}: {
  content: string;
  disabled: boolean;
  onPageChange: () => void;
}) => {
  const style = "border rounded p-2";
  return (
    <button
      className={disabled ? `cursor-not-allowed opacity-50 ${style}` : style}
      onClick={onPageChange}
    >
      {content}
    </button>
  );
};

export default function PageBar({
  currentPage,
  totalPages,
  className,
}: {
  currentPage: number;
  totalPages: number;
  className?: string;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const onPageChange = (page: number) => {
    searchParams.set("page", `${page}`);
    setSearchParams(searchParams);
  };
  const goFirstPage = () => {
    searchParams.set("page", `1`);
    setSearchParams(searchParams);
  };
  const goLastPage = () => {
    searchParams.set("page", `${totalPages}`);
    setSearchParams(searchParams);
  };

  return (
    <div className={`flex justify-between items-center ${className}`}>
      <EndButton
        content="<<"
        disabled={currentPage === 1}
        onPageChange={goFirstPage}
      />
      <Pagination
        theme={customTheme}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
      <EndButton
        content=">>"
        disabled={currentPage === totalPages}
        onPageChange={goLastPage}
      />
    </div>
  );
}
