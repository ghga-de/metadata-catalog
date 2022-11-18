import {
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Accordion, Button, Table } from "react-bootstrap";
import {
  datasetEmbeddedModel,
} from "../../../../models/dataset";
import { parseBytes } from "../../../../utils/utils";

interface SingleDatasetViewAccordionProps {
  details: datasetEmbeddedModel;
}

const SingleDatasetViewAccordion = (props: SingleDatasetViewAccordionProps) => {
  let fileSize = 0;

  props.details.has_file?.map((x) => {
    fileSize = fileSize + x.size;
    return null;
  })

  const [sortExp, setSortExp] = useState<{ key: number; order: number }>({
    key: 0,
    order: 0,
  });

  const [sortSamples, setSortSamples] = useState<{
    key: number;
    order: number;
  }>({
    key: 0,
    order: 0,
  });

  const [sortFiles, setSortFiles] = useState<{ key: number; order: number }>({
    key: 0,
    order: 0,
  });
  let iconsDef = [faSort, faSortUp, faSortDown];

  let ExpTable: {
    header: string;
    data: any;
    cssClasses: String;
  }[] = [
    {
      header: "Experiment ID",
      data: props.details.has_experiment.map((x) =>
        x.ega_accession !== null ? x.ega_accession : x.alias
      ),
      cssClasses: "w-25",
    },
    {
      header: "Description",
      data: props.details.has_experiment.map((x) => x.description),
      cssClasses: "text-wrap text-break",
    },
  ];

  let SamplesTable: { header: string; data: any; cssClasses: String }[] = [
    {
      header: "Sample ID",
      data: props.details.has_sample.map((x) =>
        x.ega_accession !== null ? x.ega_accession : x.alias
      ),
      cssClasses: "",
    },
    {
      header: "Description",
      data: props.details.has_sample.map((x) => x.description),
      cssClasses: "text-wrap text-break",
    },
    {
      header: "Status",
      data: props.details.has_sample.map((x) => x.case_control_status),
      cssClasses: "text-capitalize",
    },
    {
      header: "Phenotype",
      data: props.details.has_sample.map((x) =>
        x.has_individual.has_phenotypic_feature !== null
          ? x.has_individual.has_phenotypic_feature[0].concept_name
          : "N/A"
      ),
      cssClasses: "",
    },
    {
      header: "Tissue",
      data: props.details.has_sample.map((x) =>
        x.has_anatomical_entity !== null
          ? x.has_anatomical_entity[0].concept_name
          : "N/A"
      ),
      cssClasses: "text-capitalize",
    },
  ];

  let FilesTable: {
    header: string;
    data: any;
    cssClasses: String;
  }[] = [
    {
      header: "File name",
      data: props.details.has_file.map((x) => x.name),
      cssClasses: "text-break",
    },
    {
      header: "File Type",
      data: props.details.has_file.map((x) => x.format.toUpperCase()),
      cssClasses: "",
    },
    {
      header: "Size",
      data: props.details.has_file.map((x) => x.size),
      cssClasses: "",
    },
    {
      header: "Checksum",
      data: props.details.has_file.map((x) => x.checksum_type + ": " + x.checksum),
      cssClasses: "",
    },
  ];

  const TransposeTableForHTML = (data: string[]) => {
    const rows = data.length,
      cols = data[0].length;
    const grid = [];
    for (let j = 0; j < cols; j++) {
      grid[j] = Array(rows);
    }
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        grid[j][i] = data[i][j];
      }
    }
    return grid;
  };

  const [sortedExp, setSortedExp] = useState<any>(
    TransposeTableForHTML(ExpTable.map((x) => x.data))
  );
  const [sortedSamples, setSortedSamples] = useState<any>(
    TransposeTableForHTML(SamplesTable.map((x) => x.data))
  );
  const [sortedFiles, setSortedFiles] = useState<any>(
    TransposeTableForHTML(FilesTable.map((x) => x.data))
  );

  let Tables: {
    table: any;
    buttonText: String;
    sortItem: { key: number; order: number };
    setSortItem: any;
    sortedItem: any;
    setSortedItem: any;
  }[] = [
    {
      table: ExpTable,
      buttonText:
        props.details.has_sample !== null
          ? "Experiment Summary (" +
            props.details.has_experiment.length +
            " experiments)"
          : "Experiment Summary",
      sortItem: sortExp,
      setSortItem: setSortExp,
      sortedItem: sortedExp,
      setSortedItem: setSortedExp,
    },
    {
      table: SamplesTable,
      buttonText:
        props.details.has_sample !== null
          ? "Sample Summary (" + props.details.has_sample.length + " samples)"
          : "Sample Summary",
      sortItem: sortSamples,
      setSortItem: setSortSamples,
      sortedItem: sortedSamples,
      setSortedItem: setSortedSamples,
    },
    {
      table: FilesTable,
      buttonText:
        props.details.has_sample !== null
          ? "File Summary (" + parseBytes(fileSize) + ")"
          : "File Summary",
      sortItem: sortFiles,
      setSortItem: setSortFiles,
      sortedItem: sortedFiles,
      setSortedItem: setSortedFiles,
    },
  ];

  const SortTable = (
    setSortItem: any,
    sortedItem: any,
    setSortedItem: any,
    item: any,
    key: number,
    order: number
  ) => {
    setSortItem({ key: key, order: order });
    if (order !== 0) {
      sortedItem.sort((a: any, b: any) => (a[key] > b[key] ? 1 : -1));
      if (order === 2) {
        sortedItem.reverse();
      }
      setSortedItem(sortedItem);
    } else {
      setSortedItem(item);
    }
  };

  return (
    <Accordion>
      {Tables.map((x, idx) => (
        <Accordion.Item
          className="mb-4 border-0"
          eventKey={idx.toString()}
          key={"table_sdsv_" + idx}
        >
          <Accordion.Button className="bg-secondary py-2 text-white rounded-0">
            {x.buttonText}
          </Accordion.Button>
          <Accordion.Body
            className="pt-4 overflow-auto"
            style={{ maxHeight: "425px" }}
          >
            <Table hover className="fs-8" size="sm">
              <thead className="border-light-3 border-1">
                <tr>
                  {x.table.map((y: any, idy: number) => (
                    <th className={y.className}>
                      <Button
                        variant="outline-secondary"
                        className="p-0 px-1 me-1 border-0"
                        onClick={() => {
                          SortTable(
                            x.setSortItem,
                            x.sortedItem,
                            x.setSortedItem,
                            Array.from(
                              TransposeTableForHTML(
                                x.table.map((y: any) => y.data)
                              )
                            ),
                            idy,
                            x.sortItem.key === idy
                              ? (x.sortItem.order + 1) % 3
                              : 1
                          );
                        }}
                      >
                        <FontAwesomeIcon
                          icon={
                            x.sortItem.key === idy
                              ? iconsDef[x.sortItem.order]
                              : iconsDef[0]
                          }
                        />
                      </Button>
                      {y.header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {x.sortedItem.map((y: any, idy: number) => (
                  <tr key={"row_" + idy + "_table_sdsv_" + idx}>
                    {y.map((z: any, idz: any) => (
                      <td
                        className={x.table[idz]?.cssClasses}
                        key={
                          "cell_" + idz + "_row_" + idy + "_table_sdsv_" + idx
                        }
                      >
                        {typeof(z) === "number" ? parseBytes(z) : z}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default SingleDatasetViewAccordion;
