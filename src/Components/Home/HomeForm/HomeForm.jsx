import React from "react";
import style from "./homeform.module.css";
import {Field, reduxForm} from "redux-form";

const HomeContactText = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <HomeReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const HomeForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Имя"} component={"input"} name={"name"}/>
            </div>
            <div>
                <Field placeholder={"e-mail"} component={"input"} name={"mail"}/>
            </div>
            <div>
                <Field placeholder={"Введите текст"} component={"input"} name={"text"}/>
            </div>
            <div>
                <button>Отправить заявку</button>
            </div>
        </form>
    )
}

const HomeReduxForm = reduxForm({form: "Contact"})(HomeForm)

export default HomeContactText;