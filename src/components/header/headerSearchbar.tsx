import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HeaderSearchbar = () => {
    let navigate = useNavigate();

    const [searchKeyword, setSearchKeyword] = React.useState<string>("");

    const searchDatasets = (event: any) => {
        event.preventDefault();
        let queryString = "";
        if (searchKeyword.trim() !== "") {
            queryString = "&q=" + searchKeyword.trim();
        }
        window.location.href = "/browse?p=1" + queryString;
        // navigate("/browse?p=1" + queryString);
    };

    return (
        <Form onSubmit={(event) => searchDatasets(event)}>
            <InputGroup>
                <Form.Control
                    id="searchInput"
                    type="text"
                    placeholder="Search datasets"
                    onChange={(event) => setSearchKeyword(event.target.value)}
                />
                <Button
                    variant="white"
                    className="text-secondary border-0"
                    type="submit"
                    onClick={(event) => {
                        searchDatasets(event);
                    }}
                >
                    <FontAwesomeIcon icon={faSearch} />
                </Button>
            </InputGroup>
        </Form>
    );
};

export default HeaderSearchbar;
