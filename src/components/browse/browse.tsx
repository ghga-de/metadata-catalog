import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import DatasetList from "./datasetList/datasetList";
import Sidebar from "./sidebar/sidebar";
import { searchResponseModel, hitModel } from "../../models/dataset";
import { facetFilterModel, facetModel } from "../../models/facets";
import { querySearchService } from "../../api/browse";
import { getFilterParams } from "../../utils/utils";
import DatasetListHeader from "./datasetList/datasetListHeader";

const Browse = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [page, setPage] = React.useState(
    parseInt(searchParams.get("p") || "0")
  );

  const [limit, setLimit] = React.useState(10);
  let skip = page === 0 ? 0 : (page - 1) * limit;

  let filterParams = getFilterParams(searchParams.get("f")) || [];

  const [filterDict, setFilterDict] =
    React.useState<facetFilterModel[]>(filterParams);

  const [searchKeyword, setSearchKeyword] = React.useState(
    searchParams.get("q") || ""
  );
  const [searchResults, setSearchResults] =
    React.useState<searchResponseModel | null>(null);

  const [appliedFilterDict, setAppliedFilterDict] = React.useState<
    facetFilterModel[]
  >([]);

  const [check, setCheck] = React.useState<Map<string, boolean>>(
    new Map<string, boolean>()
  );

  React.useEffect(
    () => {
      const getData = () => {
        querySearchService(
          setSearchResults,
          filterDict,
          searchKeyword,
          skip,
          limit,
          "Dataset"
        );
      };
      getData();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [limit]
  );

  var dsList: hitModel[] | null = null;
  var facetList: facetModel[] | null = null;
  var dsCount: number = 0;

  if (searchResults !== null) {
    if (searchResults.hits.length > 0 || searchResults.count === -1) {
      dsList = searchResults.hits;
      facetList = searchResults.facets;
      dsCount = searchResults.count;
    } else {
      dsList = [];
      facetList = [];
      dsCount = 0;
    }
  }

  return (
    <Container className="mt-4">
      <Row>
        <DatasetListHeader
          dsCount={dsCount}
          searchParams={searchParams}
          facets={facetList}
          setSearchResults={setSearchResults}
          limit={limit}
          skip={skip}
          setSearchKeyword={setSearchKeyword}
          filterDict={filterDict}
          setFilterDict={setFilterDict}
          searchKeyword={searchKeyword}
          setAppliedFilterDict={setAppliedFilterDict}
          appliedFilterDict={appliedFilterDict}
          check={check}
          setPage={setPage}
        />
      </Row>
      <Row>
        <Col lg={3} md={3} sm={3} xl={3} xs={3} xxl={3}>
          <Sidebar
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
            facetList={facetList}
            setSearchResults={setSearchResults}
            setFilterDict={setFilterDict}
            filterDict={filterDict}
            limit={limit}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            page={page}
            setPage={setPage}
            setAppliedFilterDict={setAppliedFilterDict}
            appliedFilterDict={appliedFilterDict}
            setCheck={setCheck}
            check={check}
          />
        </Col>
        <Col lg={9} md={9} sm={9} xl={9} xs={9} xxl={9}>
          <DatasetList
            searchKeyword={searchKeyword}
            setSearchResults={setSearchResults}
            dsCount={dsCount}
            dsList={dsList}
            filterDict={filterDict}
            limit={limit}
            setLimit={setLimit}
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            page={page}
            setPage={setPage}
            facets={facetList}
            skip={skip}
            setFilterDict={setFilterDict}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Browse;
