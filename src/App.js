import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import {Col, Container, Row} from "react-bootstrap";
import "./App.css";
import Navbarscrol from "./Components/Navbar/Navbarscrol";
import Homepage from "./Components/Home/Homepage/Homepage";
import {connect} from "react-redux";
import SideBarTopContainer from "./Components/Sidebar/SideBarTopContainer";
import SideBarBottomContainer from "./Components/Sidebar/SideBarBottomContainer";

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
            </Container>
        </>
    );
}

const mapStateToProps = (state) => ({
    carouselsContact: state.Carousels.carouselsService
})

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
