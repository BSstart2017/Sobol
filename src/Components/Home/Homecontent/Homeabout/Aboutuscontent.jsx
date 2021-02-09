import React from "react";
import style from "./homeabout.module.css"

const Aboutuscontent = () => {
    return (
        <div className={style.whiteSpace} >
            <div className={style.aboutText}>
                <h1>“EVENTOVO AGENCY”</h1>
            </div>
            <div className={style.aboutTextStrategy}>
                <h2>Стратегия</h2>
                <h3 className={style.whiteSpace}>Задаем правильные <br/>вопросы и умеем слушать <br/>отеты.</h3>
                <span className={style.gradientText1}>1</span>
            </div>
            <div className={style.aboutTextInteraction}>
                <h2>Взаимодействие</h2>
                <h3>Менеджер будет <br/>находится <br/>с вами на связи <br/>24/7. </h3>
                <span className={style.gradientText2}>2</span>
            </div>
            <div className={style.aboutTextCreative}>
                <h2>Креатив</h2>
                <h3>Каждое мероприятие <br/>составляется индивидуально <br/>учитывая все <br/>нюансы.</h3>
                <span className={style.gradientText3}>3</span>
            </div>
        </div>
    )
}

export default Aboutuscontent;