import React from 'react';

interface Pagination {
  currentPage: number;
  totalPages: number;
  itemsPerPage?: number;
  maxVisiblePages?: number;
}
export default function Pagination({
  currentPage,
  totalPages,
  itemsPerPage,
  maxVisiblePages,
}: Pagination) {
  return <div>Ui goes here</div>;
}
