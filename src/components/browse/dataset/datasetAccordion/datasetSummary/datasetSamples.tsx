import React from "react";
import { Row } from "react-bootstrap";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVial,
  faMars,
  faVenus,
  faGenderless,
} from "@fortawesome/free-solid-svg-icons";
import { sampleSummaryModel } from "../../../../../models/dataset";

interface dataSetSamplesProps {
  samples: sampleSummaryModel | null;
}

const DatasetSamples = (props: dataSetSamplesProps) => {
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
              <p className="mb-0">
                <strong>{props.samples.count}</strong>&nbsp;Samples (Sex:{" "}
                <span title={props.samples.stats?.sex?.female + "Female"}>
                  {props.samples.stats?.sex?.female}
                  &nbsp;
                  <FontAwesomeIcon icon={faVenus} />
                </span>{" "}
                /{" "}
                <span title={props.samples.stats?.sex?.male + "Male"}>
                  {props.samples.stats?.sex?.male}
                  &nbsp;
                  <FontAwesomeIcon icon={faMars} />
                </span>{" "}
                /{" "}
                <span title={props.samples.stats?.sex?.unkown + "Unknown"}>
                  {props.samples.stats?.sex?.unkown}
                  &nbsp;
                  <FontAwesomeIcon icon={faGenderless} />
                </span>{" "}
                )
                <br />
                <strong>{props.samples.stats?.tissues}</strong>&nbsp;Tissues:{" "}
                <br />
                <strong>{props.samples.stats?.phenotypes}</strong>&nbsp;Phenotypes:{" "}
              </p>
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
