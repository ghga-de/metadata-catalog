import { Accordion, Table } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";
import { parseBytes } from "../../../../utils/utils";

interface SingleDatasetViewAccordionProps {
  details: datasetEmbeddedModel;
}

const SingleDatasetViewAccordion = (props: SingleDatasetViewAccordionProps) => {
  let fileSize = 0;

  return (
    <Accordion>
      <Accordion.Item className="mb-4 border-0" eventKey="0">
        <Accordion.Button className="bg-secondary py-2 text-white rounded-0">
          Experiment Summary {props.details.has_sample !== null ? (<>({props.details.has_experiment.length} experiments)</>) : (<></>)}
        </Accordion.Button>
        <Accordion.Body className="pt-4 overflow-auto" style={{ maxHeight: "425px" }}>
          <Table hover className="fs-8" size="sm">
            <thead className="border-light-alternative border-1">
              <tr>
                <th className="w-25">Experiment ID</th>
                <th className="text-wrap text-break">Description</th>
              </tr>
            </thead>
            <tbody className="border-light-alternative border-1">
              {props.details.has_experiment?.map((x) => {
                return (
                  <tr key={x.ega_accession !== null ? x.ega_accession : x.accession}>
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
          Sample Summary {props.details.has_sample !== null ? (<>({props.details.has_sample.length} samples)</>) : (<></>)}
        </Accordion.Button>
        <Accordion.Body className="pt-4 overflow-auto" style={{ maxHeight: "425px" }}>
          <Table hover className="fs-8 rounded" size="sm">
            <thead className="border-light-alternative border-1">
              <tr>
                <th>Sample ID</th>
                <th className="text-wrap text-break">Description</th>
                <th>Phenotype</th>
                <th>Tissue</th>
              </tr>
            </thead>
            <tbody className="border-light-alternative border-1">
              {props.details.has_sample?.map((x) => {
                return (
                  <tr key={x.ega_accession !== null ? x.ega_accession : x.accession}>
                    <td>
                      {x.ega_accession !== null ? x.ega_accession : x.alias}
                    </td>
                    <td>{x.description}</td>
                    <td className="text-capitalize">{x.has_individual.has_phenotypic_feature[0].concept_name}</td>
                    <td className="text-capitalize">{x.has_anatomical_entity[0].concept_name}</td>
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
        <Accordion.Body className="pt-4 overflow-auto" style={{ maxHeight: "425px" }}>
          <Table hover className="fs-8" size="sm">
            <thead className="border-light-alternative border-1">
              <tr>
                <th className="text-break">File name</th>
                <th>File type</th>
                <th>Size</th>
                <th>Checksum</th>
              </tr>
            </thead>
            <tbody className="border-light-alternative border-1">
              {props.details.has_file?.map((x) => {
                return (
                  <tr key={x.id}>
                    <td>{x.name}</td>
                    <td>{x.format.toUpperCase()}</td>
                    <td>{parseBytes(x.size)}</td>
                    <td>{x.checksum_type}: {x.checksum}</td>
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
