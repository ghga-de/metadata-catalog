import React from "react";
import { Row } from "react-bootstrap";
import DatasetDetailsLayout from "./datasetDetailsLayout/datasetDetailsLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVial,
  faMars,
  faVenus,
  faGenderless,
} from "@fortawesome/free-solid-svg-icons";
import { sampleModel } from "../../../../../models/dataset";

interface dataSetSamplesProps {
  samplesList: sampleModel[] | null;
}

const DatasetSamples = (props: dataSetSamplesProps) => {
  const samples = props.samplesList;
  const sexes = { female: "female", male: "male" };
  var countFemale: number = 0;
  var countMale: number = 0;
  var countUnknown: number = 0;

  const sampleTissues: string[] = [];
  const samplePhenotypes: string[] = [];

  if (samples !== null) {
    countFemale += samples.filter(
      (sample) => sample.has_individual.sex === sexes.female
    ).length;
    countMale += samples.filter(
      (sample) => sample.has_individual.sex === sexes.male
    ).length;
    countUnknown += samples.filter(
      (sample) =>
        sample.has_individual.sex !== sexes.male &&
        sample.has_individual.sex !== sexes.female
    ).length;
    samples.map((sample) => {
      if (sample.tissue !== null) {
        var sampleTissue = sampleTissues.find((x) => x === sample.tissue);
        if (!sampleTissue) sampleTissues.push(sample.tissue);
      }
      if (sample.has_individual.has_phenotypic_feature !== null) {
        sample.has_individual.has_phenotypic_feature.map((feature) => {
          if (feature.name !== null) {
            var samplePhenotype = samplePhenotypes.find(
              (x) => x === feature.name
            );
            if (!samplePhenotype) samplePhenotypes.push(feature.name);
          }
          return null;
        });
      }
      return null;
    });
  }

  return (
    <DatasetDetailsLayout
      icon={<FontAwesomeIcon icon={faVial} />}
      content={
        <Row>
          <p className="mb-0">
            <strong>Sample info</strong>
            <br />
          </p>
          {samples !== null ? (
            <div>
              <p className="mb-0">
                <strong>{samples.length}</strong>&nbsp;Samples (Sex:{" "}
                <span title={countFemale + " Female"}>
                  {countFemale}
                  &nbsp;
                  <FontAwesomeIcon icon={faVenus} />
                </span>{" "}
                /{" "}
                <span title={countMale + " Male"}>
                  {countMale}
                  &nbsp;
                  <FontAwesomeIcon icon={faMars} />
                </span>{" "}
                /{" "}
                <span title={countUnknown + " Unknown"}>
                  {countUnknown}
                  &nbsp;
                  <FontAwesomeIcon icon={faGenderless} />
                </span>{" "}
                )
                <br />
                <strong>{sampleTissues.length}</strong>&nbsp;Tissues:{" "}
                {sampleTissues.length > 0
                  ? sampleTissues.map((tissues) => tissues)
                  : "N/A"}
                <br />
                <strong>{samplePhenotypes.length}</strong>&nbsp;Phenotypes:{" "}
                {samplePhenotypes.length > 0
                  ? samplePhenotypes.map((phenotypes) => phenotypes)
                  : "N/A"}
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
