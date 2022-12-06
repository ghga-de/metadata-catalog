import React, { Dispatch, SetStateAction } from "react";
import DatasetPagination from "./datasetPagination/datasetPagination";
import DatasetAccordion from "./datasetAccordion/datasetAccordion";
import { hitModel, searchResponseModel } from "../../../models/dataset";
import { facetFilterModel, facetModel } from "../../../models/facets";
import { Col, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import { scrollUp } from "../../../utils/utils";

interface dataSetProps {
  dsCount: number;
  dsList: hitModel[] | null;
  setSearchResults: Dispatch<SetStateAction<searchResponseModel | null>>;
  searchKeyword: string;
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
  filterDict: facetFilterModel[];
  searchParams: any;
  setSearchParams: any;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  facets: facetModel[] | null;
  skip: number;
  setFilterDict: Dispatch<SetStateAction<facetFilterModel[]>>;
}

const DatasetList = (props: dataSetProps) => {
  var dsCount: number = props.dsCount;

  const PaginatedDataset = () => {
    return (
      <DatasetPagination
        setSearchResults={props.setSearchResults}
        searchKeyword={props.searchKeyword}
        limit={props.limit}
        setLimit={props.setLimit}
        dsCount={dsCount}
        filterDict={props.filterDict}
        page={props.page}
        setPage={props.setPage}
        searchParams={props.searchParams}
        setSearchParams={props.setSearchParams}
        setFilterDict={props.setFilterDict}
      />
    );
  };

  const Columns = () => {
    return (
      <Row className="mt-3 mb-3 ms-0 me-3 py-1 ps-2 bg-primary text-white">
        <Col lg={3} md={3} sm={3} xl={3} xs={3} xxl={3}>
          Dataset ID
        </Col>
        <Col className="pe-2 ps-0">Title</Col>
      </Row>
    );
  };

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    props.setLimit(parseInt(event.target.value));
    scrollUp();
  };

  return (
    <div className="bg-white p-2 ps-3 h-100 pt-0">
      {props.dsList === null ? (
        <div className="p-2 fs-4 my-3 fw-bold">
          <FontAwesomeIcon icon={faCircleInfo} className="text-info" />
          &nbsp; Loading datasets...
        </div>
      ) : props.dsCount === -1 ? (
        <div className="p-2 fs-3 my-3 fw-bold">
          <FontAwesomeIcon icon={faCircleExclamation} className="text-danger" />
          &nbsp; Error loading datasets!
        </div>
      ) : props.dsCount === 0 ? (
        <div className="p-2 fs-3 my-3 fw-bold">
          <FontAwesomeIcon icon={faCircleExclamation} className="text-danger" />
          &nbsp; No datasets found!
        </div>
      ) : (
        <>
          <div className="w-100">
            <Columns />
            <DatasetAccordion dsList={props.dsList} />
          </div>
          <Row className="mb-2 mt-5 w-100 pe-0 me-0">
            <Col>
              <PaginatedDataset />
            </Col>
            <Col
              lg={2}
              md={2}
              sm={2}
              xl={2}
              xs={2}
              xxl={2}
              className="ps-4 pe-0"
            >
              {(props.page - 1) * 50 <= props.dsCount ? (
                <Form.Select
                  value={props.limit}
                  onChange={(event) => handleSelect(event)}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </Form.Select>
              ) : (props.page - 1) * 25 <= props.dsCount ? (
                <Form.Select
                  value={props.limit}
                  onChange={(event) => handleSelect(event)}
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                </Form.Select>
              ) : (
                <Form.Select
                  value={props.limit}
                  onChange={(event) => handleSelect(event)}
                >
                  <option value="10">10</option>
                </Form.Select>
              )}
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default DatasetList;
