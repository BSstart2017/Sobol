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
            <h2 className="pb-5 pt-5">ЧТО О НАС ГОВОРЯТ :</h2>
            <h3>“</h3>
            <Col md={12} xs={11} className={style.paddingLeftXS4}>
            <h4 className="pb-4">{p.textReviews1}</h4>
            <h4 className="pb-5">{p.textReviews2}</h4>
            <h3 className="d-block d-sm-none mb-0">“</h3>
            </Col>
        </div>
    )


    let onStaticNumberReviews = (values) => {
        props.numberStaticReviews(values.currentTarget.align)
    }

    const ElementReviewsButton = props.carouselsReviews.map(i =>
        <Col md={1} className="p-0 d-flex justify-content-center">
            <div align={Number(i.id)} onClick={onStaticNumberReviews}
                 className={Number(props.carouselsNumberReviews) === Number(i.id)
                     ? localState.styleButton + " " + style.circleFull
                     : localState.styleButton}>
            </div>
        </Col>
    )


    return (
        <Row>
            <Col xs={12} className={"d-block d-sm-none " + style.PaddingRightXS}>
                    <Col xs={12} className={"text-center " + style.reviewsCarouselsText + " " + style.reviewsBaground}>
                        {ElementsTextReviews[props.carouselsNumberReviews]}
                    </Col>
                <Col xs={12} className={"d-flex justify-content-end pr-5 " + style.Rectangle}>
                    <Col xs={1} className="p-0 d-flex justify-content-between">
                        <h1 onClick={onNumberReviewsPlus} className={"pb-5 " + style.colorNext + " " + style.circleXS}>> </h1>
                    </Col>
                </Col>
            </Col>
            <Col md={12} className={"d-none d-sm-block " + style.PaddingRightXS}>
                <div className={"d-flex justify-content-end pr-5 " + style.Rectangle}>
                    <Col md={6} className={"text-center " + style.reviewsCarouselsText}>
                        {ElementsTextReviews[props.carouselsNumberReviews]}
                        <Row className="justify-content-center">
                            <Col md={1} className="p-0 d-flex justify-content-end">
                                <h1 className={style.colorNext} onClick={onNumberReviewsMinus}>{text1}</h1>
                            </Col>
                            {ElementReviewsButton}
                            <Col md={1} className="p-0 d-flex justify-content-between">
                                <h1 onClick={onNumberReviewsPlus} className={"pb-5 " + style.colorNext}> > </h1>
                            </Col>
                        </Row>
                    </Col>
                </div>
            </Col>
        </Row>
    )
}

export default Homereviews;