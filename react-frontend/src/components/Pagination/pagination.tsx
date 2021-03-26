import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const PaginationComponent = (props: { booksPerPage: number, totalBooks: number, activePage: number, paginate: (number: number) => void }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.totalBooks / props.booksPerPage); i++) {
        pageNumbers.push(<Pagination.Item key={i} active={props.activePage === i} onClick={() => props.paginate(i)}>
            {i}
        </Pagination.Item>);
    }
    return (
        <div>
            <Pagination>{pageNumbers}</Pagination>
        </div>
    )
}

export default PaginationComponent;
