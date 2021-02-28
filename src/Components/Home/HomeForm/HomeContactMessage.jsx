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
        <Row id="form" className="pt-5 pb-5">
            <Col className={"col-md-3 pt-5 " + style.styleTextLeft}>
                <VisibilitySensor onChange={onChange}>
                    {({isVisible    }) =>
                        <div>
                            {isVisible ? <h2 className="p-2 pt-5">e-mail:</h2>  : <h2 className="p-2 pt-5">e-mail:</h2>}
                        </div>
                    }
                </VisibilitySensor >

                <h2 className="p-2">телефон:</h2>
                <h2 className="p-2">адрес:</h2>
            </Col>
            <Col className={"col-md-8 pt-5 " + style.styleTextRight}>
                <h2 className="p-2 pt-5">evento@klub.by</h2>
                <h2 className="p-2">+375(29) 298-98-98</h2>
                <h2 className="p-2 pb-5" >211387, Минск, ул. Немига 56, офис 2</h2>
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
