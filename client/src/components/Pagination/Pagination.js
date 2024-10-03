import React from 'react';
import './_pagination.scss';
import { ReactComponent as LeftArrow } from './page-img/left-arrow.svg';
import { ReactComponent as RightArrow } from './page-img/right-arrow.svg';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const handleClick = (page) => {
        onPageChange(page);
    };

    return (
        <div className="pagination">
            <button
                onClick={() => handleClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="arrow-button"
            >
                <LeftArrow />
            </button>
            {[...Array(totalPages)].map((_, index) => (
                <button
                    key={index + 1}
                    onClick={() => handleClick(index + 1)}
                    className={`page-button ${currentPage === index + 1 ? 'active' : ''}`}
                >
                    {index + 1}
                </button>
            ))}
            <button
                onClick={() => handleClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="arrow-button"
            >
                <RightArrow />
            </button>
        </div>
    );
};

export default Pagination;