import React from "react";
import { Row } from "react-bootstrap";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { fileModel } from "../../../../../models/dataset";
import { parseBytes } from "../../../../../utils/utils";

interface dataSetFilesProps {
  filesList: fileModel[] | null;
}

const DatasetFiles = (props: dataSetFilesProps) => {
  const files = props.filesList;
  const fileFormats: string[] = [];
  var totalSize: number = 0;
  if (files !== null) {
    files.map((file) => {
      var fileFormat = fileFormats.find((x) => x === file.format);
      totalSize += Number(file.size);
      if (!fileFormat) fileFormats.push(file.format);
      return null;
    });
  }

  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faFileLines}/>}
      content={
        <Row>
          <p className="mb-0">
            <strong>File summary</strong>
            <br />
          </p>
          {files !== null ? (
            <div>
              <p className="mb-0">{files.length} Files</p>
              <ul className="mb-1 ps-4 ms-3">
                {fileFormats.map((format) => {
                  var formatSize: number = 0;
                  const filteredFiles = files.filter(
                    (file) => file.format === format
                  );
                  filteredFiles.map(
                    (file) => (formatSize = formatSize + Number(file.size))
                  );
                  return (
                    <li key={filteredFiles.length}>
                      {filteredFiles.length}&nbsp;{format.toUpperCase()}
                      &nbsp;files&nbsp;({parseBytes(formatSize)})
                    </li>
                  );
                })}
              </ul>
              <p className="mb-0">{parseBytes(totalSize)} total size</p>
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
