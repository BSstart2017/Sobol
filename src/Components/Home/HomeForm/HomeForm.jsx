import React from "react";
import style from "./homeform.module.css";
import {Field, reduxForm} from "redux-form";
import {Col, Row} from "react-bootstrap";
import HomeContactFooter from "./HomeContactFooter";
import HomeContactMessage from "./HomeContactMessage";


const HomeContactText = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        formData.text = ""
        formData.name = ""
        formData.mail = ""
    }
    return (
        <Row>
            <Row md={12} className="justify-content-end pb-5 ">
                <Col md={6} className="d-none d-sm-block">
                    <HomeContactMessage/>
                </Col>
                <HomeReduxForm onSubmit={onSubmit}/>
            </Row>
            <Col md={12} className="pl-md-5 d-none d-sm-block">
                <HomeContactFooter/>
            </Col>
            <Col xs={12} className="d-block d-sm-none">
                <HomeContactMessage/>
            </Col>
        </Row>
    )
}

const HomeForm = (props) => {
    return (
        <Col md={4} xs={12} className={"pt-md-5 ml-5 " + style.paddingLeftXS4}>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <h2 className={"pt-5 pb-4 " + style.styleTextFormTop}>Оставьте вашу заявку</h2>
                    <h2 className={"pb-3 " + style.styleTextFormBottom}>
                        Напишите нам сообщение <br/>и мы ответим вам в течении <br/> часа в интервале <br/>с 8:00 до 20:00..
                    </h2>
                </div>
                    <div>
                        <Field className={style.formField}
                               placeholder={"Имя"} component={"input"} name={"name"}/>
                    </div>
                    <div>
                        <Field className={style.formField}
                               placeholder={"e-mail"} component={"input"} name={"mail"}/>
                    </div>
                    <div>
                        <Field className={style.formField}
                               placeholder={"Введите текст"} component={"input"} name={"text"}/>
                    </div>
                <div className="pt-4 pb-4">
                    <button className={"p-3 " + style.buttonStyleForm}>ОТПРАВИТЬ ЗАЯВКУ</button>
                </div>
            </form>
        </Col>
    )
}

const HomeReduxForm = reduxForm({form: "Contact"})(HomeForm)

export default HomeContactText;