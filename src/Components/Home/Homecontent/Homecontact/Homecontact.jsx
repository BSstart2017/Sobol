import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homecontact.module.css";

let localState = {styleButton: "d-flex align-items-center justify-content-center text-center " + style.divHeight}

const Homecontact = (props) => {

    let onStaticNumber = (values) => {
        props.staticNumber(values.currentTarget.align)
    }
    let onNumberPlus =  () => {
        props.carouselsNumber < 5
            ?  props.getNumberPlus(Number(props.carouselsNumber) + 1)
            : props.getNumberPlus(Number(props.carouselsNumber) - 5)
    }
    let onNumberMinus =  () => {
        props.carouselsNumber > 0
            ? props.getNumberMinus(Number(props.carouselsNumber) - 1)
            : props.getNumberMinus(Number(props.carouselsNumber) + 5)
    }

    let ElementsTextServices = props.carouselsService.map(p =>
        <div>
            <img key={p.id} className="w-100 img-fluid" src={process.env.PUBLIC_URL + p.imgServices} alt="CarouselsImg"/>
            <div className={"pb-0 " + style.carouselsDiv}>
                <div className="d-flex pl-5 pt-5">
                    <h2 key={p.id}>{p.textServicesH2}</h2>
                </div>
                <div className="d-flex pl-5 pt-3">
                    <h3 key={p.id}>{p.textServicesH3}</h3>
                </div>
                <div className="d-flex justify-content-between pl-5 pt-5 pr-5 ">
                    <div className={"text-center pt-2 " + style.carouselsTextBorderButton}><h4>ЗАКАЗАТЬ</h4>
                    </div>
                    <div className={"text-center pt-2 " + style.carouselsTextBorderButton}><h4>ПОРТФОЛИО</h4>
                    </div>
                </div>
            </div>
        </div>
    )

    const ElementButton = props.content.map( i =>
            <div key={i.id} className={Number(props.carouselsNumber) === Number(i.id)
                ? localState.styleButton + " " + style.buttonAction
                : localState.styleButton}>
                <h2 key={i.id} align={Number(i.id)} onClick={onStaticNumber}
                    className={style.buttonText}>{i.textButton1}<br/>{i.textButton2}</h2>
            </div>
        )

    return (
        <Row>
            <Col className="col-md-12">
                <Row className={style.carousels}>
                    <Col className={"col-md-5 p-0 pt-5 d-flex justify-content-end text-center"}>
                        {ElementButton[0]}
                    </Col>
                    <Col className="col-md-2 p-0 pt-5 d-flex justify-content-center text-center">
                        {ElementButton[1]}
                    </Col>
                    <Col className="col-md-5 pt-5 d-flex justify-content-between text-center p-0">
                        {ElementButton[2]}
                    </Col>
                    <Col className="col-md-5 p-0 d-flex justify-content-end text-center">
                        {ElementButton[3]}
                    </Col>
                    <Col className="col-md-2 p-0 d-flex justify-content-center text-center">
                        {ElementButton[4]}
                    </Col>
                    <Col className="col-md-5 d-flex justify-content-between text-center p-0">
                        {ElementButton[5]}
                    </Col>
                </Row>
            </Col>
            <Col className="col-md-12">
                <Row>
                    <Col className="col-md-12 pr-0 pt-5">
                        {ElementsTextServices[props.carouselsNumber]}
                    </Col>
                    <Col>
                        <div className="d-flex justify-content-between">
                            <div>
                                <h2 onClick={onNumberMinus}>ПРЕДЫДУЩИЙ ПРОЕКТ</h2>
                            </div>
                            <div>
                                <h2 onClick={onNumberPlus}>СЛЕДУЮЩИЙ ПРОЕКТ</h2>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default Homecontact;