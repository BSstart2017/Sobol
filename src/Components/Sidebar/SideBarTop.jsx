import React from "react";
import {Col, Nav, Row} from "react-bootstrap";
import style from "./sidebar.module.css";
import Sidebareng from "./Sidebareng";

const SideBarTop = (props) => {

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
        <div className="h-100">
            <Row className={style.sidebarEngPosition}>
                <div className="d-flex align-items-center">
                    <Col className="col-md-12">
                        <Sidebareng/>
                    </Col>
                </div>
            </Row>
            <div>
                {ElementSideBarButton}
            </div>
                <Col className={style.styleScroll}>
                    <Nav.Link href="#form">SCROLL></Nav.Link>
                </Col>
        </div>
    )
}

export default SideBarTop;