import React from "react";
import {Col, Nav, Row} from "react-bootstrap";
import style from "./sidebar.module.css";

const SideBarBottom = (props) => {

    let onStaticNumberButton = (values) => {
        props.staticNumberButton(values.currentTarget.align)
    }

    const ElementSideBarButton = props.sideBarButtonState.map(i =>
        <Row className="pl-2">
            <div align={Number(i.id)} onClick={onStaticNumberButton}
                 className={Number(props.numberButton) === Number(i.id)
                     ? style.sidebarRightText + " " + style.sidebarButtonActive
                     : style.sidebarRightText}>
                <Col className="col-md-1">
                    <Nav.Link className="pt-4 pb-4" href={i.idNav}>{i.textButton}</Nav.Link>
                </Col>
            </div>
        </Row>
    )

    return (
        <div className={style.positionSidebar}>
                {ElementSideBarButton}
        </div>
    )
}

export default SideBarBottom;