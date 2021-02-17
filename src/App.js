import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/SideBar";
import {Col, Container, Row} from "react-bootstrap";
import "./App.css";
import Navbarscrol from "./Components/Navbar/Navbarscrol";
import Homepage from "./Components/Home/Homepage/Homepage";
import {connect} from "react-redux";

const App = (props) => {
    return (<>
            <Container className="container">
                <Row>
                    <Col className="col-md-11">
                        <Homepage/>
                    </Col>
                    <Col className="col-md-1">
                        <Sidebar />
                    </Col>
                    <Col className="col-md-11 pr-0">
                        <Navbarscrol/>
                    </Col>
                    <Col className="col-md-11">
                        <Home/>
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
    return{

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
