import React from "react";
import { Row } from "react-bootstrap";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { fileSummaryModel } from "../../../../../models/dataset";
import { parseBytes, getItemsForSummary } from "../../../../../utils/utils";
import BoldenedSummaryDetails from "./boldenedSummaryDetails/boldenedSummaryDetails";

interface dataSetFilesProps {
  files: fileSummaryModel | null;
}

const DatasetFiles = (props: dataSetFilesProps) => {


  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faFileLines} />}
      content={
        <Row>
          <p className="mb-0">
            <strong>File summary</strong>
          </p>
          {props.files !== null ? (
            <div>
              <p className="mb-0"><strong>{props.files.count}</strong> Files</p>
              <ul className="mb-0">
                {getItemsForSummary(props.files.stats?.format).map((x) => {
                  return (<li key={x} className="text-uppercase">{<BoldenedSummaryDetails x={x} />}</li>)
                })}
              </ul>
              <p className="mb-0"><strong>{parseBytes(props.files.stats?.size)}</strong> total size</p>
            </div>
          ) : (
            <p className="mb-0">0 Files</p>
          )}
        </Row>
      }
    />
  );
};

export default DatasetFiles;
