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
import { getItemsForSummary } from "../../../../../utils/utils"

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
                <div className="mb-0">Tissues:
                  <ul>
                    {getItemsForSummary(props.samples.stats?.tissues).map((x) => {
                      return (<li key={x}>{x}</li>)
                    })}
                  </ul>
                </div>
                <br />
                <div className="mb-0">Phenotypes:
                  <ul>
                    {getItemsForSummary(props.samples.stats?.phenotypes).map((x) => {
                      return (<li key={x}>{x}</li>)
                    })}
                  </ul>
                </div>
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
