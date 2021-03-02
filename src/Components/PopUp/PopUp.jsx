import React, {useState} from "react";
import {Button, Col, Modal} from "react-bootstrap";
import "./popUp.css";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css'

const PopUp = (props) => {
    const [value, setValue] = useState(0)

    let localState = {bool: 0}
    const onButtonOk = () => {
        debugger
    localState.bool = 1
    }

    return (
        <Modal className="positionPopUp"
               {...props}
               size="lg"
               aria-labelledby="contained-modal-title-vcenter"
               centered
        >
            <Modal.Header className="modal-header" closeButton>
            </Modal.Header>
            <Modal.Body id="contained-modal-title-vcenter">
                <div className="formPopUpText" onSubmit={props.handleSubmit}>
                    {(localState.bool === 0)
                        ? <div>
                            <Col className="col-md-12">
                                <h2 className="pt-5 pb-4">Нужен лучший event? <br/>
                                    Оставьте заявку,<br/> и мы перезвоним!</h2>
                                <h3 className="pb-3">
                                    Укажите ваш номер и имя, наш менеджер <br/>
                                    перезвонит вам в течении часа в интервале <br/> с 8:00 до 20:00.
                                </h3>
                            </Col>
                            <div className="pt-4 text-center formFieldNumber">
                                <input placeholder={"Имя"}
                                       name={"name"}/>
                            </div>
                            <Col className="pt-4 text-center d-flex justify-content-center col-md-12">
                                <PhoneInput className="text-center w-50 formFieldNumber "
                                            placeholder="+375 (_ _) _ _ _  _ _  _ _"
                                            value={value}
                                            onChange={setValue}/>
                            </Col>
                        </div>
                        : <div>
                            <h2 className="pb-4">Заявка успешно
                                <br/>отправлена! </h2>
                            <h3 className="pb-3">
                                Спасибо, менеджер позвонит вам в течении час
                            </h3>
                        </div>}
                </div>
            </Modal.Body>
            <Modal.Footer className="pb-5">
                <Button className="p-4 buttonStyleForm"
                        onClick={onButtonOk}>
                    ОТПРАВИТЬ</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default PopUp;