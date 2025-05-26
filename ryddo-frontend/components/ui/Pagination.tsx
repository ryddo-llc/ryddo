import React from 'react';
import { GoArrowRight } from 'react-icons/go';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Don't render if only one page or no items
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const pages = [];
    const maxVisible = 3; // Show max 3 page numbers

    // Simple logic: show current page and adjacent pages
    let start = Math.max(1, currentPage - 1);
    const end = Math.min(totalPages, start + maxVisible - 1);

    // Adjust start if we're near the end
    if (end - start + 1 < maxVisible && start > 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  const visiblePages = getVisiblePages();
  const hasNextPage = currentPage < totalPages;

  return (
    <div className='flex items-center gap-1 '>
      {/* Page Numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`
            w-10 h-10 flex items-center justify-center text-sm font-medium rounded-md border transition-colors
            ${
              page === currentPage
                ? ' text-[#F92F7B] border-[#F92F7B]'
                : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
            }
          `}
        >
          {page}
        </button>
      ))}

      {/* Next Arrow */}
      {hasNextPage && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className='w-10 h-10 flex items-center justify-center text-[#F92F7B] bg-white border border-gray-200 rounded-md hover:bg-gray-50 transition-colors'
        >
          <GoArrowRight className='w-4 h-4' />
        </button>
      )}
    </div>
  );
}
