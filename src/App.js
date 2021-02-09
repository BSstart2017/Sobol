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
                <Row className="justify-content-md-end">
                    <Col className="col-md-10">
                        <Homepage/>
                    </Col>
                    <Col className="col-md-2">
                        <Sidebar />
                    </Col>
                    <Col className="col-md-12">
                        <Navbarscrol/>
                    </Col>
                    <Col className="col-md-12 justify-content-end">
                        <Home/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
