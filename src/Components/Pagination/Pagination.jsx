import React from 'react';
import './Pagination.css'; 

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="pagination_nav">
            <ul className="pagination_list">
                {pageNumbers.map(number => (
                    <li key={number} className="pagination_item">
                        <p onClick={() => paginate(number)}  className="pagination_link">
                            {number}
                        </p>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;