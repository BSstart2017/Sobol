import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import Sidebar from "./Components/Sidebar/SideBar";
import {Col, Container, Row} from "react-bootstrap";
import "./App.css";
import Navbarscrol from "./Components/Navbar/Navbarscrol";
import Homepage from "./Components/Home/Homepage/Homepage";

const App = () => {
    return (<>
            <Container className="container">
                <Row>
                    <Col className="col-md-11">
                        <Homepage/>
                    </Col>
                    <Col className="col-md-1">
                        <Sidebar />
                    </Col>
                    <Col className="col-md-11">
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

export default App;
