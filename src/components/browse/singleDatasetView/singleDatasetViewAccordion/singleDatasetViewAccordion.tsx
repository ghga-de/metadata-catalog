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
          Experiment Summary
        </Accordion.Button>
        <Accordion.Body className="pt-4 overflow-auto" style={{ maxHeight: "425px" }}>
          <Table hover className="fs-8" size="sm">
            <thead className="border-light-alternative border-1">
              <tr>
                <th className="w-25">Experiment ID</th>
                <th className="w-50 text-wrap">Description</th>
                <th>Experiment Type</th>
              </tr>
            </thead>
            <tbody className="border-light-alternative border-1">
              {props.details.has_experiment?.map((x) => {
                return (
                  <tr key={x.ega_accession !== null ? x.ega_accession : x.ega_accession}>
                    <td>
                      {x.ega_accession !== null ? x.ega_accession : x.ega_accession}
                      <br />
                      <span className="fs-9 text-muted">{ }</span>
                    </td>
                    <td>{x.alias}</td>
                    <td>{x.type ? x.type : "N/A"}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className="mb-4 border-0" eventKey="1">
        <Accordion.Button className="bg-secondary py-2 text-white rounded-0">
          Sample Summary
        </Accordion.Button>
        <Accordion.Body className="pt-4 overflow-auto" style={{ maxHeight: "425px" }}>
          <Table hover className="fs-8 rounded" size="sm">
            <thead className="border-light-alternative border-1">
              <tr>
                <th className="w-25">Sample ID</th>
                <th className="w-50 text-wrap">Description</th>
                <th>Sample Type</th>
              </tr>
            </thead>
            <tbody className="border-light-alternative border-1">
              {props.details.has_sample?.map((x) => {
                return (
                  <tr key={x.ega_accession !== null ? x.ega_accession : x.ega_accession}>
                    <td>
                      {x.ega_accession !== null ? x.ega_accession : x.ega_accession}
                      <br />
                      <span className="fs-9 text-muted">{ }</span>
                    </td>
                    <td>{x.description}</td>
                    <td className="text-capitalize">{ }</td>
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
                <th className="w-25">File name</th>
                <th className="w-25">File type</th>
                <th>Size</th>
                <th>Quality control</th>
              </tr>
            </thead>
            <tbody className="border-light-alternative border-1">
              {props.details.has_file?.map((x) => {
                return (
                  <tr key={x.id}>
                    <td>{x.name}</td>
                    <td>{x.format.toUpperCase()}</td>
                    <td>{parseBytes(x.size)}</td>
                    <td></td>
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
