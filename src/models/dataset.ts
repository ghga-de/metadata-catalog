import { facetModel } from "./facets";

export interface datasetSampleModel {
  id: string;
  tissue: string;
}

export interface datasetFileModel {
  accession: string;
  format: string;
}

export interface datasetPublicationModel {
  id: string;
  title: string;
}

export interface datasetExperimentModel {
  id: string;
  type: string;
  has_sample: datasetSampleModel[];
  has_file: datasetFileModel[];
}

export interface datasetModel {
  document_type: string;
  id: string;
  accession: string;
  title: string;
  description: string;
  type: string[];
  has_file: datasetFileModel[];
  has_study: string;
  has_publication: datasetPublicationModel[];
  has_experiment: datasetExperimentModel[];
  status: string;
  creation_date: string;
  update_date: string;
}

export interface fileModel {
  id: string;
  name: string;
  size: number;
  format: string;
  category: string;
  checksum: string;
  creation_date: string;
  accession: string;
  alias: string;
  checksum_type: string;
}

export interface experimentEmbeddedModel {
  title: string;
  has_protocol: [
    {
      id: string;
      instrument_model: string;
    }
  ];
  description: string;
  accession: string;
  ega_accession: string;
  alias: string;
  has_sample: sampleModel[];
  type: string;
}

export interface publicationModel {
  id: string;
  title: string;
  abstract: string;
  alias: string;
  xref: string[];
  accession: string;
}

export interface sampleModel {
  name: string;
  has_individual: {
    gender: string;
    sex: string;
    has_phenotypic_feature: [
      {
        id: string;
        name: string;
        concept_name: string;
      }
    ];
  };
  has_anatomical_entity: [
    {
      concept_name: string;
    }
  ];
  tissue: string;
  description: string;
  accession: string;
  ega_accession: string;
  alias: string;
}

export interface projectModel {
  id: string;
  title: string;
  has_attribute: attributeModel[];
  description: string;
  accession: string;
}

export interface studyEmbeddedModel {
  release_date: string;
  id: string;
  title: string;
  accession: string;
  abstract: string;
  has_publication: publicationModel[];
  type: string;
  has_attribute: attributeModel[];
  has_project: projectModel;
  ega_accession: string;
}

export interface dataAccessPolicyModel {
  id: string;
  accession: string;
  has_data_access_committee: dataAccessCommitteeModel;
  data_request_form: string;
  policy_text: string;
}

export interface dataAccessCommitteeModel {
  name: string;
  main_contact: string;
  accession: string;
  has_member: dataAccessCommitteeMemberModel[];
}

export interface dataAccessCommitteeMemberModel {
  email: string;
  id: string;
  organization: string;
}

export interface attributeModel {
  key: string;
  value: string;
}

export interface datasetEmbeddedModel {
  id: string;
  title: string;
  description: string;
  type: string;
  has_experiment: experimentEmbeddedModel[];
  has_file: fileModel[];
  has_sample: sampleModel[];
  has_study: studyEmbeddedModel[];
  has_data_access_policy: dataAccessPolicyModel;
  has_attribute: attributeModel[];
  has_publication: publicationModel[];
  creation_date: string;
  accession: string;
  ega_accession: string;
  release_status: string;
  release_date: string;
  update_date: string;
}

export interface hitContentModel {
  id: string;
  accession: string;
  ega_accession: string;
  title: string;
  description: string;
  type: string[];
  has_study: string[];
  has_file: string[];
  has_sample: string[];
  has_experiment: string[];
}

export interface hitModel {
  document_type: string;
  id: string;
  context: string | null;
  content: hitContentModel;
}

export interface searchResponseModel {
  count: number;
  hits: hitModel[];
  facets: facetModel[];
}

export interface datasetSummaryModel {
  id: string;
  title: string;
  description: string;
  accession: string;
  ega_accession: string;
  type: string;
  dac_email: string;
  sample_summary: sampleSummaryModel;
  study_summary: studySummaryModel;
  experiment_summary: experimentSummaryModel;
  file_summary: fileSummaryModel;
}

export interface sampleSummaryModel {
  count: number;
  stats: {
    sex: sexSummaryModel;
    tissues: { [key: string]: number };
    phenotypes: { [key: string]: number };
  }
}

export interface sexSummaryModel {
  female: number;
  male: number;
  unkown: number;
}

export interface studySummaryModel {
  count: number;
  stats: {
    ega_accession: string[];
    accession: [];
  };
}

export interface experimentSummaryModel {
  count: number;
  stats: {
    protocol: { [key: string]: number };
  };
}

export interface fileSummaryModel {
  count: number;
  stats: {
    format: { [key: string]: number };
    size: number;
  };
}

export interface individualSummaryModel {
  count: number;
  stats: {
    sex: { [key: string]: number };
  };
}

export interface protocolSummaryModel {
  count: number;
  stats: {
    protocol: { [key: string]: number };
  };
}

export interface metadataSummaryModel {
  sample_summary: sampleSummaryModel;
  study_summary: studySummaryModel;
  experiment_summary: experimentSummaryModel;
  file_summary: fileSummaryModel;
  individual_summary: individualSummaryModel;
  protocol_summary: protocolSummaryModel;
}
