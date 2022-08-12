import React, { Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { scrollUp, handleFilterAndSearch } from "../../../../utils/utils";
import { searchResponseModel } from "../../../../models/dataset";
import { facetFilterModel } from "../../../../models/facets";

interface dataSetPaginationProps {
  dsCount: number;
  setSearchResults: Dispatch<SetStateAction<searchResponseModel | null>>;
  searchKeyword: string;
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
  filterDict: facetFilterModel[];
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  searchParams: any;
  setSearchParams: any;
  setFilterDict: Dispatch<SetStateAction<facetFilterModel[]>>;
}

const DatasetPagination = (props: dataSetPaginationProps) => {
  let pageCount = Math.ceil(props.dsCount / props.limit);
  let navigate = useNavigate();
  const handlePageClick = (data: any) => {
    let skip = data.selected * props.limit;
    navigate(
      handleFilterAndSearch(
        props.setSearchResults,
        props.filterDict,
        props.searchKeyword,
        props.limit,
        skip,
        data.selected,
        props.setPage,
        props.setFilterDict,
        null
      )
    );
  };

  return (
    <div className="p-1" onClick={scrollUp}>
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-left my-0"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLabel={"..."}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        forcePage={props.page === 0 ? 0 : props.page - 1}
      />
    </div>
  );
};

export default DatasetPagination;
