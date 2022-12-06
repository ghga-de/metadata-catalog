import {
  faSortDown,
  faSortUp,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion, Button, Table } from "react-bootstrap";
import { datasetEmbeddedModel } from "../../../../models/dataset";
import { parseBytes, transposeTableForHTML } from "../../../../utils/utils";
import { ExperimentsTable } from "./tables/experimentsTable";
import { FilesTable } from "./tables/filesTable";
import { SamplesTable } from "./tables/samplesTable";

interface SingleDatasetViewAccordionProps {
  details: datasetEmbeddedModel;
}

const SingleDatasetViewAccordion = (props: SingleDatasetViewAccordionProps) => {
  let fileSize = 0;

  props.details.has_file?.map((x) => {
    fileSize = fileSize + x.size;
    return null;
  });

  let iconsDef = [faSort, faSortUp, faSortDown];

  let Tables: {
    table: any;
    buttonText: String;
    sortDefinition: { key: number; order: number };
    setSortDefinition: any;
    sortedData: any;
    setSortedData: any;
  }[] = [ExperimentsTable(props), SamplesTable(props), FilesTable(props, fileSize)];

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
            <Table hover className="fs-7" size="sm">
              <thead className="border-light-3 border-1">
                <tr>
                  {x.table.map((y: any, idy: number) => (
                    <th className={y.className} key={"table_sdsv_th_" + idy}>
                      <Button
                        variant="outline-secondary"
                        className="p-0 px-1 me-1 border-0"
                        onClick={() => {
                          SortTable(
                            x.setSortDefinition,
                            x.sortedData,
                            x.setSortedData,
                            Array.from(
                              transposeTableForHTML(
                                x.table.map((y: any) => y.data)
                              )
                            ),
                            idy,
                            x.sortDefinition.key === idy
                              ? (x.sortDefinition.order + 1) % 3
                              : 1
                          );
                        }}
                      >
                        <FontAwesomeIcon
                          icon={
                            x.sortDefinition.key === idy
                              ? iconsDef[x.sortDefinition.order]
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
                {x.sortedData.map((y: any, idy: number) => (
                  <tr key={"row_" + idy + "_table_sdsv_" + idx}>
                    {y.map((z: any, idz: any) => (
                      <td
                        className={x.table[idz]?.cssClasses}
                        key={
                          "cell_" + idz + "_row_" + idy + "_table_sdsv_" + idx
                        }
                      >
                        {typeof z === "number" &&
                        x.buttonText.includes("File Summary")
                          ? parseBytes(z)
                          : z}
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
