import { useState } from "react";
import { datasetEmbeddedModel } from "../../../../../models/dataset";
import { transposeTableForHTML } from "../../../../../utils/utils";

interface ExperimentsTableProps {
  details: datasetEmbeddedModel;
}

export const ExperimentsTable = (props: ExperimentsTableProps) => {
  const [sortExp, setSortExp] = useState<{ key: number; order: number }>({
    key: 0,
    order: 0,
  });

  const experimentsTable: {
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

  const [sortedExp, setSortedExp] = useState<any>(
    transposeTableForHTML(experimentsTable.map((x) => x.data))
  );

  const experimentsTableDef: {
    table: any;
    buttonText: String;
    sortItem: { key: number; order: number };
    setSortItem: any;
    sortedItem: any;
    setSortedItem: any;
  } = {
    table: experimentsTable,
    buttonText:
      props.details.has_experiment !== null
        ? "Experiment Summary (" +
          props.details.has_experiment.length +
          " experiments)"
        : "Experiment Summary",
    sortItem: sortExp,
    setSortItem: setSortExp,
    sortedItem: sortedExp,
    setSortedItem: setSortedExp,
  };

  return experimentsTableDef;
};
