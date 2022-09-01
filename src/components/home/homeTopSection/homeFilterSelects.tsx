import { Container, Form } from "react-bootstrap";
import { facetFilterModel, facetModel } from "../../../models/facets";

interface HomeFilterSelectsProps {
  filterDict: facetFilterModel[];
  facetList: facetModel[] | null;
  setFilterDict: React.Dispatch<React.SetStateAction<facetFilterModel[]>>;
}

const HomeFilterSelects = (props: HomeFilterSelectsProps) => {
  const fillFilterSelect = (key: string) => {
    return props.facetList
      ?.filter((x) => x.key === key)
      .map((x) =>
        x.options
          .sort((a, b) => (b.option < a.option ? 1 : -1))
          .map((y) => (
            <option value={y.option} key={y.option}>
              {y.option}
            </option>
          ))
      );
  };

  const filterChange = (key: string, optionValue: string) => {
    let currentFilterDict = props.filterDict.filter((x) => x.key !== key);
    if (optionValue !== "") {
      currentFilterDict.push({ key: key, value: optionValue });
    }
    props.setFilterDict(currentFilterDict);
  };

  const generateSelect = (key: string, display: string) => {
    return (
      <Form.Select
        className="d-inline-block w-25 fs-8 text-capitalize me-2"
        size="sm"
        onChange={(event) => filterChange(key, event.target.value)}
      >
        <option value="">{display}</option>
        {fillFilterSelect(key)}
      </Form.Select>
    );
  };

  return (
    <Container className="w-75">
      <div className="w-75">
        {generateSelect("has_study.type", "Study type")}
        {generateSelect("type", "Type")}
      </div>
    </Container>
  );
};

export default HomeFilterSelects;
