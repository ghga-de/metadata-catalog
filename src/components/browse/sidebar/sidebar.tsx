import React, { Dispatch, SetStateAction } from "react";
import Search from "./searchbar";
import Filter from "./filter";
import { Row, Col, Button } from "react-bootstrap";
import { facetModel, facetFilterModel } from "../../../models/facets";
import { searchResponseModel } from "../../../models/dataset";
import { querySearchService } from "../../../api/browse";
import { handleFilterAndSearch } from "../../../utils/utils";
import { URLSearchParamsInit, useNavigate } from "react-router-dom";
import { scrollUp } from "../../../utils/utils";

interface sidebarProps {
  facetList: facetModel[] | null;
  setSearchResults: Dispatch<SetStateAction<searchResponseModel | null>>;
  searchKeyword: string;
  limit: number;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
  setFilterDict: Dispatch<SetStateAction<facetFilterModel[]>>;
  filterDict: facetFilterModel[];
  searchParams: URLSearchParams;
  setSearchParams: (
    nextInit: URLSearchParamsInit,
    navigateOptions?: { replace?: boolean | undefined; state?: any } | undefined
  ) => void;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  setAppliedFilterDict: Dispatch<SetStateAction<facetFilterModel[]>>;
  appliedFilterDict: facetFilterModel[];
  setCheck: Dispatch<SetStateAction<Map<string, boolean>>>;
  check: Map<string, boolean>;
}

const Sidebar = (props: sidebarProps) => {
  let navigate = useNavigate();
  const skip = 0;

  React.useEffect(() => {
    const displayFilters = () => {
      if (props.check.size === 0) {
        for (var item of props.filterDict) {
          props.setCheck(props.check.set(item.key + ":" + item.value, true));
          props.setAppliedFilterDict(props.appliedFilterDict.concat(item));
        }
      }
    };
    displayFilters();
  });

  const handleClear = () => {
    querySearchService(
      props.setSearchResults,
      [],
      "*",
      skip,
      props.limit,
      "Dataset"
    );
    props.check.forEach((value: boolean, key: string) => {
      props.setCheck(props.check.set(key, false));
    });
    props.setFilterDict([]);
    props.setAppliedFilterDict([]);
    props.setSearchKeyword("");
    props.setPage(0);
    navigate(`?p=1`);
  };

  return (
    <div className="border rounded border-light p-2 mt-3">
      <Row>
        <Search
          searchKeyword={props.searchKeyword}
          setSearchKeyword={props.setSearchKeyword}
          setSearchResults={props.setSearchResults}
          limit={props.limit}
          searchParams={props.searchParams}
          filterDict={props.filterDict}
          setFilterDict={props.setFilterDict}
          setPage={props.setPage}
        />
      </Row>
      {props.facetList === null || props.facetList.length === 0 ? null : (
        <Row className="position-relative w-100 px-1 mx-0">
          {props.facetList
            .sort((a, b) => (b.key < a.key ? 1 : -1))
            .map((facet, index) => (
              <Filter
                facet={facet}
                key={index}
                check={props.check}
                setCheck={props.setCheck}
                searchKeyword={props.searchKeyword}
                appliedFilterDict={props.appliedFilterDict}
                setAppliedFilterDict={props.setAppliedFilterDict}
              />
            ))}
        </Row>
      )}
      <Row className="mb-2 mt-3 justify-content-end">
        <Col>
          <Button
            className="w-100 rounded border-2 shadow-md-dark"
            variant="outline-secondary"
            onClick={() => {
              handleClear();
              scrollUp();
            }}
          >
            Clear
          </Button>
        </Col>
        {props.facetList === null || props.facetList.length === 0 ? null : (
          <Col>
            <Button
              variant="secondary"
              className="w-100 rounded text-white border-2 shadow-md-dark"
              onClick={() => {
                navigate(
                  handleFilterAndSearch(
                    props.setSearchResults,
                    props.filterDict,
                    props.searchKeyword,
                    props.limit,
                    0,
                    0,
                    props.setPage,
                    props.setFilterDict,
                    props.appliedFilterDict
                  )
                );
                scrollUp();
              }}
            >
              Filter
            </Button>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default Sidebar;
