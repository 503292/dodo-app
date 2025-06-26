const cities = [
  {
    name: 'Вінниця',
    region: 'Вінницька',
    population: 354639,
    area_km2: 113.16,
    foundation_year: 1362,
    city_day: '20.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/b/bf/Coat_of_Arms_of_Vinnytsia.svg',
    region_population: 1600000,
    region_area_km2: 26500,
    mineral_resources_estimated_value: 24,
    coordinates: { x: 475, y: 580 },
  },
  {
    name: 'Донецьк',
    region: 'Донецька',
    population: 1007440,
    area_km2: 571,
    foundation_year: 1869,
    city_day: '31.08',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/9/98/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%BE%D0%B9_%D0%B3%D0%B5%D1%80%D0%B1_%D0%94%D0%BE%D0%BD%D0%B5%D1%86%D0%BA%D0%B0.png',
    region_population: 4200000,
    region_area_km2: 26100,
    mineral_resources_estimated_value: 3800,
    coordinates: { x: 1090, y: 710 },
  },
  {
    name: 'Дніпро',
    region: 'Дніпропетровська',
    population: 1053951,
    area_km2: 380,
    foundation_year: 1783,
    city_day: '13.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/2/21/Coat_of_arms_of_Dnipro.svg',
    region_population: 3200000,
    region_area_km2: 31990,

    mineral_resources_estimated_value: 3500,
    coordinates: { x: 900, y: 655 },
  },
  {
    name: 'Житомир',
    region: 'Житомирська',
    population: 282823,
    area_km2: 61,
    foundation_year: 884,
    city_day: '13.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/c/cc/Coat_of_Arms_of_Zhytomyr.svg',
    region_population: 1200000,
    region_area_km2: 29800,

    mineral_resources_estimated_value: 555,
    coordinates: { x: 485, y: 480 },
  },
  {
    name: 'Запоріжжя',
    region: 'Запорізька',
    population: 772258,
    area_km2: 240,
    foundation_year: 1770,
    city_day: '14.10',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/9/96/%D0%93%D0%B5%D1%80%D0%B1_%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%8C%D1%8F_2003_%D0%B3%D0%BE%D0%B4%D0%B0.svg',
    region_population: 1750000,
    region_area_km2: 27300,

    mineral_resources_estimated_value: 605,
    coordinates: { x: 905, y: 730 },
  },
  {
    name: 'Івано-Франківськ',
    region: 'Івано-Франківська',
    population: 215288,
    area_km2: 83.73,
    foundation_year: 1662,
    city_day: '07.05',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/2/2b/Ivano-Frankivsk_Coat_of_Arms.png',
    region_population: 1370000,
    region_area_km2: 13800,

    mineral_resources_estimated_value: 99,
    coordinates: { x: 195, y: 620 },
  },
  {
    name: 'Київ',
    region: 'місто Київ',
    population: 2950702,
    area_km2: 836,
    foundation_year: 482,
    city_day: '25.05',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/1/1a/COA_of_Kyiv_Kurovskyi.svg',
    region_population: 4746202,
    region_area_km2: 28131,

    mineral_resources_estimated_value: 21,
    coordinates: { x: 610, y: 450 },
  },
  {
    name: 'Кропивницький',
    region: 'Кіровоградська',
    population: 250629,
    area_km2: 103,
    foundation_year: 1765,
    city_day: '27.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/b/ba/Coat_of_Arms_of_Kropyvnytskyi.svg',
    region_population: 900000,
    region_area_km2: 24000,

    mineral_resources_estimated_value: 270,
    coordinates: { x: 705, y: 650 },
  },
  {
    name: 'Луганськ',
    region: 'Луганська',
    population: 459294,
    area_km2: 286.2,
    foundation_year: 1795,
    city_day: '06.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/c/cd/Coat_of_arms_of_Luhansk.svg',
    region_population: 2200000,
    region_area_km2: 26300,

    mineral_resources_estimated_value: 3200,
    coordinates: { x: 1185, y: 640 },
  },
  {
    name: 'Луцьк',
    region: 'Волинська',
    population: 205585,
    area_km2: 42,
    foundation_year: 1085,
    city_day: '23.08',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/3/3a/Herb_Lutsk.svg',
    region_population: 1050000,
    region_area_km2: 20100,

    mineral_resources_estimated_value: 46,
    coordinates: { x: 250, y: 410 },
  },
  {
    name: 'Львів',
    region: 'Львівська',
    population: 725202,
    area_km2: 160,
    foundation_year: 1256,
    city_day: '03.05',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/7/79/Coat_of_arms_of_Lviv.svg',
    region_population: 2500000,
    region_area_km2: 21833,

    mineral_resources_estimated_value: 521,
    coordinates: { x: 150, y: 510 },
  },
  {
    name: 'Миколаїв',
    region: 'Миколаївська',
    population: 509102,
    area_km2: 260,
    foundation_year: 1789,
    city_day: '13.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/7/7f/Coat_of_arms_of_Nikolayev.svg',
    region_population: 1200000,
    region_area_km2: 24000,

    mineral_resources_estimated_value: 38,
    coordinates: { x: 680, y: 810 },
  },
  {
    name: 'Одеса',
    region: 'Одеська',
    population: 1010298,
    area_km2: 163,
    foundation_year: 1415,
    city_day: '02.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/4/49/Coat_of_Arms_of_Odesa.svg',
    region_population: 2400000,
    region_area_km2: 33300,

    mineral_resources_estimated_value: 10,
    coordinates: { x: 605, y: 855 },
  },
  {
    name: 'Полтава',
    region: 'Полтавська',
    population: 310755,
    area_km2: 77,
    foundation_year: 899,
    city_day: '23.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/d/d7/Poltava_coat.svg',
    region_population: 1400000,
    region_area_km2: 28800,

    mineral_resources_estimated_value: 790,
    coordinates: { x: 870, y: 550 },
  },
  {
    name: 'Рівне',
    region: 'Рівненська',
    population: 245323,
    area_km2: 58.24,
    foundation_year: 1283,
    city_day: '26.08',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/e/e3/Coat_of_arms_Rivne.svg',
    region_population: 1150000,
    region_area_km2: 20000,

    mineral_resources_estimated_value: 43,
    coordinates: { x: 325, y: 435 },
  },
  {
    name: 'Сімферополь',
    region: 'Автономна Республіка Крим',
    population: 338038,
    area_km2: 107.41,
    foundation_year: 1784,
    city_day: '01.06',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/0/04/COA_Simferopol.svg',
    region_population: 1967300,
    region_area_km2: 26100,

    mineral_resources_estimated_value: 209,
    coordinates: { x: 830, y: 1010 },
  },
  {
    name: 'Суми',
    region: 'Сумська',
    population: 292139,
    area_km2: 95.38,
    foundation_year: 1652,
    city_day: '06.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/0/00/Gerb_goroda_Sumy.png',
    region_population: 1050000,
    region_area_km2: 23600,

    mineral_resources_estimated_value: 62,
    coordinates: { x: 880, y: 400 },
  },
  {
    name: 'Тернопіль',
    region: 'Тернопільська',
    population: 226029,
    area_km2: 59,
    foundation_year: 1540,
    city_day: '28.08',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/5/55/Coat_of_arms_of_Ternopil.svg',
    region_population: 1100000,
    region_area_km2: 13800,

    mineral_resources_estimated_value: 13,
    coordinates: { x: 280, y: 550 },
  },
  {
    name: 'Ужгород',
    region: 'Закарпатська',
    population: 115568,
    area_km2: 31.56,
    foundation_year: 872,
    city_day: '05.10',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/7/70/Coat_of_arms_of_Uzhhorod.svg',
    region_population: 1200000,
    region_area_km2: 12900,

    mineral_resources_estimated_value: 63,
    coordinates: { x: 45, y: 640 },
  },
  {
    name: 'Харків',
    region: 'Харківська',
    population: 1449871,
    area_km2: 350.02,
    foundation_year: 1653,
    city_day: '23.08',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/4/45/KharkovTownflag_Lob.svg',
    region_population: 2700000,
    region_area_km2: 31300,

    mineral_resources_estimated_value: 685,
    coordinates: { x: 990, y: 505 },
  },
  {
    name: 'Херсон',
    region: 'Херсонська',
    population: 324424,
    area_km2: 68,
    foundation_year: 1778,
    city_day: '20.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/2/2f/COA_of_Kherson_1995.svg',
    region_population: 1100000,
    region_area_km2: 28000,

    mineral_resources_estimated_value: 10,
    coordinates: { x: 720, y: 845 },
  },
  {
    name: 'Хмельницький',
    region: 'Хмельницька',
    population: 251077,
    area_km2: 93.05,
    foundation_year: 1431,
    city_day: '28.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/a/a6/Coat_of_Arms_of_Khmelnitsky.svg',
    region_population: 1300000,
    region_area_km2: 20600,

    mineral_resources_estimated_value: 31,
    coordinates: { x: 380, y: 565 },
  },
  {
    name: 'Черкаси',
    region: 'Черкаська',
    population: 292761,
    area_km2: 69,
    foundation_year: 1286,
    city_day: '21.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/a/ae/COA_Cherkasy%2C_Cherkaska%2C_Ukraine.svg',
    region_population: 1100000,
    region_area_km2: 20400,

    mineral_resources_estimated_value: 168,
    coordinates: { x: 690, y: 560 },
  },
  {
    name: 'Чернівці',
    region: 'Чернівецька',
    population: 236691,
    area_km2: 153,
    foundation_year: 1407,
    city_day: '04.10',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/0/06/Coat_of_arms_of_Chernivtsi.svg',
    region_population: 900000,
    region_area_km2: 8100,

    mineral_resources_estimated_value: 10,
    coordinates: { x: 300, y: 680 },
  },
  {
    name: 'Чернігів',
    region: 'Чернігівська',
    population: 296500,
    area_km2: 79,
    foundation_year: 907,
    city_day: '21.09',
    emblem:
      'https://upload.wikimedia.org/wikipedia/commons/2/20/Coat_of_Arms_of_Chernihiv.svg',
    region_population: 980000,
    region_area_km2: 31500,
    mineral_resources_estimated_value: 25,
    coordinates: { x: 640, y: 335 },
  },
];

export default cities;
