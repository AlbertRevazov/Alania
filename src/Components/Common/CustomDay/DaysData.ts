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

export const DayOne: IDaysData[] = [
  {
    id: 1,
    daysCount: "first",
    dayNum: "День первый",
    alt: "meow",
    src: "/images/aero.jpg",
    description: `Заберём прямо из Аэропорта г. Владикавказ
     и отвезём на базу в горное селение Верхний Фиагдон`,
    cardTitle: "Трансфер",
  },
  {
    id: 2,
    daysCount: "first",
    dayNum: "День первый",
    alt: "meow",
    src: "/images/domik.jpg",
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Размещение",
  },
  {
    id: 3,
    daysCount: "first",
    dayNum: "День первый",
    alt: "meow",
    src: "/images/panorama.jfif",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Обед",
  },
  {
    id: 4,
    daysCount: "first",
    dayNum: "День первый",
    alt: "meow",
    src: "/images/ekskurs.jpg",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Экскурсия",
  },
  {
    id: 5,
    daysCount: "first",
    dayNum: "День первый",
    alt: "meow",
    src: "/images/fiagdon.jpg",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Возвращаемся",
  },
  {
    id: 6,
    daysCount: "first",
    dayNum: "День первый",
    alt: "meow",
    src: "/images/restaurant.jpg",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Ужин",
  },
];
export const DayTwo: IDaysData[] = [
  {
    id: 1,
    daysCount: "second",
    dayNum: "День второй",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Завтрак",
  },
  // {
  //   id: 2,
  //   daysCount: "second",
  //   dayNum: "День второй",
  //   alt: "meow",
  //   src: "/images/ekskurs.jpg",
  //   // imgWidth: 300,
  //   description: `Answer a quick survey about how you express yourself,
  //    what causes you stress, and what area would you like to work on.
  //    This way, we can fully personalize your journal!`,
  //   cardTitle: "Экскурсия",
  // },
  {
    id: 2,
    daysCount: "second",
    dayNum: "День второй",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Арт обьекты",
  },
  {
    id: 3,
    daysCount: "second",
    dayNum: "День второй",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Обед",
  },
  {
    id: 4,
    daysCount: "second",
    dayNum: "День второй",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Купание",
  },
  {
    id: 5,
    daysCount: "second",
    dayNum: "День второй",
    alt: "meow",
    src: "/images/fiagdon.jpg",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Фиагдон",
  },
  {
    id: 6,
    daysCount: "first",
    dayNum: "День второй",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Ужин",
  },
];
export const DayThree: IDaysData[] = [
  {
    id: 1,
    daysCount: "third",
    dayNum: "День третий",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Плотный завтрак",
  },
  {
    id: 2,
    daysCount: "third",
    dayNum: "День третий",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Едем в Дигорское ущелье",
  },
  {
    id: 3,
    daysCount: "third",
    dayNum: "День третий",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Проба местных чаёв на травах: холодные, горячие",
  },
  {
    id: 4,
    daysCount: " third",
    dayNum: "День третий",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Традиционный осетинский обед",
  },
  {
    id: 5,
    daysCount: " third",
    dayNum: "День третий",
    alt: "meow",
    src: "/images/fiagdon.jpg",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Обратно в Фиагдон",
  },
  {
    id: 6,
    daysCount: " third",
    dayNum: "День третий",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Вкуснейший ужин в ресторане",
  },
];
export const DayFour: IDaysData[] = [
  {
    id: 1,
    daysCount: "fourth",
    dayNum: "День четвёртый",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Бодрящий завтрак",
  },
  {
    id: 2,
    daysCount: "fourth",
    dayNum: "День четвёртый",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Едем на Зарамагское ГЭС",
  },
  {
    id: 3,
    daysCount: "fourth",
    dayNum: "День четвёртыйй",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Спускаемся через Алагирское ущелье",
  },
  {
    id: 4,
    daysCount: "fourth",
    dayNum: "День четвёртый",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Катаемся на горнолыжном курорте Цей",
  },
  {
    id: 5,
    daysCount: "fourth",
    dayNum: "День четвёртый",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Купание в термальных источниках Бирагьзанга",
  },
  {
    id: 6,
    daysCount: "fourth",
    dayNum: "День четвёртый",
    alt: "meow",
    src: "/images/fiagdon.jpg",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Возвращаемся",
  },
  {
    id: 7,
    daysCount: "fourth",
    dayNum: "День четвёртый",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Обед в кафе",
  },
  {
    id: 8,
    daysCount: "fourth",
    dayNum: "День четвёртый",
    alt: "meow",
    src: "/images/aero.jpg",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Приезжаем в аэропорт Владикавказа",
  },
  {
    id: 9,
    daysCount: "fourth",
    dayNum: "День четвёртый",
    alt: "meow",
    src: "/images/logo.png",
    // imgWidth: 300,
    description: `Answer a quick survey about how you express yourself,
     what causes you stress, and what area would you like to work on.
     This way, we can fully personalize your journal!`,
    cardTitle: "Сытный ужин в ресторане",
  },
];
