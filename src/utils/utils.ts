import { Dispatch, SetStateAction } from "react";
import { querySearchService } from "../api/browse";
import {
  dataAccessCommitteeModel,
  dataAccessPolicyModel,
  datasetEmbeddedModel,
  searchResponseModel,
} from "../models/dataset";
import { facetFilterModel } from "../models/facets";

export const getFilterString = (filterDict: facetFilterModel[]) => {
  let filterString = "";
  for (var item of filterDict) {
    filterString += item.key + ":" + item.value + ";";
  }
  return filterString.slice(0, -1);
};

export const scrollUp = () => {
  window.scrollTo({
    top: 0,
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
  setPage(page);
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

export const importAllFilesFromFolder = (r: any) => {
  return r.keys().map(r);
};

export const getDACEmailId = (
  details: datasetEmbeddedModel | null | undefined
) => {
  let mailId: string = "helpdesk@ghga.de";
  if (details !== null && details !== undefined) {
    const dataAccessPolicy: dataAccessPolicyModel =
      details.has_data_access_policy;
    const dataAccessCommittee: dataAccessCommitteeModel =
      dataAccessPolicy.has_data_access_committee;
    const main_contact = dataAccessCommittee.main_contact;
    if (main_contact === null) {
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
    } else {
      mailId = main_contact;
    }
  }
  return mailId;
};

export const getItemsForSummary = (
  item: { [key: string]: number } | undefined
) => {
  let items: string[] = [];
  for (let key in item) {
    let value = item[key];
    items.push(key + ": " + value);
  }
  return items;
};

export const transposeTableForHTML = (data: string[]) => {
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

export const static_page_main_div_classes = "mx-auto px-2 px-md-5 my-5";
export const static_page_img_row_classes = "text-center w-100 mx-0 px-0 mb-4 mb-sm-5 justify-content-center"
export const static_page_img_col_classes = "mx-0 px-0 col-md-11 col-lg-10 col-xl-8 col-xxl-6"
