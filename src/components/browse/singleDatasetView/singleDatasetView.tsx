import {
  faArrowTurnUp,
  faCircleExclamation,
  faKey,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getDatasetDetails, querySearchService } from "../../../api/browse";
import {
  datasetEmbeddedModel,
  searchResponseModel,
} from "../../../models/dataset";
import SingleDatasetViewAccordion from "./singleDatasetViewAccordion/singleDatasetViewAccordion";
import SingleDatasetViewSummary from "./singleDatasetViewSummary/singleDatasetViewSummary";
import SingleDatasetViewTabs from "./singleDatasetViewTabs/singleDatasetViewTabs";
import { useNavigate } from "react-router-dom";
import DataRequestModal from "../dataset/datasetAccordion/datasetSummary/dataRequestModal/dataRequestModal";
import { getDACEmailId } from "../../../utils/utils";

const SingleDatasetView = () => {
  let accessionId: string | null | undefined = null;
  const { id } = useParams();
  accessionId = id;

  let paramId: string | null | undefined = null;

  const [searchResults, setSearchResults] =
    useState<searchResponseModel | null>(null);
  const [queried, setQueried] = useState<boolean>(false);

  const [details, setDetails] = useState<datasetEmbeddedModel | null>(null);

  useEffect(() => {
    const getHits = (accessionId: string | null | undefined, key: string) => {
      if (accessionId && accessionId !== null && !queried) {
        setQueried(true);
        querySearchService(
          setSearchResults,
          [{ key: key, value: accessionId }],
          "*",
          0,
          1,
          "Dataset"
        );
      }
    };
    const getDetails = (datasetId: string | undefined) => {
      if (datasetId && paramId) {
        getDatasetDetails(datasetId, true, setDetails);
      }
    };
    const processHits = (searchResults: searchResponseModel | null) => {
      if (searchResults && searchResults !== null && searchResults.count >= 1) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        paramId = searchResults.hits[0].id;
        getDetails(paramId);
      } else if (searchResults?.count === -1) {
        paramId = undefined;
      }
    };
    getHits(accessionId, "ega_accession");
    if (searchResults?.count === 0) {
      getHits(accessionId, "accession");
    }
    processHits(searchResults);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchResults, paramId]);

  const [show, setShow] = useState(false);
  const [copyEmail, setCopyEmail] = useState<string>("helpdesk@ghga.de");
  const handleClose = () => setShow(false);

  var dacFormLink: string | null = null;

  let navigate = useNavigate();

  const handleOpen = () => {
    setCopyEmail(
      details !== null && details ? getDACEmailId(details) : "helpdesk@ghga.de"
    );
    setShow(true);
  };

  return (
    <div className="py-4 mx-auto w-75 px-5">
      {searchResults === null ? (
        <div className="fs-5">
          <Spinner animation="border" variant="primary" size="sm" />
          &nbsp;Dataset details loading, please wait...
        </div>
      ) : searchResults.count === -1 ||
        accessionId === undefined ||
        paramId === undefined ? (
        <div className="fs-4 fw-bold">
          <FontAwesomeIcon icon={faCircleExclamation} className="text-danger" />
          &nbsp; Error loading dataset details!
        </div>
      ) : searchResults.count === 0 ? (
        <div className="fs-4 fw-bold">
          <FontAwesomeIcon icon={faCircleExclamation} className="text-danger" />
          &nbsp; Dataset not found!
        </div>
      ) : details === null ? (
        <div className="fs-5">
          <Spinner animation="border" variant="primary" size="sm" />
          &nbsp;Dataset details loading, please wait...
        </div>
      ) : (
        <>
          <Button
            onClick={() =>
              navigate.length <= 2 ? navigate("/browse") : navigate(-1)
            }
            variant="white"
            className="text-secondary mb-3"
          >
            <FontAwesomeIcon
              icon={faArrowTurnUp}
              transform="rotate-270 grow-10 flip-v"
            />
          </Button>
          <Button
            className="fs-8 float-end mb-3 ms-4 text-white shadow-md-dark"
            variant="secondary"
            onClick={() => handleOpen()}
            style={{ width: "105px" }}
          >
            <Row className="p-0 m-0 align-items-center text-start">
              <Col className="p-0 m-0 col-3 ">
                <FontAwesomeIcon icon={faKey} />
              </Col>
              <Col className="p-0 m-0 lh-1">
                <strong>Request Access</strong>
              </Col>
            </Row>
          </Button>
          {details.ega_accession !== null ? (
            <Button
              href={
                "https://ega-archive.org/datasets/" +
                details.ega_accession
              }
              target="_blank"
              variant="white"
              className="fs-8 mb-3 float-end text-secondary shadow-md-dark text-start border-secondary"
              style={{ width: "115px" }}
            >
              <Row className="p-0 m-0 align-items-center text-start">
                <Col className="p-0 m-0 col-3 ">
                  <FontAwesomeIcon icon={faLink} />
                </Col>
                <Col className="p-0 m-0 lh-1">
                  <strong>Visit EGA Website</strong>
                </Col>
              </Row>
            </Button>
          ) : (
            <div />
          )}
          <DataRequestModal
            accession={details.ega_accession !== null ? details.ega_accession : details.accession}
            copyEmail={copyEmail}
            show={show}
            handleClose={handleClose}
            dacFormLink={dacFormLink}
          />
          <SingleDatasetViewSummary details={details} />
          <SingleDatasetViewTabs details={details} />
          <SingleDatasetViewAccordion details={details} />
        </>
      )}
    </div>
  );
};

export default SingleDatasetView;
