import React from "react";
import { Button, Collapse, Row, Badge } from "react-bootstrap";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVial,
  faMars,
  faVenus,
  faGenderless,
} from "@fortawesome/free-solid-svg-icons";
import { sampleSummaryModel } from "../../../../../models/dataset";
import { getItemsForSummary } from "../../../../../utils/utils";
import BoldenedSummaryDetails from "./boldenedSummaryDetails/boldenedSummaryDetails";

interface dataSetSamplesProps {
  samples: sampleSummaryModel | null;
}

const DatasetSamples = (props: dataSetSamplesProps) => {
  const [openPhenotypesList, setOpenPhenotypesList] = React.useState(false);

  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faVial} />}
      content={
        <Row>
          <p className="mb-0">
            <strong>Sample info</strong>
            <br />
          </p>
          {props.samples !== null ? (
            <div>
              <div className="mb-0">
                <strong>{props.samples.count}</strong>&nbsp;Samples (Sex:{" "}
                <span title={props.samples.stats?.sex?.female + " Female"}>
                  {props.samples.stats?.sex?.female}
                  &nbsp;
                  <FontAwesomeIcon icon={faVenus} />
                </span>{" "}
                /{" "}
                <span title={props.samples.stats?.sex?.male + " Male"}>
                  {props.samples.stats?.sex?.male}
                  &nbsp;
                  <FontAwesomeIcon icon={faMars} />
                </span>{" "}
                /{" "}
                <span title={props.samples.stats?.sex?.unkown + " Unknown"}>
                  {props.samples.stats?.sex?.unkown}
                  &nbsp;
                  <FontAwesomeIcon icon={faGenderless} />
                </span>{" "}
                )
                <br />
                <div className="my-0">
                  <p className="mb-0">
                    <strong>
                      {getItemsForSummary(props.samples.stats?.tissues).length}
                    </strong>{" "}
                    &nbsp;Tissues:
                  </p>
                  {getItemsForSummary(props.samples.stats?.tissues).map((x) => {
                    return (
                      <Badge
                        key={x}
                        className="bg-success text-capitalize fw-normal py-1 fs-9 mb-0 ms-4 mb-1"
                      >
                        {<BoldenedSummaryDetails x={x} />}
                      </Badge>
                    );
                  })}
                </div>
                <div className="mb-0">
                  <strong>
                    {getItemsForSummary(props.samples.stats?.phenotypes).length}
                  </strong>
                  &nbsp;Phenotypes:
                  <div className="mb-0">
                    {getItemsForSummary(props.samples.stats?.phenotypes)
                      .slice(0, 3)
                      .map((x) => {
                        return (
                          <Badge
                            key={x}
                            className="bg-primary py-1 text-capitalize fw-normal fs-9 mb-0 ms-4 d-table mb-1 text-break text-wrap text-start"
                          >
                            {<BoldenedSummaryDetails x={x} />}
                          </Badge>
                        );
                      })}
                  </div>
                  {getItemsForSummary(props.samples.stats?.phenotypes).length >
                  3 ? (
                    <>
                      <Collapse in={openPhenotypesList}>
                        <span id="extended-phenotypes">
                          {getItemsForSummary(props.samples.stats?.phenotypes)
                            .slice(3)
                            .map((x) => {
                              return (
                                <Badge
                                  key={x}
                                  className="bg-primary py-1 text-capitalize fw-normal fs-9 mb-0 ms-4 d-table mb-1 text-break text-wrap text-start"
                                >
                                  {<BoldenedSummaryDetails x={x} />}
                                </Badge>
                              );
                            })}
                        </span>
                      </Collapse>
                      <Button
                        onClick={() => {
                          setOpenPhenotypesList(!openPhenotypesList);
                        }}
                        aria-controls="example-collapse-text"
                        aria-expanded={openPhenotypesList}
                        variant="link"
                        className="p-0 fs-8 d-block"
                      >
                        {openPhenotypesList ? (
                          <>See less ...</>
                        ) : (
                          <>See full list ...</>
                        )}
                      </Button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p className="mb-0">No Samples</p>
          )}
        </Row>
      }
    />
  );
};

export default DatasetSamples;
