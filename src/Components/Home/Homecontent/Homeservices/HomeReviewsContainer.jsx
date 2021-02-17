import {connect} from "react-redux";
import {carouselsNumberReviewsAC} from "../../../../Redux/carouselsReducer";
import Homereviews from "./Homereviews";


const mapStateToProps = (state) => ({
    carouselsReviews: state.Carousels.carouselsReviews,
    carouselsNumberReviews: state.Carousels.carouselsNumberReviews
})

const mapDispatchToProps = (dispatch) =>{
    return {
        getNumberReviewsPlus: (id) => {
            dispatch(carouselsNumberReviewsAC(id));
        },
        getNumberReviewsMinus:(id) => {
            dispatch(carouselsNumberReviewsAC(id));
        },
        numberStaticReviews:(id) => {
            dispatch(carouselsNumberReviewsAC(id));
        }
    }
}

const HomeReviewsContainer = connect(mapStateToProps,mapDispatchToProps)(Homereviews)

export default HomeReviewsContainer