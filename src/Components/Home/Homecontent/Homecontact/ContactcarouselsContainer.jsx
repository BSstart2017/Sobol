import {connect} from "react-redux";
import Contactcarousels from "./Contactcarousels";
import {carouselsNumberAC} from "../../../../Redux/carouselsReducer";


const mapStateToProps = (state) => ({
    carouselsService: state.Carousels.carouselsService,
    carouselsNumber: state.Carousels.carouselsNumber
})

const mapDispatchToProps = (dispatch) =>{
    return {
        getNumberPlus: (NewPostText) => {
            dispatch(carouselsNumberAC(NewPostText));
        },
        getNumberMinus:(NewPostText) => {
            dispatch(carouselsNumberAC(NewPostText));
        }
    }
}

const ContactcarouselsContainer = connect(mapStateToProps,mapDispatchToProps)(Contactcarousels)

export default ContactcarouselsContainer