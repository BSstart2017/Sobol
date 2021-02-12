import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homecontact.module.css";

const Contactcarousels = (props) => {

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

    let onNumberPlus =  () => {
        props.carouselsNumber < 5
            ?  props.getNumberPlus(props.carouselsNumber + 1)
            : props.getNumberPlus(props.carouselsNumber - 5)
    }

    let onNumberMinus =  () => {
        props.carouselsNumber > 0
            ?  props.getNumberMinus(props.carouselsNumber - 1)
            : props.getNumberMinus(props.carouselsNumber + 5)
    }

    return (
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
    )
}


export default Contactcarousels;