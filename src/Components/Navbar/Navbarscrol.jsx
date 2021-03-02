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
            <Col md={3} xs={4} className="d-flex align-items-center justify-content-center">
                <div id='target'>
                    <p className={style.navbarScrollText + " " + style.navbarScrollTextXS}>
                        evento<span>.</span></p>
                </div>
            </Col>
            <Col md={2} xs={5} className="d-flex align-items-center justify-content-center">
                <div >
                <h3 className={style.navbarScrollText + " " + style.navbarScrollTextNavXS}>
                    {textNavbar}</h3>
                </div>
            </Col>
            <Col xs={3} className="d-block d-sm-none">
                <div className="d-flex align-items-center justify-content-center" >
                    <h3 className={style.navbarScrollText + " " + style.navbarScrollTextNavXS}>
                        +375</h3>
                </div>
            </Col>
            <Col md={3} className="d-none d-sm-block">
                <div className="d-flex align-items-center justify-content-center">
                    <p className={"pt-4 " + style.navbarScrollTextNumber}>
                        <span className={style.headerLogoColorNumber}>+375(29)</span>
                        298-98-98</p>
                </div>
            </Col>
            <Col md={3} className="d-none d-sm-block">
                <div className="p-2 d-flex align-items-center justify-content-center">
                    <Button className={"p-3 " + style.headerButtonHeight} type="submit">БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</Button>
                </div>
            </Col>
            <Col md={1} className="d-none d-sm-block">
                <div className={"d-flex align-items-center  justify-content-center pl-5 " + style.navbarScrollTextEng}>
                    <span className="pt-4">ENG</span>
                </div>
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