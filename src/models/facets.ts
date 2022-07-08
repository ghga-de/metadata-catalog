export interface facetOptionsModel {
    option: string,
    count: number,
};

export interface facetModel {
    key: string,
    name: string,
    options: facetOptionsModel[],
};

export interface facetFilterModel {
    key: string,
    value: string,
};
