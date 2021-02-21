import {connect} from "react-redux";
import {numberButtonAC} from "../../Redux/sideBarReducer";
import SideBarBottom from "./SideBarBottom";


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

const SideBarBottomContainer = connect(mapStateToProps,mapDispatchToProps)(SideBarBottom)

export default SideBarBottomContainer