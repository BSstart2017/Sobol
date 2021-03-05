import React from "react";
import style from "../Homepage/home.module.css";
import {Col} from "react-bootstrap";

const HomeContactFooter = () => {
    return (
        <Col md={2} className={"d-flex align-items-end pl-5 " + style.bgColor}>
            <div className={"pl-5 d-none d-sm-block " + style.footerPadding}>
                <img src={process.env.PUBLIC_URL + "/img/icon/WatsApp.png"} alt="HomeLogo"/>
            </div>
            <div className={"d-none d-sm-block " + style.footerPadding}>
                <img src={process.env.PUBLIC_URL + "/img/icon/FB.png"} alt="HomeLogo"/>
            </div>
            <div className={"d-none d-sm-block " + style.footerPadding}>
                <img src={process.env.PUBLIC_URL + "/img/icon/VK.png"} alt="HomeLogo"/>
            </div>
        </Col>
    )
}
export default HomeContactFooter;