const NUMBER_NAVBAR = 'NUMBER_NAVBAR';

let initialState = {
    numberNavbar: 0
}

const navBarScrollReducer = (state = initialState, action) => {
    switch (action.type) {
        case NUMBER_NAVBAR : {
            return {...state, numberNavbar: action.numberNavbar}
        }
        default:
            return state;
    }
}

export const numberNavbarAC = (numberNavbar) => ({type: NUMBER_NAVBAR, numberNavbar});


export default navBarScrollReducer;