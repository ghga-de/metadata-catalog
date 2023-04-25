import React from "react";
import { studySummaryModel } from "../../../../../models/dataset";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

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
              <strong>Part of study:&nbsp;</strong>
              {props.study.stats.title !== null
                ? props.study.stats.title
                : props.study.stats?.accession}
            </p>
            <p className="mb-0">
              <strong>EGA Accession ID: </strong>
              {props.study.stats.ega_accession !== null
                ? props.study.stats.ega_accession
                : props.study.stats?.accession}
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
