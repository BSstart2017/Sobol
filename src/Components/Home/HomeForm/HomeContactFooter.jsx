import React from "react";
import style from "../Homepage/home.module.css";
import {Col} from "react-bootstrap";

const HomeContactFooter = () => {
    return (
        <Col className="col-md-2 d-flex align-items-end pl-5">
            <div className={"pl-5 " + style.footerPadding}>
                <img src={process.env.PUBLIC_URL + "/img/icon/WatsApp.png"} alt="HomeLogo"/>
            </div>
            <div className={style.footerPadding}>
                <img src={process.env.PUBLIC_URL + "/img/icon/FB.png"} alt="HomeLogo"/>
            </div>
            <div className={style.footerPadding}>
                <img src={process.env.PUBLIC_URL + "/img/icon/VK.png"} alt="HomeLogo"/>
            </div>
        </Col>
    )
}
export default HomeContactFooter;