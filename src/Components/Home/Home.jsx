import React from "react";
import Homeabout from "./Homecontent/Homeabout/Homeabout";
import {Col, Row} from "react-bootstrap";


const Home = () => {
    return (
        <Row>
            <Col className="col-md-12">
                <Homeabout/>
            </Col>
        </Row>
    )
}

export default Home;