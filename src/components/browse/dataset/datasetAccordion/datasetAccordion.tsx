import React, { useState } from "react";
import { Accordion, Col } from "react-bootstrap";
import { getDatasetSummary } from "../../../../api/browse";
import { datasetSummaryModel, hitModel } from "../../../../models/dataset";
import DatasetSummary from "./datasetSummary/datasetSummary";

interface dataSetListProps {
  dsList: hitModel[];
}

const DatasetAccordion = (props: dataSetListProps) => {
  const [summary, setSummary] = useState<datasetSummaryModel | null | undefined>(null)
  const [summaryMap, setSummaryMap] = useState<Map<string, datasetSummaryModel | null | undefined>>(
    new Map<string, datasetSummaryModel | null>())
  const getDetails = (datasetId: string) => {
    if (summaryMap.get(datasetId) === undefined) {
      getDatasetSummary(datasetId, setSummary);
      setSummaryMap(summaryMap.set(datasetId, null))
    }
  };

  if (summary !== null && summary !== undefined && summaryMap.get(summary.id) === null) {
    setSummaryMap(summaryMap.set(summary.id, summary))
  }

  return (
    <div>
      <Accordion alwaysOpen className="mt-1 fs-7 me-3">
        {props.dsList.map((hit, index) => (
          <Accordion.Item
            key={index}
            eventKey={hit.id}
            className="mb-3 border border-1 rounded-0"
            title={hit.content.title}
          >
            <Accordion.Button
              className="bg-light align-items-start fs-7 text-break py-2 text-black"
              onClick={() => getDetails(hit.id)}
            >
              <Col lg={3} md={3} sm={3} xl={3} xs={3} xxl={3}>
                {hit.content.accession}
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
            <Accordion.Body>
              <DatasetSummary hit={hit} summary={summaryMap.get(hit.id)} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default DatasetAccordion;
