const NUMBER_POP_UP = 'NUMBER_POP_UP';

let initialState = {
    numberPopUp: false
}

const popUpReducer = (state = initialState, action) => {
    switch (action.type) {
        case NUMBER_POP_UP : {
            return {...state, numberPopUp: action.numberPopUp}
        }
        default:
            return state;
    }
}

export const numberPopUpAC = (numberPopUp) => ({type: NUMBER_POP_UP, numberPopUp});

export default popUpReducer;