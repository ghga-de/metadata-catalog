import { useState } from "react";
import { datasetEmbeddedModel } from "../../../../../models/dataset";
import { parseBytes, transposeTableForHTML } from "../../../../../utils/utils";

interface ExperimentsTableProps {
  details: datasetEmbeddedModel;
}

export const FilesTable = (props: ExperimentsTableProps, fileSize: number) => {
  const [sortFiles, setSortFiles] = useState<{ key: number; order: number }>({
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

  const [sortedFiles, setSortedFiles] = useState<any>(
    transposeTableForHTML(filesTable.map((x) => x.data))
  );

  const filesTableDef: {
    table: any;
    buttonText: String;
    sortItem: { key: number; order: number };
    setSortItem: any;
    sortedItem: any;
    setSortedItem: any;
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
    sortItem: sortFiles,
    setSortItem: setSortFiles,
    sortedItem: sortedFiles,
    setSortedItem: setSortedFiles,
  };

  return filesTableDef;
};
