import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import style from "./popUp.module.css";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'
import HomeContactMessage from "../Home/HomeForm/HomeContactMessage";
import HomeContactFooter from "../Home/HomeForm/HomeContactFooter";
import {reduxForm} from "redux-form";
import {connect} from "react-redux";
import {transformPopUp} from "../../Redux/popUpReducer";



const PopUpText = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        formData.name = ""
    }
    return (
        <Row>
            <Row className="col-md-12 justify-content-center pb-5">
                <Col className="col-md-6">
                    <HomeContactMessage/>
                </Col>
                <PopUpReduxForm numberPopUp={props.numberPopUp}
                                transformPopUp={props.transformPopUp}
                                onSubmit={onSubmit}/>
            </Row>
            <Col className="col-md-12 pl-5">
                <HomeContactFooter/>
            </Col>
        </Row>
    )
}

const PopUp =  (props) => {
    const [value, setValue] = useState(0)
    const closePopUp = () =>{
        props.transformPopUp(false)
    }
    return (
        <Row onClick={closePopUp} className={props.numberPopUp
            ? "col-md-12 justify-content-center " + style.positionPopUp + " " + style.formTransformActive
            : "col-md-12 justify-content-center " + style.positionPopUp + " " + style.formTransformNone}>
            <Col className="col-md-5 text-center">
                <div className={style.formPopUp} onSubmit={props.handleSubmit}>
                    <Col className={"col-md-12 " + style.formPopUpText}>
                        <h2 className={"pt-5 pb-4 "}>Нужен лучший event? <br/>
                            Оставьте заявку,<br/> и мы перезвоним!</h2>
                        <h3 className={"pb-3 "}>
                            Укажите ваш номер и имя, наш менеджер <br/>
                            перезвонит вам в течении часа в интервале <br/> с 8:00 до 20:00.
                        </h3>
                    </Col>
                    <div className="pt-4 text-center">
                        <input className={style.formField} placeholder={"Имя"}
                               name={"name"}/>
                    </div>
                    <Col className="pt-4 text-center d-flex justify-content-center col-md-12">
                        <PhoneInput className={"text-center w-50 " + style.formFieldNumber}
                                    placeholder="+375 (_ _) _ _ _  _ _  _ _"
                                    value={value}
                                    onChange={setValue}/>
                    </Col>
                    <div className={"pt-4 pb-3 text-center "}>
                        <button className={"p-4 " + style.buttonStyleForm}
                                onClick={closePopUp}>ОТПРАВИТЬ</button>
                    </div>
                </div>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => ({
    numberPopUp: state.PopUpNumber.numberPopUp,
})

const PopUpReduxForm = reduxForm({form: "Contact"})(PopUp)

export default connect(mapStateToProps, {transformPopUp}) (PopUpText);


