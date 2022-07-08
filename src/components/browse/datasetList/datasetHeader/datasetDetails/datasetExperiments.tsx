import React from "react";
import { Row } from "react-bootstrap";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { experimentModel, hitModel } from "../../../../../models/dataset";


interface dataSetExperimentsProps {
  experimentsList: experimentModel[] | null;
  hit: hitModel;
}

const DatasetExperiments = (props: dataSetExperimentsProps) => {
  const experiments = props.experimentsList;
  const protocols: Map<string, number> = new Map<string, number>();
  if (experiments !== null) {
    experiments.map((exp) => {
      if (exp.has_protocol !== null) {
        exp.has_protocol.map((schema) => {
          if (schema.instrument_model !== null && schema.instrument_model !== undefined) {
            var count = protocols.get(schema.instrument_model) !== undefined ? protocols.get(schema.instrument_model)! : 0;
            protocols.set(schema.instrument_model, count + 1)
          }
          return null;
        });
      }
      return null;
    });
  }


  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faFlask} />}
      content={
        <Row>
          <p className="mb-0">
            <strong>Experiment info</strong>
          </p>
          <br />
          <p className="mb-0">Experiments: {experiments !== null ? experiments.length : "0"} total</p>
          <br />
          <p className="mb-0">Dataset type:&nbsp;{props.hit.content.type}</p>
          <br />
          <p className="mb-0">Protocols:&nbsp;</p>
          <ul className="mb-1 ps-4 ms-3">
            {experiments !== null
              ? protocols.size > 0
                ?
                Array.from(protocols.entries()).map((item, index) => {
                  return <div key={index}>
                    <li key={index}>
                      <span key={index}> {item[0]} : {item[1]} </span>
                    </li>
                  </div>;
                })
                : "N/A"
              : "N/A"}
          </ul>
        </Row>
      }
    />
  );
};

export default DatasetExperiments;
