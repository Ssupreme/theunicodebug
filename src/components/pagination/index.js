import React from 'react';
import {PaginationWrap, PaginationList, PaginationItem, PaginationLink} from './pagination.stc'

const Pagination = ({currentPage, numberOfPages, rootPage}) => {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numberOfPages;
    const previousPage = currentPage - 1 === 1 ? rootPage : '/blog/page/' + (currentPage - 1).toString();
    const nextPage = '/blog/page/' + (currentPage + 1).toString(); 
    return (
        <PaginationWrap>
            <PaginationList>
                {isFirst ? (
                    <PaginationItem>
                        <PaginationLink className="prev" disabled={true} path={previousPage}>Prev</PaginationLink>
                    </PaginationItem>
                ) : (
                    <PaginationItem>
                        <PaginationLink className="prev" path={previousPage}>Prev</PaginationLink>
                    </PaginationItem>
                )}
                {Array.from({length: numberOfPages}, (_, i) => currentPage === i + 1 ? (
                    <PaginationItem key={`page-number-${i+1}`}>
                        <PaginationLink active="true" path={`/blog/${i === 0 ? '' : 'page/' + (i+1) }`}>
                            {i+1}
                        </PaginationLink>
                    </PaginationItem>
                ): (
                    <PaginationItem key={`page-number-${i+1}`}>
                        <PaginationLink path={`/blog/${i === 0 ? '' : 'page/' + (i+1) }`}>
                            {i+1}
                        </PaginationLink>
                    </PaginationItem> 
                ))}
                {isLast ? (
                    <PaginationItem>
                        <PaginationLink className="next" disabled={true} path={nextPage}>Next</PaginationLink>
                    </PaginationItem>
                ): (
                    <PaginationItem>
                        <PaginationLink className="next" path={nextPage}>Next</PaginationLink>
                    </PaginationItem>
                )}
            </PaginationList>
        </PaginationWrap>
    )
}

export default Pagination;