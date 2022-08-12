import React from "react";
import { studySummaryModel } from "../../../../../models/dataset";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

interface dataSetStudiesProps {
  study: studySummaryModel | null;
}

const DatasetStudies = (props: dataSetStudiesProps) => {
  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faBook} />}
      content={
        props.study !== null ? (
          <div>
            <p className="mb-0">
              <strong>
                Part of study:&nbsp;
                {props.study.stats?.accession}
              </strong>
              <br />
              EGA Accession: {props.study.stats?.ega_accession}
              <br />
            </p>
          </div>
        ) : (
          <p className="mb-0">
            <strong>No studies available.</strong>
          </p>
        )
      }
    />
  );
};

export default DatasetStudies;
