import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import style from "../Home/Homepage/Homeheader/homeheader.module.css";
import {connect} from "react-redux";
import {numberNavbarAC} from "../../Redux/navBarScrollReducer";

const localState = [
    {id:0, textNavbar: "О НАС"},
    {id:1, textNavbar: "УСЛУГИ"},
    {id:2, textNavbar: "ПОРТФОЛИО"},
    {id:3, textNavbar: "КОНТАКТЫ"}
]

const Navbarscrol = (props) => {
    let textNavbar = localState[props.numberNavbar].textNavbar
    return (
        <Row  className={"w-100 bg-white " + style.positionNavbarScroll}>
            <Col className="col-md-3 d-flex align-items-center justify-content-center">
                <div id='target'>
                    <p className={style.navbarScrollText}>evento
                        <span className={style.headerLogoColorBlue}>.</span>
                    </p>
                </div>
            </Col>
            <Col className="col-md-2 d-flex align-items-center justify-content-center">
                <div >
                <h3 className={style.navbarScrollText}>{textNavbar}</h3>
                </div>
            </Col>
            <Col className="col-md-3 d-flex align-items-center justify-content-center">
                <div>
                    <p className={style.navbarScrollTextNumber}><span className={style.headerLogoColorNumber}>
                        +375(29)</span> 298-98-98</p>
                </div>
            </Col>
            <Col className="col-md-3 p-2 d-flex align-items-center justify-content-center">
                <div>
                    <Button className={"p-3 " + style.headerButtonHeight} type="submit">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</Button>
                </div>
            </Col>
            <Col className={"col-md-1 d-flex align-items-center  justify-content-center pl-5 " + style.navbarScrollTextEng}>
                <span>ENG</span>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => ({
    numberNavbar: state.NavBarScroll.numberNavbar,
})
const mapDispatchToProps = (dispatch) =>{
    return {
        getNumberNavbar:(numberNavbar) => {
            dispatch(numberNavbarAC(numberNavbar));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Navbarscrol);