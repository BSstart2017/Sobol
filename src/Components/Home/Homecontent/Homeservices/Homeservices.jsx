import React from "react";
import {Col, Row} from "react-bootstrap";
import style from "./homeservices.module.css";
import VisibilitySensor from "react-visibility-sensor";
import {numberNavbarAC} from "../../../../Redux/navBarScrollReducer";
import {connect} from "react-redux";
import {numberButtonAC} from "../../../../Redux/sideBarReducer";

const Homeservices = (props) => {
    function onChange(isVisible) {
        if (isVisible)
            props.getNumberNavbar(2)
        props.staticNumberButton(2)
    }

    function onChangeTwo(isVisible) {
        if (isVisible)
            props.getNumberNavbar(2)
        props.staticNumberButton(2)
    }

    return (
        <Row className={"pr-md-0 mr-md-0 ml-md-0 " + style.rowBgColor}>
            <Col md={12} className="pr-md-0">
                <h2 id="services" className={"pt-md-5 text-right d-none d-sm-block " + style.textStyle}>
                    Последние кейсы,<br/></h2>
                <h2 className={"text-right d-none d-sm-block " + style.textStyle}>как это было:</h2>
                <Col md={10} xs={12} className={"pr-0 pt-md-5  " + style.imgFishPadding + " " + style.imgFishPaddingXS}>
                    <div className={style.Fish1}>
                    </div>
                </Col>
                <Row className="pr-md-0 mr-md-0 ml-md-0">
                    <Col md={4} xs={6} className={"pr-md-0 " + style.imgFishPadding + " " + style.imgFishPaddingXS}>
                        <div className={"pl-0 pr-0 " + style.Fish2 + " " + style.Fish2XS}>
                        </div>
                    </Col>
                    <Col md={6} xs={6} className="pr-md-0 pl-md-0 pb-5">
                        <div className={"pl-0 pr-0 " + style.Fish3 + " " + style.Fish3XS}>
                        </div>
                    </Col>
                </Row>
                <Col md={4} xs={9} className={"position-absolute w-100 "
                + style.containerText + " " + style.carouselsDiv + " " + style.containerTextXS}>
                    <VisibilitySensor onChange={onChange}>
                        {({isVisible}) =>
                            <div>
                                {isVisible
                                    ? <h2 className="d-flex pl-md-5">Корпаративный <br/>викенд</h2>
                                    : <h2 className="d-flex pl-md-5">Корпаративный <br/>викенд</h2>}
                            </div>
                        }
                    </VisibilitySensor>
                    <h3 className="d-flex pl-md-5 pt-5">Бизнес-мероприятия – это <br/>
                        конференции, семинары, тренинги, <br/>
                        форумы, деловые завтраки,<br/>
                        бизнес-митинги, презентации и <br/>
                        выставки. Основная их цель – создать <br/>
                        оптимальные условия для общения,<br/>
                        обмена идеями, решения важных <br/>
                        вопросов.
                    </h3>
                    <div className="d-flex justify-content-between p-5">
                        <div className={"text-center pt-md-2 " + style.carouselsTextBorderButton}>
                            <h4 className="mt-2 mr-5 ml-5 mb-3">УЗНАТЬ ПОДРОБНЕЕ</h4>
                        </div>
                    </div>
                </Col>
            </Col>
            <Col md={12} xs={12} className="pr-md-0 pb-md-5">
                <Col md={10} xs={12} className={"pr-0 " + style.imgFishPadding + " " + style.imgFishPaddingXS}>
                    <div className={style.Tourism1}>
                    </div>
                </Col>
                <Row className="pr-0 mr-0 ml-0">
                    <Col md={6} xs={6} className={"pr-0 " + style.imgFishPadding + " " + style.imgFishPaddingXS}>
                        <div className={style.Tourism2 + " " + style.Tourism2XS}>
                        </div>
                    </Col>
                    <Col md={4} xs={6} className="pr-0 pl-0">
                        <div className={style.Tourism3 + " " + style.Tourism3XS}>
                        </div>
                    </Col>
                </Row>
                <Col md={4} xs={9}
                     className={"position-absolute w-100 " + style.containerTextTourism + " " + style.carouselsDiv
                     + " " + style.containerTextXS}>
                    <h2 className="d-flex pl-md-5">Party dla Lenovo</h2>
                    <h3 className="d-flex pl-md-5 pt-5">Корпаративное мероприятие <br/>
                        на Ивана- купало. <br/>
                        Организовано на пляже <br/>
                        Балтийского моря, закат, <br/>
                        костер и музыка и <br/>
                        бесконечная атмосфера <br/>
                        праздника и романтики.
                    </h3>
                    <div className="d-flex justify-content-between p-5">
                        <div className={"text-center pt-2 " + style.carouselsTextBorderButton}>
                            <h4 className="mt-2 mr-5 ml-5 mb-3">УЗНАТЬ ПОДРОБНЕЕ</h4>
                        </div>
                    </div>
                </Col>
            </Col>
            <Col md={12} xs={12} className="pr-0">
                <Col md={10} xs={12} className={"pr-0 pt-5 " + style.imgFishPadding + " " + style.imgFishPaddingXS}>
                    <div className={style.Eat1}>
                    </div>
                </Col>
                <Row className="pr-0 mr-0 ml-0">
                    <Col md={3} xs={6} className={"pr-0 pb-5 " + style.imgFishPadding + " " + style.imgFishPaddingXS}>
                        <div className={style.Eat2 + " " + style.Eat2XS}>
                        </div>
                    </Col>
                    <Col md={7} xs={6} className="pr-0 pb-5 pl-0">
                        <div className={style.Eat3 + " " + style.Eat3XS}>
                        </div>
                    </Col>
                </Row>
                <Col md={4} xs={9} className={"position-absolute w-100 " + style.containerTextEat + " "
                + style.carouselsDiv + " " + style.containerTextXS}>
                    <h2 className="d-flex pl-md-5">Кулинарны мастер-<br/>класс</h2>
                    <h3 className="d-flex pl-md-5 pt-5">Итальянский повар обучил <br/>
                        коллектив не только вкусно <br/>
                        готовить, но и взаимодействовать в <br/>
                        команде и рассчитывать время <br/>
                        необходимое для выполнения <br/>
                        совместных задач.
                    </h3>
                    <div className="d-flex justify-content-between p-5">
                        <div className={"text-center pt-2 " + style.carouselsTextBorderButton}>
                            <VisibilitySensor onChange={onChangeTwo}>
                                {({isVisible}) =>
                                    <div>
                                        {isVisible
                                            ? <h4 className="mt-2 mr-5 ml-5 mb-3">УЗНАТЬ ПОДРОБНЕЕ</h4>
                                            : <h4 className="mt-2 mr-5 ml-5 mb-3">УЗНАТЬ ПОДРОБНЕЕ</h4>}
                                    </div>
                                }
                            </VisibilitySensor>
                        </div>
                    </div>
                </Col>
            </Col>
            <Col md={10} xs={12}>
                <a className={"d-flex justify-content-end pb-5 " + style.textNext}>Смотреть ещё ></a>
            </Col>
        </Row>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getNumberNavbar: (numberNavbar) => {
            dispatch(numberNavbarAC(numberNavbar));
        },
        staticNumberButton: (NewNumberCarousels) => {
            dispatch(numberButtonAC(NewNumberCarousels));
        }
    }
}

export default connect(null, mapDispatchToProps)(Homeservices);
