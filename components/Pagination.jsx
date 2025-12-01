"use client";

import { useRouter } from "next/navigation";

function Pagination({ page, totalPages }) {
  const router = useRouter();

  const goToPage = (newPage) => {
    router.push(`/properties?page=${newPage}`);
  };

  return (
    <div className="flex justify-center mt-6 gap-2">
      <button
        onClick={() => goToPage(Math.max(page - 1, 1))}
        disabled={page === 1}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Prev
      </button>
      <span className="px-4 py-2">{page} / {totalPages}</span>
      <button
        onClick={() => goToPage(Math.min(page + 1, totalPages))}
        disabled={page === totalPages}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
