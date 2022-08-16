import React from "react";
import { Row } from "react-bootstrap";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { fileSummaryModel } from "../../../../../models/dataset";
import { parseBytes } from "../../../../../utils/utils";

interface dataSetFilesProps {
  files: fileSummaryModel | null;
}

const DatasetFiles = (props: dataSetFilesProps) => {
  const getFormats = (format: { [key: string]: number } | undefined) => {
    let formats: string[] = []
    for (let item in format) {
      let value = format[item]
      formats.push(item + " : " + value + "\n")
    }
    return formats
  };

  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faFileLines} />}
      content={
        <Row>
          <p className="mb-0">
            <strong>File summary</strong>
            <br />
          </p>
          {props.files !== null ? (
            <div>
              <p className="mb-0">{props.files.count} Files</p>
              <ul className="mb-0">
                {getFormats(props.files.stats?.format).map((x) => {
                  return (<li key={x}>{x}</li>)
                })}
              </ul>
              <p className="mb-0">{parseBytes(props.files.stats?.size)} total size</p>
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
