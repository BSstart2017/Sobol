import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homeservices.module.css";

let localState = {styleButton: "text-center mt-3 " + style.circle}
let text1 = "<"

const Homereviews = (props) => {

    let onNumberReviewsPlus = () => {
        props.carouselsNumberReviews < 5
            ? props.getNumberReviewsPlus(Number(props.carouselsNumberReviews) + 1)
            : props.getNumberReviewsPlus(Number(props.carouselsNumberReviews) - 5)
    }
    let onNumberReviewsMinus = () => {
        props.carouselsNumberReviews > 0
            ? props.getNumberReviewsMinus(Number(props.carouselsNumberReviews) - 1)
            : props.getNumberReviewsMinus(Number(props.carouselsNumberReviews) + 5)
    }

    let ElementsTextReviews = props.carouselsReviews.map(p =>
        <div>
            <h2 className="pb-5">ЧТО О НАС ГОВОРЯТ:</h2>
            <h3>“</h3>
            <h4 className="pb-4">{p.textReviews1}</h4>
            <h4 className="pb-5">{p.textReviews2}</h4>
        </div>
    )

    let onStaticNumberReviews = (values) => {
        props.numberStaticReviews(values.currentTarget.align)
    }

    const ElementReviewsButton = props.carouselsReviews.map(i =>
        <Col className="col-md-1 p-0 d-flex justify-content-center">
            <div align={Number(i.id)} onClick={onStaticNumberReviews}
                  className={Number(props.carouselsNumberReviews) === Number(i.id)
                ? localState.styleButton + " " + style.circleFull
                : localState.styleButton}>
            </div>
        </Col>
    )


    return (
        <Row>
            <Col className="col-md-12">
                <img className="img-fluid w-100" src={process.env.PUBLIC_URL + "/img/Rectangle112.png"}
                     alt="Rectangle112"/>
                <Col
                    className={"col-md-6 justify-content-end position-absolute text-center " + style.reviewsCarouselsPos + " " + style.reviewsCarouselsText}>
                    {ElementsTextReviews[props.carouselsNumberReviews]}
                    <Row className="justify-content-center">
                        <Col className="col-md-1 p-0 d-flex justify-content-end">
                            <h1 className={style.colorNext} onClick={onNumberReviewsMinus}>{text1}</h1>
                        </Col>
                        {ElementReviewsButton}
                        <Col className="col-md-1 p-0 d-flex justify-content-between">
                            <h1 onClick={onNumberReviewsPlus} className={style.colorNext}> > </h1>
                        </Col>
                    </Row>
                </Col>
            </Col>
        </Row>
    )
}

export default Homereviews;