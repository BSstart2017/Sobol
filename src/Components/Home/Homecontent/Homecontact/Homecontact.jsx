import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homecontact.module.css";
import VisibilitySensor from 'react-visibility-sensor';
import {numberNavbarAC} from "../../../../Redux/navBarScrollReducer";
import {connect} from "react-redux";
import {numberButtonAC} from "../../../../Redux/sideBarReducer";

let localState = {styleButton: "d-flex align-items-center justify-content-center text-center " + style.divHeight}
let text1 = "< предыдущий проект"
let text2 = "< предыдущий"

const Homecontact = (props) => {

    function onChange (isVisible) {
        if(isVisible)
            props.getNumberNavbar(1)
            props.staticNumberButton(1)
    }

    let onStaticNumber = (values) => {
        props.staticNumber(values.currentTarget.align)
    }
    let onNumberPlus = () => {
        props.carouselsNumber < 5
            ? props.getNumberPlus(Number(props.carouselsNumber) + 1)
            : props.getNumberPlus(Number(props.carouselsNumber) - 5)
    }
    let onNumberMinus = () => {
        props.carouselsNumber > 0
            ? props.getNumberMinus(Number(props.carouselsNumber) - 1)
            : props.getNumberMinus(Number(props.carouselsNumber) + 5)
    }
    const openPopUp = () => {
        props.transformPopUp(true)
    }
    let ElementsTextContact = props.carouselsContact.map(p =>
        <div className={p.imgServices} >
            <div className={"ml-md-5 pb-5 " + style.carouselsDiv + " " + style.carouselsDivXS}>
                <div className="d-flex pl-5 pt-5">
                    <h2>{p.textServicesH2}</h2>
                </div>
                <div className="d-flex pl-5 pt-3">
                    <VisibilitySensor onChange={onChange}>
                        {({isVisible    }) =>
                            <div>
                                {isVisible ? <h3 className="pr-5">{p.textServicesH3}</h3>
                                    :  <h3 className="pr-5">{p.textServicesH3}</h3>}
                            </div>
                        }
                    </VisibilitySensor >
                </div>
                <div className={"d-flex justify-content-between pl-md-5 pt-5 pr-md-5 " + style.carouselsTextBorderButtonXS}>
                    <div onClick={openPopUp} className={"text-center pt-2 " + style.carouselsTextBorderButton}>
                        <h4>ЗАКАЗАТЬ</h4>
                    </div>
                    <div className={"text-center pt-2 " + style.carouselsTextBorderButton}><h4>ПОРТФОЛИО</h4></div>
                </div>
            </div>
        </div>
    )

    const ElementButton = props.content.map(i =>
        <div key={i.id} className={Number(props.carouselsNumber) === Number(i.id)
            ? localState.styleButton + " " + style.buttonAction
            : localState.styleButton}>
            <h2 key={i.id} align={Number(i.id)} onClick={onStaticNumber}
                className={style.buttonText}>{i.textButton1}<br/>{i.textButton2}</h2>
        </div>
    )
    return (
        <Row id="portfolio">
            <Col md={12}>
                <Row className={style.carousels}>
                    <Col md={5} xs={6} className={"p-md-0 pt-md-5 d-flex justify-content-end text-center"}>
                        {ElementButton[0]}
                    </Col>
                    <Col md={2} xs={6} className="p-md-0 pt-md-5 d-flex justify-content-center text-center">
                        {ElementButton[1]}
                    </Col>
                    <Col md={5} xs={6} className="pt-md-5 d-flex justify-content-between text-center p-md-0">
                        {ElementButton[2]}
                    </Col>
                    <Col md={5} xs={6} className="p-md-0 pb-md-5 d-flex justify-content-end text-center">
                        {ElementButton[3]}
                    </Col>
                    <Col md={2} xs={6} className="p-md-0 pb-md-5 d-flex justify-content-center text-center">
                        {ElementButton[4]}
                    </Col>
                    <Col md={5} xs={6} className="d-flex pb-md-5 justify-content-between text-center p-md-0">
                        {ElementButton[5]}
                    </Col>
                </Row>
            </Col>
            <Col md={12} xs={12}>
                <Row>
                    <Col md={12} xs={12}>
                        {ElementsTextContact[props.carouselsNumber]}
                    </Col>
                    <Col md={12} className="d-none d-sm-block">
                        <div className={"d-flex justify-content-between p-4 pl-5 pr-5 " + style.styleTextNext}>
                            <div>
                                <h2 onClick={onNumberMinus}> {text1} </h2>
                            </div>
                            <div>
                                <h2 onClick={onNumberPlus}>следующий проект ></h2>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} className="d-block d-sm-none">
                        <div className={"d-flex justify-content-between p-4 pl-5 pr-5 " + style.styleTextNext}>
                            <div>
                                <h2 onClick={onNumberMinus}> {text2} </h2>
                            </div>
                            <div>
                                <h2 onClick={onNumberPlus}>следующий ></h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getNumberNavbar:(numberNavbar) => {
            dispatch(numberNavbarAC(numberNavbar));
        },
        staticNumberButton:(NewNumberCarousels) => {
            dispatch(numberButtonAC(NewNumberCarousels));
        }
    }
}

export default connect(null, mapDispatchToProps) (Homecontact);

