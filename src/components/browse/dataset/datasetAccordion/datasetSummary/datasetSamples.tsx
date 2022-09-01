import React from "react";
import { Button, Collapse, Row } from "react-bootstrap";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVial,
  faMars,
  faVenus,
  faGenderless,
} from "@fortawesome/free-solid-svg-icons";
import { sampleSummaryModel } from "../../../../../models/dataset";
import { getItemsForSummary } from "../../../../../utils/utils"

interface dataSetSamplesProps {
  samples: sampleSummaryModel | null;
}

const DatasetSamples = (props: dataSetSamplesProps) => {
  const [openPhenotypesList, setOpenPhenotypesList] = React.useState(false);

  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faVial} />}
      content={
        <Row>
          <p className="mb-0">
            <strong>Sample info</strong>
            <br />
          </p>
          {props.samples !== null ? (
            <div>
              <p className="mb-0">
                <strong>{props.samples.count}</strong>&nbsp;Samples (Sex:{" "}
                <span title={props.samples.stats?.sex?.female + "Female"}>
                  {props.samples.stats?.sex?.female}
                  &nbsp;
                  <FontAwesomeIcon icon={faVenus} />
                </span>{" "}
                /{" "}
                <span title={props.samples.stats?.sex?.male + "Male"}>
                  {props.samples.stats?.sex?.male}
                  &nbsp;
                  <FontAwesomeIcon icon={faMars} />
                </span>{" "}
                /{" "}
                <span title={props.samples.stats?.sex?.unkown + "Unknown"}>
                  {props.samples.stats?.sex?.unkown}
                  &nbsp;
                  <FontAwesomeIcon icon={faGenderless} />
                </span>{" "}
                )
                <br />
                <div className="mb-0"><strong>{(props.samples.stats?.tissues).length}</strong>&nbsp;Tissues:
                  <ul>
                    {getItemsForSummary(props.samples.stats?.tissues).map((x) => {
                      return (<li key={x} className="text-capitalize">{x}</li>)
                    })}
                  </ul>
                </div>
                <br />
                <div className="mb-0"><strong>{(props.samples.stats?.tissues).length}</strong>&nbsp;Phenotypes:
                  <p className="mb-0">
                    {getItemsForSummary(props.samples.stats?.phenotypes).slice(0, 3).map((x) => {
                      return (<p key={x} className="text-capitalize mb-1 ms-4" style={{ display: "list-item" }}>{x}</p>)
                    })}
                  </p>
                  <Collapse in={openPhenotypesList}>
                    <span id="extended-phenotypes" >
                      {getItemsForSummary(props.samples.stats?.phenotypes).slice(3).map((x) => {
                        return (<span key={x} className="text-capitalize mb-1 ms-4" style={{ display: "list-item" }}>{x}</span>)
                      })}
                    </span>
                  </Collapse>
                  <Button onClick={() => { setOpenPhenotypesList(!openPhenotypesList) }}
                    aria-controls="example-collapse-text"
                    aria-expanded={openPhenotypesList}
                    variant="link"
                    className="p-0 fs-8"
                  >
                    {openPhenotypesList ? <>See less ...</> : <>See full list ...</>}
                  </Button>
                </div>
              </p>
            </div>
          ) : (
            <p className="mb-0">No Samples</p>
          )}
        </Row>
      }
    />
  );
};

export default DatasetSamples;
