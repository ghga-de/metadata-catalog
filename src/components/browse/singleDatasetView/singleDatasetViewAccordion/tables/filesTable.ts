import { useState } from "react";
import { datasetEmbeddedModel } from "../../../../../models/dataset";
import { parseBytes, transposeTableForHTML } from "../../../../../utils/utils";

interface ExperimentsTableProps {
  details: datasetEmbeddedModel;
}

export const FilesTable = (props: ExperimentsTableProps, fileSize: number) => {
  const [sortDefinition, setSortDefinition] = useState<{ key: number; order: number }>({
    key: 0,
    order: 0,
  });

  let filesTable: {
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
      data: props.details.has_file.map(
        (x) => x.checksum_type + ": " + x.checksum
      ),
      cssClasses: "",
    },
  ];

  const [sortedData, setSortedData] = useState<any>(
    transposeTableForHTML(filesTable.map((x) => x.data))
  );

  const filesTableDef: {
    table: any;
    buttonText: String;
    sortDefinition: { key: number; order: number };
    setSortDefinition: any;
    sortedData: any;
    setSortedData: any;
  } = {
    table: filesTable,
    buttonText:
      props.details.has_file !== null
        ? "File Summary (" +
          props.details.has_file.length +
          " files: " +
          parseBytes(fileSize) +
          ")"
        : "File Summary",
    sortDefinition: sortDefinition,
    setSortDefinition: setSortDefinition,
    sortedData: sortedData,
    setSortedData: setSortedData,
  };

  return filesTableDef;
};
