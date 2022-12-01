import { useState } from "react";
import { datasetEmbeddedModel } from "../../../../../models/dataset";
import { TransposeTableForHTML } from "../../../../../utils/utils";

interface SamplesTableProps {
  details: datasetEmbeddedModel;
}

export const SamplesTable = (props: SamplesTableProps) => {
  const [sortSamples, setSortSamples] = useState<{
    key: number;
    order: number;
  }>({
    key: 0,
    order: 0,
  });

  const samplesTable: { header: string; data: any; cssClasses: String }[] = [
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

  const [sortedSamples, setSortedSamples] = useState<any>(
    TransposeTableForHTML(samplesTable.map((x) => x.data))
  );

  const samplesTableDef: {
    table: any;
    buttonText: String;
    sortItem: { key: number; order: number };
    setSortItem: any;
    sortedItem: any;
    setSortedItem: any;
  } = {
    table: samplesTable,
    buttonText:
      props.details.has_sample !== null
        ? "Sample Summary (" + props.details.has_sample.length + " samples)"
        : "Sample Summary",
    sortItem: sortSamples,
    setSortItem: setSortSamples,
    sortedItem: sortedSamples,
    setSortedItem: setSortedSamples,
  };

  return samplesTableDef;
};
