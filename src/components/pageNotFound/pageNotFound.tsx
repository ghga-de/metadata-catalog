import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <Container className="p-3">
            <h1>404 Page Not Found</h1>
            <Link to="/">Back to home</Link>
        </Container>
    )
}

export default PageNotFound
