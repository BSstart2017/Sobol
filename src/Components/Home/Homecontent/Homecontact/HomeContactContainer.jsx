import {connect} from "react-redux";
import {carouselsNumberAC} from "../../../../Redux/carouselsReducer";
import Homecontact from "./Homecontact";


const mapStateToProps = (state) => ({
    carouselsService: state.Carousels.carouselsService,
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
        }
    }
}

const HomeContactContainer = connect(mapStateToProps,mapDispatchToProps)(Homecontact)

export default HomeContactContainer