import React, {useState} from "react";
import {Field, reduxForm} from "redux-form";
import {Col, Row} from "react-bootstrap";
import style from "./popUp.module.css";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const PopUpGood = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        formData.text = ""
        formData.name = ""
        formData.mail = ""
    }
    return (
        <Row>
            <HomeReduxPopUp onSubmit={onSubmit}/>
        </Row>
    )
}

const PopUp = (props) => {

    const [value, setValue] = useState()

    return (
        <Row className={"col-md-12 justify-content-center " + style.positionPopUp}>
            <Col className="col-md-5 text-center">
                <form className={style.formPopUp} onSubmit={props.handleSubmit}>
                    <Col className={"col-md-12 " + style.formPopUpText}>
                        <h2 className={"pt-5 pb-4 "}>Нужен лучший event? <br/>
                            Оставьте заявку,<br/> и мы перезвоним!</h2>
                        <h3 className={"pb-3 "}>
                            Укажите ваш номер и имя, наш менеджер <br/>
                            перезвонит вам в течении часа в интервале <br/> с 8:00 до 20:00.
                        </h3>
                    </Col>
                    <div className="pt-4 text-center">
                        <Field className={style.formField} placeholder={"Имя"}
                               component={"input"} name={"name"}/>
                    </div>
                    <Col className="pt-4 text-center d-flex justify-content-center col-md-12">
                        <PhoneInput className={"text-center w-50 " + style.formFieldNumber}
                            placeholder="+375 (_ _) _ _ _  _ _  _ _"
                            value={value}
                            onChange={setValue}/>
                    </Col>
                    <div className={"pt-4 pb-3 text-center "}>
                        <button className={"p-4 " + style.buttonStyleForm}>ОТПРАВИТЬ</button>
                    </div>
                </form>
            </Col>
        </Row>
    )
}

const HomeReduxPopUp = reduxForm({form: "Contact"})(PopUp)

export default PopUpGood;