import {connect} from "react-redux";
import {carouselsNumberAC} from "../../../../Redux/carouselsReducer";
import Homecontact from "./Homecontact";
import {numberPopUpAC} from "../../../../Redux/popUpReducer";


const mapStateToProps = (state) => ({
    carouselsContact: state.Carousels.carouselsContact,
    carouselsNumber: state.Carousels.carouselsNumber,
    content: state.Carousels.content
})

const mapDispatchToProps = (dispatch) =>{
    return {
        getNumberPlus: (NewNumberCarousels) => {
            dispatch(carouselsNumberAC(NewNumberCarousels));
        },
        getNumberMinus:(NewNumberCarousels) => {
            dispatch(carouselsNumberAC(NewNumberCarousels));
        },
        staticNumber:(NewNumberCarousels) => {
            dispatch(carouselsNumberAC(NewNumberCarousels));
        },
        transformPopUp:(numberPopUp) => {
            dispatch(numberPopUpAC(numberPopUp));
        }

    }
}

const HomeContactContainer = connect(mapStateToProps,mapDispatchToProps)(Homecontact)

export default HomeContactContainer