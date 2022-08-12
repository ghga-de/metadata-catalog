import React, { Dispatch, SetStateAction } from "react";
import { Badge, Row, Col, CloseButton } from "react-bootstrap";
import { facetFilterModel, facetModel } from "../../../models/facets";
import { searchResponseModel } from "../../../models/dataset";
import { useNavigate } from "react-router-dom";
import { handleFilterAndSearch } from "../../../utils/utils";
import { querySearchService } from "../../../api/browse";

interface datasetHeaderProps {
  dsCount: number;
  searchParams: URLSearchParams;
  facets: facetModel[] | null;
  setSearchResults: Dispatch<SetStateAction<searchResponseModel | null>>;
  filterDict: facetFilterModel[];
  setSearchKeyword: Dispatch<SetStateAction<string>>;
  limit: number;
  skip: number;
  setFilterDict: Dispatch<SetStateAction<facetFilterModel[]>>;
  searchKeyword: string;
  setAppliedFilterDict: Dispatch<SetStateAction<facetFilterModel[]>>;
  appliedFilterDict: facetFilterModel[];
  check: Map<string, boolean>;
  setPage: Dispatch<SetStateAction<number>>;
}

const DatasetHeader = (props: datasetHeaderProps) => {
  const navigate = useNavigate();

  const [searchResults, setSearchResults] =
    React.useState<searchResponseModel | null>(null);
  React.useEffect(() => {
    const getData = () => {
      querySearchService(setSearchResults, [], "", 0, 1, "Dataset");
    };
    getData();
  }, []);

  var listOfAllFacets: facetModel[] | null = null;
  if (searchResults !== null) {
    if (searchResults.hits.length > 0 || searchResults.count === -1) {
      listOfAllFacets = searchResults.facets;
    } else {
      listOfAllFacets = [];
    }
  }

  const getFilterParamsList = () => {
    let filterParamsList = [];
    let searchParams = props.searchParams.get("f");
    if (searchParams !== undefined && searchParams !== null) {
      let searchParamsList = searchParams.split(";");
      for (var item of searchParamsList) {
        const itemKey = item.split(":")[0];
        var itemPretty = itemKey + "|" + item.replace(":", ": ");
        if (listOfAllFacets !== null) {
          const findResult: facetModel | undefined = listOfAllFacets.find(
            (x) => x.key === itemKey
          );
          if (findResult !== undefined) {
            var facetName = findResult.name;
            if (facetName !== undefined) {
              itemPretty =
                findResult.key + "|" + facetName + ": " + item.split(":")[1];
            }
          }
        }
        filterParamsList.push(itemPretty);
      }
    }
    return filterParamsList;
  };

  const clearFilter = (idx: number, key: string) => {
    props.filterDict.splice(idx, 1);
    const itemKey = key.split("|")[0] + ":" + key.split(": ")[1];
    const splicedAppliedFilterDict = props.appliedFilterDict.filter(
      (x) => x.value !== itemKey.split(":")[1]
    );
    props.setAppliedFilterDict(splicedAppliedFilterDict);
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
        null
      )
    );
    props.check.set(itemKey, false);
  };

  return (
    <Row className="mt-1">
      <Col lg={7} md={7} sm={7} xl={7} xs={7} xxl={7} className="ps-3 offset-3">
        <div className="ps-3 pe-0">
          {props.searchParams.get("q") !== undefined &&
            props.searchParams.get("q") !== null ? (
            <Badge
              key={props.searchParams.get("q")}
              className="py-1 m-0 me-2 overflow-hidden fs-9 bg-white text-black border border-secondary fw-normal"
              style={{
                maxWidth: "200px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              <span>
                <CloseButton
                  className="pt-2"
                  onClick={() => {
                    props.setSearchKeyword("");
                    navigate(
                      handleFilterAndSearch(
                        props.setSearchResults,
                        props.filterDict,
                        "",
                        props.limit,
                        0,
                        0,
                        props.setPage,
                        props.setFilterDict,
                        null
                      )
                    );
                  }}
                />
                <span className="px-1 mb-0">
                  Keyword: {props.searchParams.get("q")}
                </span>
              </span>
            </Badge>
          ) : (
            <></>
          )}
          {getFilterParamsList().map((item, idx) => (
            <Badge
              key={item.split("|")[1]}
              className="py-1 m-0 me-2 overflow-hidden text-black fs-9 border text-capitalize bg-white border-secondary fw-normal"
              style={{
                maxWidth: "200px",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              title={item.split("|")[1]}
            >
              <span>
                <CloseButton
                  onClick={() => clearFilter(idx, item)}
                  className="pt-2"
                />
                <span className="px-1 mb-0">{item.split("|")[1]}</span>
              </span>
            </Badge>
          ))}
        </div>
      </Col>
      <Col lg={2} md={2} sm={2} xl={2} xs={2} xxl={2} className="text-end pe-4">
        <Badge className="py-2 px-2 bg-primary me-1">
          {props.searchParams.get("f") !== undefined &&
            props.searchParams.get("f") !== null
            ? "Datasets Found:"
            : "Total Datasets:"}
          &nbsp;{props.dsCount !== -1 ? props.dsCount : 0}
        </Badge>
      </Col>
    </Row>
  );
};

export default DatasetHeader;
