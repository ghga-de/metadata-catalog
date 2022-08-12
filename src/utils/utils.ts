import { facetFilterModel } from "../models/facets";
import { querySearchService } from "../api/browse";
import { Dispatch, SetStateAction } from "react";
import { dataAccessCommitteeModel, dataAccessPolicyModel, datasetEmbeddedModel, searchResponseModel } from "../models/dataset";

export const getFilterString = (filterDict: facetFilterModel[]) => {
  let filterString = "";
  for (var item of filterDict) {
    filterString += item.key + ":" + item.value + ";";
  }
  return filterString.slice(0, -1);
};

export const scrollUp = () => {
  window.scrollTo({
    top: 60,
    behavior: "smooth",
  });
};

export const getFilterParams = (filterString: string | null) => {
  let facetFilterModelList: facetFilterModel[] = [];
  if (filterString != null) {
    let filterStringList = filterString.split(";");
    for (var item of filterStringList) {
      let filterItem: facetFilterModel = {
        key: item.split(":")[0],
        value: item.split(":")[1],
      };
      facetFilterModelList.push(filterItem);
    }
  }
  return facetFilterModelList;
};

export const parseBytes = (bytes: number) => {
  const prefixes = [
    " B",
    " kB",
    " MB",
    " GB",
    " TB",
    " PB",
    " EB",
    " ZB",
    " YB",
  ];
  let parsedBytes = prefixes.flatMap((prefix, index) => {
    let calculatedVal = bytes / Math.pow(1000, index);
    if (calculatedVal < 1000 && calculatedVal >= 0.1) {
      return String(Math.round(calculatedVal * 100) / 100) + prefix;
    } else return null;
  });
  var returnValue = parsedBytes.find((parsing) => parsing !== null);
  if (returnValue === undefined) returnValue = String(bytes) + prefixes[0];
  return returnValue;
};

export const handleFilterAndSearch = (
  setSearchResults: Dispatch<SetStateAction<searchResponseModel | null>>,
  filterDict: facetFilterModel[],
  searchKeyword: string,
  limit: number,
  skip: number,
  page: number,
  setPage: Dispatch<SetStateAction<number>>,
  setFilterDict: Dispatch<SetStateAction<facetFilterModel[]>> | null,
  appliedFilterDict: facetFilterModel[] | null
) => {
  if (appliedFilterDict === null) {
    appliedFilterDict = filterDict;
  }
  if (setFilterDict) {
    filterDict = appliedFilterDict;
    setFilterDict(appliedFilterDict);
  }
  page = page + 1;
  setPage(page)
  querySearchService(
    setSearchResults,
    filterDict,
    searchKeyword,
    skip,
    limit,
    "Dataset"
  );
  if (searchKeyword === "" || searchKeyword === null) {
    if (
      getFilterString(appliedFilterDict) === "" ||
      getFilterString(appliedFilterDict) === null
    ) {
      return `?p=` + page;
    } else {
      return `?f=${getFilterString(appliedFilterDict)}&p=` + page;
    }
  } else {
    if (
      getFilterString(appliedFilterDict) === "" ||
      getFilterString(appliedFilterDict) === null
    ) {
      return `?q=${searchKeyword}&p=` + page;
    } else {
      return (
        `?q=${searchKeyword}&f=${getFilterString(appliedFilterDict)}&p=` + page
      );
    }
  }
};

export const importAllFilesFromFolder = (r : any) => {
  return r.keys().map(r);
}

export const getDACEmailId = (details :  datasetEmbeddedModel | null | undefined) => {
  let mailId: string = "helpdesk@ghga.de";
  if (details !== null && details !== undefined) {
    const dataAccessPolicy: dataAccessPolicyModel =
      details.has_data_access_policy;
    const dataAccessCommittee: dataAccessCommitteeModel =
      dataAccessPolicy.has_data_access_committee;
    const main_contact = dataAccessCommittee.main_contact;
    for (var item of dataAccessCommittee.has_member) {
      if (main_contact === null) {
        mailId =
          item.email === null || item.email === undefined
            ? mailId
            : item.email;
      }
      if (
        item.id === main_contact &&
        item.email !== null &&
        item.email !== undefined
      ) {
        mailId = item.email;
      }
    }
  }
  return mailId;
}
