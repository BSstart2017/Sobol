import React from "react";
import style from "./homeform.module.css";
import {Col, Row} from "react-bootstrap";
import {numberNavbarAC} from "../../../Redux/navBarScrollReducer";
import {connect} from "react-redux";
import VisibilitySensor from "react-visibility-sensor";
import {numberButtonAC} from "../../../Redux/sideBarReducer";

const HomeContactMessage = (props) => {
    function onChange (isVisible) {
        if(isVisible)
            props.getNumberNavbar(3)
            props.staticNumberButton(3)
    }
    return (
        <Row id="form" className={"pt-md-5 pb-md-5 " + style.bgColorXS}>

            <Col md={4} className={"pt-md-5 d-none d-sm-block " + style.styleTextLeft}>
                <VisibilitySensor onChange={onChange}>
                    {({isVisible    }) =>
                        <div>
                            {isVisible ? <h2 className="p-2 pt-5">e-mail:</h2>
                                : <h2 className="p-2 pt-5">e-mail:</h2>}
                        </div>
                    }
                </VisibilitySensor >

                <h2 className="p-2">телефон:</h2>
                <h2 className="p-2">адрес:</h2>
            </Col>
            <Col md={8} className={"pt-5 d-none d-sm-block " + style.styleTextRight}>
                <h2 className="p-2 pt-5">evento@klub.by</h2>
                <h2 className="p-2">+375(29) 298-98-98</h2>
                <h2 className="p-2 pb-5" >211387, Минск, ул. Немига 56, офис 2</h2>
            </Col>

            <Col xs={5} className={"pt-md-5 d-block d-sm-none " + style.styleTextLeftXS}>
                <VisibilitySensor onChange={onChange}>
                    {({isVisible    }) =>
                        <div className="pt-5">
                            {isVisible ? <h3 className="p-2 pt-5 pl-4">e-mail :</h3>
                                : <h3 className="p-2 pt-5 pl-4">e-mail :</h3>}
                        </div>
                    }
                </VisibilitySensor >

                <h3 className="pl-4">телефон :</h3>
                <h3 className="pl-4">адрес :</h3>
            </Col>
            <Col xs={7} className={"pt-5 d-block d-sm-none " + style.styleTextRightXS}>
                <h4 className="p-2 pt-5">evento@klub.by</h4>
                <h5 className="p-2">+375(29) 298-98-98</h5>
                <h4 className="p-2 pb-5" >211387, Минск, ул. Немига 56, офис 2</h4>
            </Col>
            <Col xs={12} className="pt-5">
                <div className="pl-5 d-block d-sm-none">
                    <img src={process.env.PUBLIC_URL + "/img/icon/Vector.png"} alt="HomeLogo"/>
                </div>
                <div className="d-block d-sm-none">
                    <img src={process.env.PUBLIC_URL + "/img/icon/VectorF.png"} alt="HomeLogo"/>
                </div>
                <div className="d-block d-sm-none pt-5">
                    <img src={process.env.PUBLIC_URL + "/img/icon/VectorVK.png"} alt="HomeLogo"/>
                </div>
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

export default connect(null, mapDispatchToProps) (HomeContactMessage);
