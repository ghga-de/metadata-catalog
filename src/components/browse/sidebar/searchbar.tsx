import React, { Dispatch, SetStateAction } from "react";
import { Form, Container } from "react-bootstrap";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { searchResponseModel } from "../../../models/dataset";
import { facetFilterModel } from "../../../models/facets";
import { scrollUp, handleFilterAndSearch } from "../../../utils/utils";
import { icon, toHtml } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";

interface searchbarProps {
  setSearchResults: Dispatch<SetStateAction<searchResponseModel | null>>;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
  searchKeyword: string;
  limit: number;
  searchParams: URLSearchParams;
  filterDict: facetFilterModel[];
  setFilterDict: Dispatch<SetStateAction<facetFilterModel[]>>;
  setPage: Dispatch<SetStateAction<number>>;
}

const Searchbar = (props: searchbarProps) => {
  let navigate = useNavigate();
  var iconAbstract = icon(faMagnifyingGlass).abstract[0];
  if (iconAbstract.children) {
    iconAbstract.children[0].attributes.fill = "#000";
  }

  return (
    <Container className="mb-4">
      <Form
        onSubmit={(event) => {
          scrollUp();
          event.preventDefault();
          navigate(
            handleFilterAndSearch(
              props.setSearchResults,
              props.filterDict,
              props.searchKeyword,
              props.limit,
              0,
              0,
              props.setPage,
              props.setFilterDict,
              null
            )
          );
        }}
      >
        <Form.Control
          value={props.searchKeyword}
          id="searchInput"
          type="text"
          placeholder="Search datasets"
          className="shadow ps-5"
          onChange={(event) => props.setSearchKeyword(event.target.value)}
          style={{
            background:
              'url("data:image/svg+xml;base64,' +
              btoa(toHtml(iconAbstract)) +
              '")',
            backgroundSize: "20px 20px",
            backgroundRepeat: "no-repeat no-repeat",
            backgroundPosition: "15px center",
          }}
        />
      </Form>
    </Container>
  );
};

export default Searchbar;
