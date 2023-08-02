export interface IDaysData {
  id: number;
  daysCount: string;
  dayNum: string;
  src: string;
  alt: string;
  cardTitle: string;
  description: string;
}

export interface Days {
  data: IDaysData[];
}
export const daysArray = [
  "первый день",
  "второй день",
  "третий день",
  "четвёртый",
];

export const DayOne: IDaysData[] = [
  {
    id: 1,
    daysCount: "первый",
    dayNum: "1",
    alt: "meow",
    src: "/images/aero.jpg",
    description: `Answer a quick survey about how you express yourself,
    what causes you stress, and what area would you like to work on.`,
    cardTitle: "Заголово",
  },
  {
    id: 2,
    daysCount: "первый",
    dayNum: "1",
    alt: "meow",
    src: "/images/domik.jpg",
    description: `Answer a quick survey about how you express yourself,
    what causes you stress, and what area would you like to work on.`,
    cardTitle: "Заголвок",
  },
  {
    id: 3,
    daysCount: "первый",
    dayNum: "1",
    alt: "meow",
    src: "/images/domik.jpg",
    description: `Answer a quick survey about how you express yourself,
    what causes you stress, and what area would you like to work on.`,
    cardTitle: "Загловок",
  },
  {
    id: 4,
    daysCount: "первый",
    dayNum: "1",
    alt: "meow",
    src: "/images/ekskurs.jpg",
    description: `Answer a quick survey about how you express yourself,
    what causes you stress, and what area would you like to work on.`,
    cardTitle: "Зголовок",
  },
  {
    id: 5,
    daysCount: "первый",
    dayNum: "1",
    alt: "meow",
    src: "/images/fiagdon.jpg",
    description: `Answer a quick survey about how you express yourself,
    what causes you stress, and what area would you like to work on.`,
    cardTitle: "Заговок",
  },
  {
    id: 6,
    daysCount: "первый",
    dayNum: "1",
    alt: "meow",
    src: "/images/restaurant.jpg",
    description: `Answer a quick survey about how you express yourself,
    what causes you stress, and what area would you like to work on.`,
    cardTitle: "Завок",
  },
];
export const DayTwo: IDaysData[] = [
  {
    id: 1,
    daysCount: "второй",
    dayNum: "2",
    alt: "meow",
    src: "/images/zavtrak_second.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Завтрак",
  },
  {
    id: 2,
    daysCount: "второй",
    dayNum: "2",
    alt: "meow",
    src: "/images/art_second.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Арт обьекты",
  },
  {
    id: 3,
    daysCount: "второй",
    dayNum: "2",
    alt: "meow",
    src: "/images/obed_second.jpeg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Обед",
  },
  {
    id: 4,
    daysCount: "второй",
    dayNum: "2",
    alt: "meow",
    src: "/images/ozero_second.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Купание",
  },
  {
    id: 5,
    daysCount: "второй",
    dayNum: "2",
    alt: "meow",
    src: "/images/fiagdon_second.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Фиагдон",
  },
  {
    id: 6,
    daysCount: "второй",
    dayNum: "2",
    alt: "meow",
    src: "/images/uzhin_second.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Ужин",
  },
];
export const DayThree: IDaysData[] = [
  {
    id: 1,
    daysCount: "третий",
    dayNum: "3",
    alt: "meow",
    src: "/images/zavtrak_third.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Плотный третий",
  },
  {
    id: 2,
    daysCount: "третий",
    dayNum: "3",
    alt: "meow",
    src: "/images/digorskoe_third.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Едем в Дигорское ущелье",
  },
  {
    id: 3,
    daysCount: "третий",
    dayNum: "3",
    alt: "meow",
    src: "/images/chai_third.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Проба местных чаёв на травах: холодные, горячие",
  },
  {
    id: 4,
    daysCount: "третий",
    dayNum: "3",
    alt: "meow",
    src: "/images/obed_third.jpeg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Традиционный осетинский обед",
  },
  {
    id: 5,
    daysCount: "третий",
    dayNum: "3",
    alt: "meow",
    src: "/images/fiagdon_third.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Обратно в Фиагдон",
  },
  {
    id: 6,
    daysCount: "третий",
    dayNum: "3",
    alt: "meow",
    src: "/images/uzhin_third.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Вкуснейший ужин в ресторане",
  },
];
export const DayFour: IDaysData[] = [
  {
    id: 1,
    daysCount: "четвёртый",
    dayNum: "4",
    alt: "meow",
    src: "/images/zavtrak_fourth.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "завтрак",
  },
  {
    id: 2,
    daysCount: "четвёртый",
    dayNum: "4",
    alt: "meow",
    src: "/images/zaramag_ges.jpg",
    description: `Едем на Зарамагское ГЭС и спускаемся через
    Алагирское ущелье,  `,
    cardTitle: "Экскурсия",
  },
  {
    id: 2,
    daysCount: "четвёртый",
    dayNum: "4",
    alt: "meow",
    src: "/images/tsey.jpg",
    description: `Катаемся на горнолыжном курорте Цей,
    Купание в термальных источниках "Бирагьзанга" `,
    cardTitle: "Экскурс",
  },
  {
    id: 3,
    daysCount: "четвёртый",
    dayNum: "4",
    alt: "meow",
    src: "/images/fiagdon_fourth.jpeg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Возвращаемся на базу, и обедаем в кафе",
  },
  {
    id: 4,
    daysCount: "четвёртый",
    dayNum: "4",
    alt: "meow",
    src: "/images/aero_fourth.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Приезжаем в аэропорт Владикавказа",
  },
  {
    id: 5,
    daysCount: "четвёртый",
    dayNum: "4",
    alt: "meow",
    src: "/images/see_you_again.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Счастливого пути! Ждём вас снова",
  },
];
