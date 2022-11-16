import {
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Accordion, Button, Table } from "react-bootstrap";
import { datasetEmbeddedModel, experimentEmbeddedModel, fileModel, sampleModel } from "../../../../models/dataset";
import { parseBytes } from "../../../../utils/utils";

interface SingleDatasetViewAccordionProps {
  details: datasetEmbeddedModel;
}

const SingleDatasetViewAccordion = (props: SingleDatasetViewAccordionProps) => {
  let fileSize = 0;

  const [sortExp, setSortExp] = useState<{ key: String; order: number }>({
    key: "accession",
    order: 0,
  });
  const [sortSamples, setSortSamples] = useState<{ key: String; order: number }>({
    key: "accession",
    order: 0,
  });
  const [sortFiles, setSortFiles] = useState<{ key: String; order: number }>({
    key: "name",
    order: 0,
  });
  let iconsDef = [faSort, faSortUp, faSortDown];

  const [sortedExp, setSortedExp] = useState<experimentEmbeddedModel[]>(Array.from(props.details.has_experiment))
  const [sortedSamples, setSortedSamples] = useState<sampleModel[]>(Array.from(props.details.has_sample))
  const [sortedFiles, setSortedFiles] = useState<fileModel[]>(Array.from(props.details.has_file))

  const SortExpTable = (key: String, order: number) => {
    setSortExp({ "key": key, "order": order })
    if (order !== 0) {
      switch (key) {
        case "accession":
          sortedExp.sort((a, b) =>
            a.ega_accession !== null && b.ega_accession !== null
              ? a.ega_accession > b.ega_accession ? 1 : -1
              : b.ega_accession !== null
                ? a.accession > b.ega_accession ? 1 : -1
                : a.ega_accession !== null
                  ? a.ega_accession > b.accession ? 1 : -1
                  : a.accession > b.accession ? 1 : -1
          );
          if (order === 2) {
            sortedExp.reverse()
          }
          setSortedExp(sortedExp)
          break;
        case "description":
          sortedExp.sort((a, b) =>
            a.description > b.description ? 1 : -1
          );
          if (order === 2) {
            sortedExp.reverse()
          }
          setSortedExp(sortedExp)
          break;
      }
    }
    else {
      setSortedExp(Array.from(props.details.has_experiment))
    }
  }

  const SortSamplesTable = (key: String, order: number) => {
    setSortSamples({ "key": key, "order": order })
    if (order !== 0) {
      switch (key) {
        case "accession":
          sortedSamples.sort((a, b) =>
            a.ega_accession !== null && b.ega_accession !== null
              ? a.ega_accession > b.ega_accession ? 1 : -1
              : b.ega_accession !== null
                ? a.accession > b.ega_accession ? 1 : -1
                : a.ega_accession !== null
                  ? a.ega_accession > b.accession ? 1 : -1
                  : a.accession > b.accession ? 1 : -1
          );
          if (order === 2) {
            sortedSamples.reverse()
          }
          setSortedSamples(sortedSamples)
          break;
        case "description":
          sortedSamples.sort((a, b) =>
            a.description > b.description ? 1 : -1
          );
          if (order === 2) {
            sortedSamples.reverse()
          }
          setSortedSamples(sortedSamples)
          break;
        case "case_control_status":
          sortedSamples.sort((a, b) =>
            a.case_control_status > b.case_control_status ? 1 : -1
          );
          if (order === 2) {
            sortedSamples.reverse()
          }
          setSortedSamples(sortedSamples)
          break;
        case "phenotype":
          sortedSamples.sort((a, b) =>
            a.has_individual.has_phenotypic_feature !== null && b.has_individual.has_phenotypic_feature !== null
              ? a.has_individual.has_phenotypic_feature[0].concept_name > b.has_individual.has_phenotypic_feature[0].concept_name ? 1 : -1
              : a.has_individual.has_phenotypic_feature > b.has_individual.has_phenotypic_feature ? 1 : -1
          );
          if (order === 2) {
            sortedSamples.reverse()
          }
          setSortedSamples(sortedSamples)
          break;
        case "tissue":
          sortedSamples.sort((a, b) =>
            a.has_anatomical_entity !== null && b.has_anatomical_entity !== null
              ? a.has_anatomical_entity[0].concept_name > b.has_anatomical_entity[0].concept_name ? 1 : -1
              : a.has_anatomical_entity > b.has_anatomical_entity ? 1 : -1
          );
          if (order === 2) {
            sortedSamples.reverse()
          }
          setSortedSamples(sortedSamples)
          break;
      }
    }
    else {
      setSortedSamples(Array.from(props.details.has_sample))
    }
  }

  const SortFilesTable = (key: String, order: number) => {
    setSortFiles({ "key": key, "order": order })
    if (order !== 0) {
      switch (key) {
        case "name":
          sortedFiles.sort((a, b) =>
            a.name > b.name ? 1 : -1
          );
          if (order === 2) {
            sortedFiles.reverse()
          }
          setSortedFiles(sortedFiles)
          break;
        case "format":
          sortedFiles.sort((a, b) =>
            a.format > b.format ? 1 : -1
          );
          if (order === 2) {
            sortedFiles.reverse()
          }
          setSortedFiles(sortedFiles)
          break;
        case "size":
          sortedFiles.sort((a, b) =>
            a.size > b.size ? 1 : -1
          );
          if (order === 2) {
            sortedFiles.reverse()
          }
          setSortedFiles(sortedFiles)
          break;
      }
    }
    else {
      setSortedFiles(Array.from(props.details.has_file))
    }
  }

  useEffect(() => {

  }, []);

  return (
    <Accordion>
      <Accordion.Item className="mb-4 border-0" eventKey="0">
        <Accordion.Button className="bg-secondary py-2 text-white rounded-0">
          Experiment Summary{" "}
          {props.details.has_sample !== null ? (
            <>({props.details.has_experiment.length} experiments)</>
          ) : (
            <></>
          )}
        </Accordion.Button>
        <Accordion.Body
          className="pt-4 overflow-auto"
          style={{ maxHeight: "425px" }}
        >
          <Table hover className="fs-8" size="sm">
            <thead className="border-light-3 border-1">
              <tr>
                <th className="w-25">
                  <Button
                    variant="outline-secondary"
                    className="p-0 px-1 me-1 border-0"
                    onClick={() => { SortExpTable("accession", sortExp.key === "accession" ? (sortExp.order + 1) % 3 : 1) }}
                  >
                    <FontAwesomeIcon icon={sortExp.key === "accession" ? iconsDef[sortExp.order] : iconsDef[0]} />
                  </Button>
                  &nbsp;Experiment ID
                </th>
                <th className="text-wrap text-break">
                <Button
                    variant="outline-secondary"
                    className="p-0 px-1 me-1 border-0"
                    onClick={() => { SortExpTable("description", sortExp.key === "description" ? (sortExp.order + 1) % 3 : 1) }}
                  >
                    <FontAwesomeIcon icon={sortExp.key === "description" ? iconsDef[sortExp.order] : iconsDef[0]} />
                  </Button>
                  &nbsp;Description</th>
              </tr>
            </thead>
            <tbody className="border-light-3 border-1">
              {sortedExp?.map((x) => {
                return (
                  <tr
                    key={
                      x.ega_accession !== null ? x.ega_accession : x.accession
                    }
                  >
                    <td>
                      {x.ega_accession !== null ? x.ega_accession : x.alias}
                    </td>
                    <td>{x.description}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="mb-4 border-0" eventKey="1">
        <Accordion.Button className="bg-secondary py-2 text-white rounded-0">
          Sample Summary{" "}
          {props.details.has_sample !== null ? (
            <>({props.details.has_sample.length} samples)</>
          ) : (
            <></>
          )}
        </Accordion.Button>
        <Accordion.Body
          className="pt-4 overflow-auto"
          style={{ maxHeight: "425px" }}
        >
          <Table hover className="fs-8 rounded" size="sm">
            <thead className="border-light-3 border-1">
              <tr>
                <th>
                  <Button
                    variant="outline-secondary"
                    className="p-0 px-1 me-1 border-0"
                    onClick={() => { SortSamplesTable("accession", sortSamples.key === "accession" ? (sortSamples.order + 1) % 3 : 1) }}
                  >
                    <FontAwesomeIcon icon={sortSamples.key === "accession" ? iconsDef[sortSamples.order] : iconsDef[0]} />
                  </Button>
                  &nbsp;Sample ID
                </th>
                <th className="text-wrap text-break">
                <Button
                    variant="outline-secondary"
                    className="p-0 px-1 me-1 border-0"
                    onClick={() => { SortSamplesTable("description", sortSamples.key === "description" ? (sortSamples.order + 1) % 3 : 1) }}
                  >
                    <FontAwesomeIcon icon={sortSamples.key === "description" ? iconsDef[sortSamples.order] : iconsDef[0]} />
                  </Button>
                  &nbsp;Description</th>
                <th>
                <Button
                    variant="outline-secondary"
                    className="p-0 px-1 me-1 border-0"
                    onClick={() => { SortSamplesTable("case_control_status", sortSamples.key === "case_control_status" ? (sortSamples.order + 1) % 3 : 1) }}
                  >
                    <FontAwesomeIcon icon={sortSamples.key === "case_control_status" ? iconsDef[sortSamples.order] : iconsDef[0]} />
                  </Button>
                  &nbsp;Status
                </th>
                <th>
                <Button
                    variant="outline-secondary"
                    className="p-0 px-1 me-1 border-0"
                    onClick={() => { SortSamplesTable("phenotype", sortSamples.key === "phenotype" ? (sortSamples.order + 1) % 3 : 1) }}
                  >
                    <FontAwesomeIcon icon={sortSamples.key === "phenotype" ? iconsDef[sortSamples.order] : iconsDef[0]} />
                  </Button>
                  &nbsp;Phenotype
                </th>
                <th>
                <Button
                    variant="outline-secondary"
                    className="p-0 px-1 me-1 border-0"
                    onClick={() => { SortSamplesTable("tissue", sortSamples.key === "tissue" ? (sortSamples.order + 1) % 3 : 1) }}
                  >
                    <FontAwesomeIcon icon={sortSamples.key === "tissue" ? iconsDef[sortSamples.order] : iconsDef[0]} />
                  </Button>
                  &nbsp;Tissue
                </th>
              </tr>
            </thead>
            <tbody className="border-light-3 border-1">
              {sortedSamples?.map((x) => {
                return (
                  <tr
                    key={
                      x.ega_accession !== null ? x.ega_accession : x.accession
                    }
                  >
                    <td>
                      {x.ega_accession !== null ? x.ega_accession : x.alias}
                    </td>
                    <td>{x.description}</td>
                    <td className="text-capitalize">{x.case_control_status}</td>
                    <td className="text-capitalize">
                      {x.has_individual.has_phenotypic_feature !== null
                        ? x.has_individual.has_phenotypic_feature[0]
                          .concept_name
                        : "N/A"}
                    </td>
                    <td className="text-capitalize">
                      {x.has_anatomical_entity !== null
                        ? x.has_anatomical_entity[0].concept_name
                        : "N/A"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="mb-4 border-0" eventKey="2">
        <Accordion.Button className="bg-secondary py-2 text-white rounded-0">
          File Summary ({props.details.has_file?.length} files,{" "}
          {props.details.has_file?.map((x) => {
            fileSize = fileSize + x.size;
            return null;
          })}
          {parseBytes(fileSize)})
        </Accordion.Button>
        <Accordion.Body
          className="pt-4 overflow-auto"
          style={{ maxHeight: "425px" }}
        >
          <Table hover className="fs-8" size="sm">
            <thead className="border-light-3 border-1">
              <tr>
                <th className="text-break">
                <Button
                    variant="outline-secondary"
                    className="p-0 px-1 me-1 border-0"
                    onClick={() => { SortFilesTable("name", sortFiles.key === "name" ? (sortFiles.order + 1) % 3 : 1) }}
                  >
                    <FontAwesomeIcon icon={sortFiles.key === "name" ? iconsDef[sortFiles.order] : iconsDef[0]} />
                  </Button>
                  &nbsp;File name
                </th>
                <th>
                <Button
                    variant="outline-secondary"
                    className="p-0 px-1 me-1 border-0"
                    onClick={() => { SortFilesTable("type", sortFiles.key === "type" ? (sortFiles.order + 1) % 3 : 1) }}
                  >
                    <FontAwesomeIcon icon={sortFiles.key === "type" ? iconsDef[sortFiles.order] : iconsDef[0]} />
                  </Button>
                  &nbsp;File type
                </th>
                <th>
                  <Button
                    variant="outline-secondary"
                    className="p-0 px-1 me-1 border-0"
                    onClick={() => { SortFilesTable("size", sortFiles.key === "size" ? (sortFiles.order + 1) % 3 : 1) }}
                  >
                    <FontAwesomeIcon icon={sortFiles.key === "size" ? iconsDef[sortFiles.order] : iconsDef[0]} />
                  </Button>
                  &nbsp;Size
                </th>
                <th>Checksum
                  <Button
                    variant="outline-secondary"
                    className="p-0 border-0 text-white bg-white"
                    disabled
                  >&nbsp;
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody className="border-light-3 border-1">
              {sortedFiles?.map((x) => {
                return (
                  <tr key={x.id}>
                    <td>{x.name}</td>
                    <td>{x.format.toUpperCase()}</td>
                    <td>{parseBytes(x.size)}</td>
                    <td>
                      {x.checksum_type}: {x.checksum}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default SingleDatasetViewAccordion;
