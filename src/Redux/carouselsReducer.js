const CAROUSELS_NUMBER = 'CAROUSELS_NUMBER';

let initialState = {
    carouselsService: [
        {id:1, imgServices: "/img/biznes1.png", textServicesH2: "Бизнес-мероприятия",
            textServicesH3: "Бизнес-мероприятия – это конференции, семинары, тренинги, форумы, деловые завтраки, бизнес-митинги, презентации и выставки. Основная их цель – создать оптимальные условия для общения, обмена идеями, решения важных вопросов." },
        {id:2, imgServices:"/img/biznes2.png", textServicesH2: "Cемейные- мероприятия",
            textServicesH3: "Семьи, регулярно участвующие в совместных полезных мероприятиях, ощущают большую любовь и гармонию. Возможность обсудить со своими детьми учения Евангелия, а дети будут более охотно слушать своих родителей и слушаться их, если между ними сложатся близкие отношения." },
        {id:3, imgServices:"/img/biznes3.png", textServicesH2: "Ночные- мероприятия",
            textServicesH3: "Превратим бессонницу в приятное событие. KudaGo нашел прекрасные варианты где развлечься ночью в городе, который никогда не спит. Пройдите автомобильный квест о Хайнзенберге, участвуйте в турнире World of Tanks и смотрите шедевры мирового кинематографа.\n" },
        {id:4, imgServices:"/img/biznes6.png", textServicesH2: "Спортивные- мероприятия",
            textServicesH3: "Организация спортивных мероприятий. Общая популяризация спортивного образа жизни - одна из важнейших тенденций современного мира. В здоровом теле – здоровый дух." },
        {id:5, imgServices:"/img/biznes5.png", textServicesH2: "Hr- мероприятия",
            textServicesH3: "Важной функцией традиционных мероприятий является формирование корпоративной культуры, соответствующего отношения сотрудников к бренду, продукции, компании." },
        {id:6, imgServices:"/img/biznes4.png", textServicesH2: "Индивидуальные мероприятия",
            textServicesH3: "Не нашел подходящее мероприятие? Нужна помощь в организации события? Оставьте свой телефон, и мы с вами свяжемся. Подберем концепцию под ваши нужды и желания, сделаем все оригинально и под ключ." }
    ],
    carouselsNumber: 0
}

const carouselsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CAROUSELS_NUMBER :{
            return {...state, carouselsNumber: action.carouselsNumber}
        }
        default: return state;
    }
}

export const carouselsNumberAC = (carouselsNumber) => ({type: CAROUSELS_NUMBER, carouselsNumber})

export default carouselsReducer;