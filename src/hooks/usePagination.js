import { useState, useEffect } from "react";

export function usePagination(query) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

  function goToNextPage() {
    setPage((prevState) => prevState + 1);
  }

  function goPrevPage() {
    setPage((prevState) => prevState - 1);
  }

  function goToPage(pageNumber) {
    setPage(pageNumber);
  }

  function changePageSize(size) {
    setPageSize(size);
  }

  useEffect(() => {
    setPage(1);
  }, [query]);

  return { page, pageSize, goPrevPage, goToNextPage, goToPage, changePageSize };
}
