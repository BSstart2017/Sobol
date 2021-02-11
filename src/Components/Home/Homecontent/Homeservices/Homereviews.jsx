import React from "react";
import {Button, Col, Row} from "react-bootstrap";
import style from "./homeservices.module.css";


const Homereviews = () => {
    return (
        <Row>
            <Col className="col-md-12">
                <img className="img-fluid w-100" src={process.env.PUBLIC_URL + "/img/Rectangle112.png"}
                     alt="Rectangle112"/>
                <Col
                    className={"col-md-6 justify-content-end position-absolute text-center " + style.reviewsCarouselsPos + " " + style.reviewsCarouselsText}>
                    <h2>ЧТО О НАС ГОВОРЯТ:</h2><br/><br/>
                    <h3>“</h3>
                    <h4 className="pb-5">Абсолютная надежность и блестящая реализация <br/>
                        проектов. Благодаря такому подходу к работе,<br/>
                        команда Evento идеально вписывается в нашу <br/>
                        бизнес-модель. Особенно хочется отметить умение <br/>
                        успешно работать в мультикультурной среде в <br/>
                        нескольких странах одновременно. <br/><br/>
                        Руководитель PR-департамента Альфа-Банк Минск</h4>
                    <Button>saddsa</Button>
                </Col>
            </Col>
        </Row>
    )
}

export default Homereviews;