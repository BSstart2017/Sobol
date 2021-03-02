import style from './../Components/Home/Homecontent/Homecontact/homecontact.module.css';

const CAROUSELS_NUMBER = 'CAROUSELS_NUMBER';
const CAROUSELS_NUMBER_REVIEWS = 'CAROUSELS_NUMBER_REVIEWS';

let initialState = {
    carouselsContact: [
        {
            id: 0, imgServices: style.biznes1, textServicesH2: "Бизнес - мероприятия",
            textServicesH3: "Бизнес-мероприятия – это конференции, семинары, тренинги, форумы, деловые завтраки, бизнес-митинги, презентации и выставки. Основная их цель – создать оптимальные условия для общения, обмена идеями, решения важных вопросов."
        },
        {
            id: 1, imgServices: style.biznes2, textServicesH2: "Cемейные - мероприятия",
            textServicesH3: "Семьи, регулярно участвующие в совместных полезных мероприятиях, ощущают большую любовь и гармонию. Возможность обсудить со своими детьми учения Евангелия, а дети будут более охотно слушать своих родителей и слушаться их, если между ними сложатся близкие отношения."
        },
        {
            id: 2, imgServices: style.biznes3, textServicesH2: "Ночные - мероприятия",
            textServicesH3: "Превратим бессонницу в приятное событие. KudaGo нашел прекрасные варианты где развлечься ночью в городе, который никогда не спит. Пройдите автомобильный квест о Хайнзенберге, участвуйте в турнире World of Tanks и смотрите шедевры мирового кинематографа.\n"
        },
        {
            id: 3, imgServices: style.biznes4, textServicesH2: "Спортивные - мероприятия",
            textServicesH3: "Организация спортивных мероприятий. Общая популяризация спортивного образа жизни - одна из важнейших тенденций современного мира. В здоровом теле – здоровый дух."
        },
        {
            id: 4, imgServices: style.biznes5, textServicesH2: "Hr - мероприятия",
            textServicesH3: "Важной функцией традиционных мероприятий является формирование корпоративной культуры, соответствующего отношения сотрудников к бренду, продукции, компании."
        },
        {
            id: 5, imgServices: style.biznes6, textServicesH2: "Индивидуальные мероприятия",
            textServicesH3: "Не нашел подходящее мероприятие? Нужна помощь в организации события? Оставьте свой телефон, и мы с вами свяжемся. Подберем концепцию под ваши нужды и желания, сделаем все оригинально и под ключ."
        }
    ],
    carouselsNumber: 0,
    content: [
        {id: 0, textButton1: "Бизнес-", textButton2: "мероприятия"},
        {id: 1, textButton1: "Семейные-", textButton2: "мероприятия"},
        {id: 2, textButton1: "Ночные-", textButton2: "мероприятия"},
        {id: 3, textButton1: "Спортивные-", textButton2: "мероприятия"},
        {id: 4, textButton1: "HR-", textButton2: "мероприятия"},
        {id: 5, textButton1: "Индивидуальные-", textButton2: "мероприятия"}
    ],
    carouselsReviews: [
        {
            id: 0,
            textReviews1: "Абсолютная надежность и блестящая реализация проектов. Благодаря такому подходу к работе, команда Evento идеально вписывается в нашу бизнес-модель. Особенно хочется отметить умение успешно работать в мультикультурной среде в нескольких странах одновременно.",
            textReviews2: "Руководитель PR-департамента Альфа-Банк Минск"
        },
        {
            id: 1,
            textReviews1: "Если говорить об идеально организованном мероприятии, то Party dla Lenovo в июне 2019 года, лучший тому пример. Мы очень благодарны  Eventovo  за смелость идей и безупречный стиль их воплощения.",
            textReviews2: "Rakuten Viber Business Development Director CIS"
        },
        {
            id: 2,
            textReviews1: "Хочется отметить профессионализм команды ивент-агентства, который выражается в искреннем желании доставить радость, при этом учитывая самые тонкие детали организации корпоративных мероприятий.",
            textReviews2: "Отдел корпоративных коммуникаций компании BASF"
        },
        {
            id: 3, textReviews1: "Текст2",
            textReviews2: "Комент2"
        },
        {
            id: 4, textReviews1: "Текст3",
            textReviews2: "Комент3"
        },
        {
            id: 5, textReviews1: "Текст4",
            textReviews2: "Комент4"
        }
    ],
    carouselsNumberReviews: 0
}

const carouselsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CAROUSELS_NUMBER : {
            return {...state, carouselsNumber: action.carouselsNumber}
        }
        case CAROUSELS_NUMBER_REVIEWS : {
            return {...state, carouselsNumberReviews: action.carouselsNumberReviews}
        }
        default:
            return state;
    }
}

export const carouselsNumberAC = (carouselsNumber) => ({type: CAROUSELS_NUMBER, carouselsNumber});
export const carouselsNumberReviewsAC = (carouselsNumberReviews) => ({
    type: CAROUSELS_NUMBER_REVIEWS,
    carouselsNumberReviews
});

export default carouselsReducer;