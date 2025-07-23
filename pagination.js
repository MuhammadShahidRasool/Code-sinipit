import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number} style={{ margin: '0 4px' }}>
            <button
              onClick={() => onPageChange(number)}
              style={{
                fontWeight: currentPage === number ? 'bold' : 'normal',
                background: currentPage === number ? '#eee' : 'transparent'
              }}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;