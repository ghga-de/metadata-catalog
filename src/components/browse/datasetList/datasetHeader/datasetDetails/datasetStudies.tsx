import React from "react";
import { Row } from "react-bootstrap";
import { studyModel } from "../../../../../models/dataset";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';

interface dataSetStudiesProps {
  studiesList: studyModel[] | null;
}

const DatasetStudies = (props: dataSetStudiesProps) => {
  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faBook}/>}
      content={
        props.studiesList !== null ? (
          <div>
            {props.studiesList.map((study, index) => {
              return (
                <Row key={index}>
                  <p className="mb-0">
                    <strong>
                      Part of study:&nbsp;
                      {study.accession}
                    </strong>
                    <br />
                    {study.title}
                    <br />
                    {study.has_publication !== null
                      ? study.has_publication.map((publication) => {
                          return (
                            <span>
                              Publication:&nbsp;
                              {publication.xref.map((xref) => {
                                return xref;
                              })}
                            </span>
                          );
                        })
                      : "Publications: None"}
                  </p>
                </Row>
              );
            })}
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
