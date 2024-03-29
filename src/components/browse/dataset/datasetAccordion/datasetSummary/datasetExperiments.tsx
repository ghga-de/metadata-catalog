import React from "react";
import { Row } from "react-bootstrap";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { experimentSummaryModel } from "../../../../../models/dataset";
import { getItemsForSummary } from "../../../../../utils/utils";
import BoldenedSummaryDetails from "./boldenedSummaryDetails/boldenedSummaryDetails";

interface dataSetExperimentsProps {
  experiments: experimentSummaryModel | null;
}

const DatasetExperiments = (props: dataSetExperimentsProps) => {
  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faFlask} />}
      content={
        <Row>
          <p className="mb-0">
            <strong>Experiment info</strong>
          </p>
          <p className="mb-0">
            Experiments: <strong>{props.experiments?.count}</strong>{" "}
          </p>
          <div className="mb-0">
            Platforms:&nbsp;
            {props.experiments?.stats.protocol ? (
              <strong>
                {Object.keys(props.experiments?.stats.protocol).length}
              </strong>
            ) : (
              ""
            )}
            <ul>
              {getItemsForSummary(props.experiments?.stats.protocol).map(
                (x) => {
                  return <li key={x}>{<BoldenedSummaryDetails x={x} />}</li>;
                }
              )}
            </ul>
          </div>
        </Row>
      }
    />
  );
};

export default DatasetExperiments;
