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
                    <Col md={11}>
                        <Homepage/>
                    </Col>
                    <Col md={1} className="d-none d-sm-block">
                        <SideBarTopContainer/>
                    </Col>
                    <Col md={12} xs={12} className="p-0">
                        <Navbarscrol/>
                        <Row>
                            <Col md={11} xs={12}>
                                <Home/>
                            </Col>
                            <Col md={1} className="d-none d-sm-block">
                                <SideBarBottomContainer/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <PopUpText/>
            </Container>
        </>
    );
}


export default App;
