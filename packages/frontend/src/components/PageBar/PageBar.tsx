import { Pagination } from "flowbite-react";
import { useSearchParams } from "react-router-dom";

export default function PageBar({
  currentPage,
  totalPages,
}: {
  currentPage: number;
  totalPages: number;
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const onPageChange = (page: number) => {
    searchParams?.set("page", `${page}`);
    setSearchParams(searchParams);
  };

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  );
}
