import React, {useState} from "react";
import {Col, Modal} from "react-bootstrap";
import style from "./popUp.module.css";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'


const PopUp = (props) => {
    const [value, setValue] = useState(0)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Нужен лучший event?</Modal.Title>
            </Modal.Header>
            <Modal.Body id="contained-modal-title-vcenter">
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
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button className={"p-4 " + style.buttonStyleForm} onClick={props.onHide}>ОТПРАВИТЬ</button>
            </Modal.Footer>
        </Modal>
    )
}

export default PopUp;