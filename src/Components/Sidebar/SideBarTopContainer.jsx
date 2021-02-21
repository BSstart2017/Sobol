import {connect} from "react-redux";
import SideBarTop from "./SideBarTop";
import {numberButtonAC} from "../../Redux/sideBarReducer";


const mapStateToProps = (state) => ({
    sideBarButtonState: state.Sidebar.sideBarButtonState,
    numberButton: state.Sidebar.numberButton
})

const mapDispatchToProps = (dispatch) =>{
    return {
        staticNumberButton:(NewNumberCarousels) => {
            dispatch(numberButtonAC(NewNumberCarousels));
        }
    }
}

const SideBarTopContainer = connect(mapStateToProps,mapDispatchToProps)(SideBarTop)

export default SideBarTopContainer