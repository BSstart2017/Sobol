import React from "react";
import Homeabout from "./Homecontent/Homeabout/Homeabout";
import {Col, Row} from "react-bootstrap";
import Homeservices from "./Homecontent/Homeservices/Homeservices";
import HomeContactContainer from "./Homecontent/Homecontact/HomeContactContainer";
import HomeReviewsContainer from "./Homecontent/Homeservices/HomeReviewsContainer";
import HomeContactText from "./HomeForm/HomeForm";

const Home = () => {
    return (
        <Row>
            <Col className="col-md-12 pr-0">
                <Homeabout/>
            </Col>
            <Col className="col-md-12">
                <HomeContactContainer />
            </Col>
            <Col className="col-md-12 pr-0">
                <Homeservices/>
                <HomeReviewsContainer/>
            </Col>
            <Col className="col-md-12">
                <HomeContactText />
            </Col>
        </Row>
    )
}

export default Home;