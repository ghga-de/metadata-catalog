import React from "react";
import { Row } from "react-bootstrap";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { experimentSummaryModel } from "../../../../../models/dataset";


interface dataSetExperimentsProps {
  experiments: experimentSummaryModel | null;
}

const DatasetExperiments = (props: dataSetExperimentsProps) => {
  const getProtocols = (protocol: { [key: string]: number } | undefined) => {
    let protocols: string[] = []
    for (let item in protocol) {
      let value = protocol[item]
      protocols.push(item + " : " + value)
    }
    return protocols
  };

  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faFlask} />}
      content={
        <Row>
          <p className="mb-0">
            <strong>Experiment info</strong>
          </p>
          <br />
          <p className="mb-0">Experiments: {props.experiments?.count} total</p>
          <br />
          <div className="mb-0">Protocols: <ul>
            {getProtocols(props.experiments?.stats.protocol).map((x) => {
              return (<li key={x}>{x}</li>)
            })}
          </ul>
          </div>
        </Row>
      }
    />
  );
};

export default DatasetExperiments;
