import {connect} from "react-redux";
import Contactcarousels from "./Contactcarousels";

debugger
const mapStateToProps = (state) => ({
    carouselsService: state.Carousels.carouselsService
})

const mapDispatchToProps = (dispatch) =>{
    return{

    }
}

const ContactcarouselsContainer = connect(mapStateToProps,mapDispatchToProps)(Contactcarousels)

export default ContactcarouselsContainer