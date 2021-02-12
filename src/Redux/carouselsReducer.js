const CAROUSELS_SERVICE = 'CAROUSELS_SERVICE';

let initialState = {
    carouselsService: [
        {id:1, imgServices:"/img/biznes.png", textServicesH2: "Бизнес-мероприятия", textServicesH3: "Бизнес-мероприятия – это конференции, семинары, тренинги, форумы, деловые завтраки, бизнес-митинги, презентации и выставки. Основная их цель – создать оптимальные условия для общения, обмена идеями, решения важных вопросов." },
        {id:2, imgServices:"/img/biznes.png", textServicesH2: "ТЕкс2", textServicesH3: "Бизнес-мероприятия – это конференции, семинары, тренинги, форумы, деловые завтраки, бизнес-митинги, презентации и выставки. Основная их цель – создать оптимальные условия для общения, обмена идеями, решения важных вопросов." }
    ]
}

const carouselsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CAROUSELS_SERVICE :{
            return {
                ...state,
                carouselsService: action.id
            ? [...state.carouselsService, action.id]
            : state.carouselsService.filter(id => id !== action.id)}
        }
        default: return state;
    }
}

export const carouselsAC = (id) => ({type: CAROUSELS_SERVICE, id})

export default carouselsReducer;