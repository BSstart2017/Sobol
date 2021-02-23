import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import {Col, Container, Row} from "react-bootstrap";
import "./App.css";
import Navbarscrol from "./Components/Navbar/Navbarscrol";
import Homepage from "./Components/Home/Homepage/Homepage";
import SideBarTopContainer from "./Components/Sidebar/SideBarTopContainer";
import SideBarBottomContainer from "./Components/Sidebar/SideBarBottomContainer";
import React from "react";
import PopUpText from "./Components/PopUp/PopUp";

const App = (props) => {
    return (<>
            <Container>
                <Row className="mr-0 ">
                    <Col className="col-md-11">
                        <Homepage/>
                    </Col>
                    <Col className="col-md-1">
                        <SideBarTopContainer/>
                    </Col>
                    <Col className="col-md-12 p-0">
                        <Navbarscrol/>
                        <Row>
                        <Col className="col-md-11">
                            <Home/>
                        </Col>
                        <Col className="col-md-1">
                            <SideBarBottomContainer/>
                        </Col>
                        </Row>
                    </Col>
                </Row>
                <PopUpText />
            </Container>
        </>
    );
}


export default App;
