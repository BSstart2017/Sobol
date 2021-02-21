const NUMBER_BUTTON = 'NUMBER_BUTTON';

let initialState = {
    sideBarButtonState: [
        {id : 0, textButton: "КТО", idNav:"#about"},
        {id : 1, textButton: "ЧТО", idNav:"#portfolio"},
        {id : 2, textButton: "КАК", idNav:"#services"},
        {id : 3, textButton: "ГДЕ", idNav:"#form"}
    ],
    numberButton: 0
}

const sideBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case NUMBER_BUTTON : {
            return {...state, numberButton: action.numberButton}
        }
        default:
            return state;
    }
}

export const numberButtonAC = (numberButton) => ({type: NUMBER_BUTTON, numberButton});

export default sideBarReducer;