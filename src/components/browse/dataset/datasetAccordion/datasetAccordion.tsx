import React, { useState } from "react";
import { Accordion, Col, Row } from "react-bootstrap";
import { getDatasetSummary } from "../../../../api/browse";
import {
  datasetDetailsSummaryModel,
  hitModel,
} from "../../../../models/dataset";
import DatasetSummary from "./datasetSummary/datasetSummary";

interface dataSetListProps {
  dsList: hitModel[];
}

const DatasetAccordion = (props: dataSetListProps) => {
  const [summary, setSummary] = useState<
    datasetDetailsSummaryModel | null | undefined
  >(null);
  const [summaryMap, setSummaryMap] = useState<
    Map<string, datasetDetailsSummaryModel | null | undefined>
  >(new Map<string, datasetDetailsSummaryModel | null>());
  const getDetails = (datasetId: string) => {
    if (summaryMap.get(datasetId) === undefined) {
      getDatasetSummary(datasetId, setSummary);
      setSummaryMap(summaryMap.set(datasetId, null));
    }
  };

  if (
    summary !== null &&
    summary !== undefined &&
    summaryMap.get(summary.id) === null
  ) {
    setSummaryMap(summaryMap.set(summary.id, summary));
  }

  return (
    <Row>
      <Accordion
        alwaysOpen
        className="mt-1 me-lg-3 px-0 ps-lg-2 pe-lg-3 ms-lg-1"
      >
        {props.dsList.map((hit, index) => (
          <Accordion.Item
            key={index}
            eventKey={hit.id}
            className="mb-3 border border-1 rounded-0"
            title={hit.content.title}
          >
            <Accordion.Button
              className="bg-light align-items-start text-break py-2 px-1 px-lg-2 text-black"
              onClick={() => getDetails(hit.id)}
            >
              <Col xs={5} sm={3}>
                {hit.content.ega_accession !== null
                  ? hit.content.ega_accession
                  : hit.content.accession}
              </Col>
              <Col className="pe-2" style={{ height: "42px" }}>
                <div
                  className="overflow-hidden"
                  style={{
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    lineClamp: "2",
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {hit.content.title}
                </div>
              </Col>
            </Accordion.Button>
            <Accordion.Body className="p-2">
              <DatasetSummary hit={hit} summary={summaryMap.get(hit.id)} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Row>
  );
};

export default DatasetAccordion;
