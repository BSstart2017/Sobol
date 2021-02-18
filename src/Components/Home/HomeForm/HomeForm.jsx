import React from "react";
import style from "./homeform.module.css";
import {Field, reduxForm} from "redux-form";
import {Col, Row} from "react-bootstrap";
import HomeContactFooter from "./HomeContactFooter";
import HomeContactMessage from "./HomeContactMessage";

const HomeContactText = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <Row>
            <Row className="col-md-12 justify-content-center pb-5">
                <Col className="col-md-6">
                    <HomeContactMessage/>
                </Col>
                <HomeReduxForm onSubmit={onSubmit}/>
            </Row>
            <Col className="col-md-12 pl-5">
                <HomeContactFooter/>
            </Col>
        </Row>
    )
}

const HomeForm = (props) => {
    return (
        <Col className="col-md-4 pt-5">
            <form onSubmit={props.handleSubmit}>
                <div>
                    <h2 className={"pt-5 pb-4 " + style.styleTextFormTop}>Оставьте вашу заявку</h2>
                    <h2 className={"pb-3 " + style.styleTextFormBottom}>
                        Напишите нам сообщение и мы ответим вам в течении <br/> часа в интервале <br/>с 8:00 до 20:00..
                    </h2>
                </div>
                    <div>
                        <Field className={style.formField} placeholder={"Имя"} component={"input"} name={"name"}/>
                    </div>
                    <div>
                        <Field className={style.formField} placeholder={"e-mail"} component={"input"} name={"mail"}/>
                    </div>
                    <div>
                        <Field className={style.formField} placeholder={"Введите текст"} component={"input"} name={"text"}/>
                    </div>
                <div className="pt-4">
                    <button className={"p-3 " + style.buttonStyleForm}>ОТПРАВИТЬ ЗАЯВКУ</button>
                </div>
            </form>
        </Col>
    )
}

const HomeReduxForm = reduxForm({form: "Contact"})(HomeForm)

export default HomeContactText;