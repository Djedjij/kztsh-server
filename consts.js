export const MAIN_ROUTE = "/";
export const ADMIN_ROUTE = "/admin";
export const ABOUT_ROUTE = "/about";
export const PRODUCTS_ROUTE = "/products";
export const SERVISES_ROUTE = "/servises";
export const INFO_ROUTE = "/info";
export const CONTACTS_ROUTE = "/contacts";

export const ABOUT_ROUTES = [
  {
    name: "Отчетность",
    path: "/reporting",
  },
  {
    name: "Документы",
    path: "/documents",
  },
  {
    name: "Галерея",
    path: "/galery",
  },
  {
    name: "Вакансии",
    path: "/jobs",
  },
  {
    name: "Реквизиты",
    path: "/requisites",
  },
];
export const CONTACTS_ROUTES = [
  {
    name: "Руководство",
    path: "/management",
  },
  {
    name: "Команда управления",
    path: "/management-team",
  },
  {
    name: "Отдел маркетинга и сбыта готовой продукции и внешних связей",
    path: "/marketing-team",
  },
];
export const PRODUCTS_ROUTES = [
  {
    name: "Прайс листы",
    path: "/price-list",
  },
  {
    name: "Магазин  ",
    path: "/shop",
  },
];
export const INFO_ROUTES = [
  {
    name: "Доставка",
    path: "/delivery",
  },
  {
    name: "Противодействие коррупции",
    path: "/anti-corruption",
  },
  {
    name: "Новости",
    path: "/news",
  },
  {
    name: "Обращения граждан",
    path: "/appeals",
  },
  {
    name: "Товаропроводящая сеть",
    path: "/distribution",
  },
];
export const SERVISES_ROUTES = [
  {
    name: "Общежитие",
    path: "/hostel",
  },
  {
    name: 'Кафе "Северное"',
    path: "/cafe",
  },
];
export const MAIN_ROUTES = [
  {
    name: "О заводе",
    path: ABOUT_ROUTE,
    links: ABOUT_ROUTES,
  },
  {
    name: "Продукция",
    path: PRODUCTS_ROUTE,
    links: PRODUCTS_ROUTES,
  },
  {
    name: "Услуги",
    path: SERVISES_ROUTE,
    links: SERVISES_ROUTES,
  },
  {
    name: "Информация",
    path: INFO_ROUTE,
    links: INFO_ROUTES,
  },
  {
    name: "Контакты",
    path: CONTACTS_ROUTE,
    links: CONTACTS_ROUTES,
  },
];

export const directorContacts = [
  {
    job: "Директор",
    name: "Бубелев Виталий Александрович",
    internalPhone: "4-01",
    phone: "2-44-01",
  },
  {
    job: "Главный инженер",
    name: "Шульц Денис Николаевич",
    internalPhone: "4-02",
    phone: "2-44-02",
  },
  {
    job: "Приемная",
    name: "Королёва Анна Николаевна",
    internalPhone: "4-00",
    phone: "2-44-00",
  },
  {
    job: "Заместитель директора по коммерческим вопросам",
    name: "Жовнерик Юрий Степанович",
    internalPhone: "4-82",
    phone: "2-44-82",
  },
  {
    job: "Заместитель директора по производству",
    name: "Мурадов Анар Алиевич",
    internalPhone: "4-04",
    phone: "2-44-04",
  },
  {
    job: "Приемная зам.дир. по коммерческим вопросам",
    name: "Яскевич Ирина Ивановна",
    internalPhone: "4-03",
    phone: "2-44-03",
  },
  {
    job: "Заместитель директора по экономическим вопросам",
    name: "Бурков Дмитрий Валерьевич",
    internalPhone: "4-06",
    phone: "2-44-06",
  },
  {
    job: "Исполняющий обязанности заместителя директора по идеологической работе и соц. вопросам",
    name: "Миськов Вячеслав Михайлович",
    internalPhone: "5-07",
    phone: "2-45-07",
  },
  {
    job: "Начальник управления служб качества",
    name: "Котар Сергей Николаевич	",
    internalPhone: "4-78",
    phone: "	2-44-78",
  },
  {
    job: "Юрисконсульт",
    name: "Воробьёва Анастасия Витальевна",
    internalPhone: "4-30",
    phone: "2-44-30",
  },
  {
    job: "Канцелярия",
    name: "Кищук Лилия Николаевна",
    internalPhone: "4-85",
    phone: "2-44-85",
  },
];

export const directorContactsArr = new Array(...directorContacts);

export const marketingContacts = [
  {
    job: "Начальник отдела",
    name: "Иванов Евгений Анатольевич",
    internalPhone: "629",
    phone: "+375 1775 67922",
  },
  {
    job: "Зам. начальника отдела по маркетингу и сбыту готовой продукции",
    name: "Крутько Владислав Сергеевич",
    internalPhone: "629",
    phone: "+375 1775 67922",
  },
  {
    job: "Группа сбыта",
    name: "",
    internalPhone: "526 / 429",
    phone: "+375 1775 24526",
  },
  {
    job: "Группа маркетинга и рекламы",
    name: "",
    internalPhone: "471",
    phone: "+375 1775 24471",
  },
  {
    job: "Оформление разовых заказов",
    name: "Шестакова Мирослава Михайловна",
    internalPhone: "509",
    phone: "+375 1775 24509",
  },
  {
    job: "Реализация строительных материалов",
    name: "Пониматько Татьяна Владимировна",
    internalPhone: "496",
    phone: "+375 1775 24496",
  },
  {
    job: "Заместитель начальника отдела по внешним связям",
    name: "Якимович Дмитрий Николаевич",
    internalPhone: "422, 628",
    phone: "+375 1775 24422",
  },
  {
    job: "Бюро внешних связей",
    name: "Мудриченко Дмитрий Александрович",
    internalPhone: "422, 628",
    phone: "+375 1775 24422",
  },
];
export const marketingContactsArr = new Array(...marketingContacts);

export const directorPhotoContacts = [
  {
    name: "Бубелев Виталий Александрович",
    img: "./images/management/bubelev.png",
    job: "Директор",
  },
  {
    name: "Шульц Денис Николаевич",
    img: "./images/management/shults.png",
    job: "Главный инженер",
  },
  {
    name: "Бурков Дмитрий Валерьевич",
    img: "./images/management/burkov.png",
    job: "Заместитель директора по экономическим вопросам",
  },
  {
    name: "Миськов Вячеслав Михайлович",
    img: "./images/management/Miskov.jpg",
    job: "Исполняющий обязанности заместителя директора по идеологической работе и социальным вопросам",
  },
  {
    name: "Жовнерик Юрий Степанович",
    img: "./images/management/zhovnerik.png",
    job: "Заместитель директора по производству",
  },
  {
    name: "Мурадов Анар Алиевич",
    img: "./images/management/muradov.jpg",
    job: "Заместитель директора завода по идеологической работе и социальным вопросам",
  },
];

export const jobs = [
  {
    name: "Кузнец-штамповщик",
    description: "Возможно обучение",
    salary: "1600",
  },
  {
    name: "Резчик на пилах ножовках и станках",
    description: "Возможно обучение",
    salary: "1600",
  },
  {
    name: "Слесарь-инструментальщик",
    description: "Возможно обучение",
    salary: "1300",
  },
  {
    name: "Токарь",
    description: "Возможно обучение",
    salary: "1500",
  },
  {
    name: "Электрогазосварщик",
    description: "",
    salary: "1500",
  },
  {
    name: "Электромонтёр по ремонту и обслуживанию оборудования",
    description: "",
    salary: " 1500",
  },
  {
    name: "Каменщик",
    description: "",
    salary: "1300",
  },
  {
    name: "Бетонщик",
    description: "",
    salary: "1300",
  },
  {
    name: "Кровельщик",
    description: "",
    salary: "1300",
  },
  {
    name: "Машинист крана",
    description: "Возможно обучение",
    salary: "1300",
  },
  {
    name: "Водитель автомобиля (водитель на автовышку)",
    description: "Возможно обучение",
    salary: "1100",
  },
  {
    name: "Маляр",
    description: "",
    salary: "1500",
  },
];
export const requisites = [
  {
    number: "1",
    name: "Фирменное наименование",
    info: "Открытое акционерное общество «Кузнечный завод тяжелых штамповок» (ОАО «КЗТШ»)",
  },
  {
    number: "2",
    name: "Ведомственная принадлежность",
    info: "Министерство промышленности Республики Беларусь, холдинг «БЕЛАВТОМАЗ»",
  },
  {
    number: "3",
    name: "Учредители",
    info: "Государственный комитет по имуществу, приказ № 384 от 30.12.2008г.",
  },
  {
    number: "4",
    name: "Свидетельство о внесении в Единый государственный реестр юридических лиц/индивидуального предпринимателя",
    info: "Зарегистрировано Минским облисполкомом 02.07.2013г., регистрационный номер 600038921",
  },
  {
    number: "5",
    name: "Виды деятельности",
    info: "поковки и штамповки",
  },
  {
    number: "6",
    name: "Срок деятельности (с учетом правопреемственности)",
    info: "не ограничен",
  },
  {
    number: "7",
    name: "ИНН, КПП, ОГРН, ОКПО, ОКТМО",
    info: "УНН: 600038921 ОКПО: 047053066000",
  },
  {
    number: "8",
    name: "Юридический адрес (страна, адрес)",
    info: "222163 Республика Беларусь, Минская область, г. Жодино, ул. Кузнечная, 26",
  },
  {
    number: "9",
    name: "Почтовый адрес (страна, адрес)",
    info: "222161 Республика Беларусь, Минская область, г. Жодино, ул. Кузнечная, 26",
  },
  {
    number: "10",
    name: "Фактическое местоположение",
    info: "222161 Республика Беларусь, Минская область, г. Жодино, ул. Кузнечная, 26, комн. 201",
  },
  {
    number: "11",
    name: "Телефоны (с указанием кода города)",
    info: "+375 1775 2-44-00 (приёмная), 67-9-22 (маркетинг и сбыт)",
  },
  {
    number: "12",
    name: "Факс (с указанием кода города)",
    info: "+375 1775 2-44-92 (приёмная), 67-9-22 (маркетинг и сбыт)",
  },

  {
    number: "13",
    name: "Филиалы",
    info: "нет",
  },
  {
    number: "14",
    name: "Фамилия, имя и отчество руководителя",
    info: "Бубелев Виталий Александрович, директор",
  },
  {
    number: "15",
    name: "Банковские реквизиты (наименование и адрес банка, номер расчетного счета участника закупки в банке, телефоны банка, прочие банковские реквизиты)",
    info: "Р/с BY86 AKBB 3012 06160 2273 6200 000 в ЦБУ №616 ОАО «АСБ Беларусбанк» г. Жодино, ул. 50 лет Октября, 25а БИК AKBBBY2X",
  },
  {
    number: "16",
    name: "Фамилия, имя и отчество уполномоченного лица (на право подписи договора/контракта) с указанием должности, контактного телефона, эл. почты",
    info: "Жовнерик Юрий Степанович, заместитель директора по коммерческим вопросам, (по доверенности №1666 от 04.07.2023г.) +375 1775 2-44-03, kztsh@mail.ru",
  },
  {
    number: "17",
    name: "Адрес электронной почты",
    info: "kztsh@mail.ru; kz_omsivs@mail.ru",
  },
];
export const distribuion = [
  {
    name: "«Euroflansch GmbH»",
    country: "Germany 31552 Rodenberg, Deisterstraβe,17   ",
    phone: "+49 5723 9899382",
    fax: "+49 5723 798291",
    mail: "info@euroflansch.com",
    website: "https://www.euroflansch.com/",
    region: "Cтраны ЕС",
  },
  {
    name: "ООО «ПромСнаб»",
    country: "Российская Федерация 214013 г. Смоленск, ул. Николаева,",
    phone: "+7 9206685222",
    fax: "+7 4812 619410",
    mail: "promsnab2005@mail.ru",
    website: "",
    region:
      "Центральный и Северо-Западный Федеральные округа Российской Федерации",
  },
  {
    name: "ООО «ДетельХорс»",
    country:
      "Российская Федерация 214005, г.Смоленск,Киевское шоссе, д.56, офис 14.",
    mail: "detelkhors@mail.ru",
    phone: "+7 903 8933606 ",
    fax: "+375 29 6863762",
    website: "https://www.detelkhors.ru/",
    region:
      "Южный, Приволжский, Уральский Федеральные округа Российской Федерации, Республика Казахстан",
  },
  {
    name: "ООО «АК42»",
    country:
      "Российская Федерация 654028 Кемеровская обл., г. Новокузнецк, ул. Гончарова, д.9, корпус 6,",
    mail: " mail@AK42.ru",
    website: "",
    phone: "+7 (3843) 910-811,",
    fax: " +7 (3843)910-765",
    region:
      "Сибирский и Дальневосточный Федеральные округа Российской Федерации.",
  },
  {
    name: "ООО «Солид Римс»",
    country:
      "Российская Федерация 214000 г. Смоленск, пр-т Гагарина, дом 10/2, помещение 42/16,",
    mail: "info@solid-rims.com",
    phone: "+7(919)041-00-37",
    fax: "+375 29 670-50-67",
    website: "https://solid-rims.com/",
    region:
      "Северо-Западный, Центральный, Уральский Федеральные округа и Приморский край Российской Федерации.",
  },
  {
    name: "ООО «СоюзМашин»",
    country:
      "Российская Федерация 119021 г. Москва, ул. Зубовский б-р, д.35, стр.3, оф.1",
    mail: "umg.contacts@gmail.com",
    phone: "+7(499)766-45-06",
    fax: "+7(499)766-45-06",
    website: "",
    region:
      "Нижегородская область Приволжского Федерального округа Российской Федерации",
  },
  {
    name: "ООО «ЮКОРП»",
    country:
      "Российская Федерация 214022 г. Смоленск, пос. Красный Бор, д.1 Г, стр.1, офис 5",
    mail: "belaz2000_soft@rambler.ru",
    phone: "+375 29 3056504",
    fax: " +7 961 1393727",
    website: "",
    region:
      "Центральный, Уральский, Сибирский (кроме Кемеровской области), Дальневосточный Федеральные округа Российской Федерации и Республика Казахстан",
  },
];

// categories

// занесено
export const forgings = [
  {
    name: "КОЛЕНЧАТЫЙ ВАЛ",
    description:
      "Поковки коленчатых валов для 4-х и 6-ти цилиндровых двигателей.",
    id: 1,
    images: [
      "/images/products-images/products/pokovki/kolenchatyj-val-pokovka/IMG_0974.JPG",
    ],
    characteristics: [
      {
        name: "масса, кг",
        id: "1",
        value: "43,7",
      },
      {
        name: "длина L, мм",
        id: "2",
        value: "737",
      },
      {
        name: "диаметр шейки D, мм",
        id: "3",
        value: "108",
      },
      {
        name: "диаметр шейки d, мм",
        id: "4",
        value: "47",
      },
    ],
  },

  {
    name: "БАЛКА ОПОРЫ ДВИГАТЕЛЯ АВТОМОБИЛЯ МАЗ",
    description: "У этого товара к сожалению пока нет описания.",
    id: 2,
    images: [
      "/images/products-images/products/pokovki/balka-opory/IMG_0983.JPG",
      "/images/products-images/products/pokovki/balka-opory/IMG_1351.JPG",
    ],
    characteristics: [
      {
        name: "масса, кг",
        id: "1",
        value: "15,5",
      },
      {
        name: "длина L, мм",
        id: "2",
        value: "950",
      },
      {
        name: "диаметр головы D, мм",
        id: "3",
        value: "60",
      },
      {
        name: "высота головы d, мм",
        id: "4",
        value: "44",
      },
    ],
  },
  {
    name: "БАЛКА ПЕРЕДНЕЙ ОСИ ДЛЯ АВТОМОБИЛЕЙ СЕМЕЙСТВА МАЗ, КРАЗ",
    description: "У этого товара к сожалению пока нет описания.",
    id: 3,
    images: [
      "/images/products-images/products/pokovki/balka/IMG_0977.JPG",
      "/images/products-images/products/pokovki/balka/IMG_1352.JPG",
      "/images/products-images/products/pokovki/balka/IMG_1353.JPG",
      "/images/products-images/products/pokovki/balka/IMG_1354.JPG",
    ],
    characteristics: [
      {
        name: "масса, кг",
        id: "1",
        value: "116",
      },
      {
        name: "длина L, мм",
        id: "2",
        value: "1829",
      },
      {
        name: "диаметр головы D, мм",
        id: "3",
        value: "80",
      },
      {
        name: "высота головы d, мм",
        id: "4",
        value: "107",
      },
      {
        name: "ширина площадки s, мм",
        id: "5",
        value: "165",
      },
    ],
  },
  {
    name: "ЧАШКА",
    description: 'Поковки деталей типа "Чашка"',
    id: 4,
    images: ["/images/products-images/products/pokovki/cup/CUP.jpg"],
    characteristics: [
      {
        name: "масса, кг",
        id: "1",
        value: "16,5",
      },
      {
        name: "высота Н, мм",
        id: "2",
        value: "180",
      },
      {
        name: "диаметр фланца D, мм",
        id: "3",
        value: "197",
      },
      {
        name: "диаметр d, мм",
        id: "4",
        value: "106",
      },
      {
        name: "диаметр отверстия d, мм",
        id: "5",
        value: "52",
      },
    ],
  },
  {
    name: "ЦАПФА МОСТА АВТОМОБИЛЯ МАЗ",
    description:
      "Цапфа (нем. Zapfen — тех. цапфа, шейка, шип, втулка, стержень) — часть вала или оси, на которой находится опора (подшипник).",
    id: 5,
    images: [
      "/images/products-images/products/pokovki/capfa/1.JPG",
      "/images/products-images/products/pokovki/capfa/2.JPG",
      "/images/products-images/products/pokovki/capfa/3.JPG",
    ],
    characteristics: [
      {
        name: "масса, кг",
        id: "1",
        value: "24,4",
      },
      {
        name: "высота Н, мм",
        id: "2",
        value: "340",
      },
      {
        name: "диаметр фланца D, мм",
        id: "3",
        value: "213",
      },
      {
        name: "диаметр d, мм",
        id: "4",
        value: "65",
      },
    ],
  },
  {
    name: "ШЕСТЕРНИ (ПОКОВКИ)",
    description: "У этого товара к сожалению пока нет описания.",
    id: 6,
    images: [
      "/images/products-images/products/pokovki/shesterni-pokovki/IMG_1041.JPG",
      "/images/products-images/products/pokovki/shesterni-pokovki/IMG_1360.JPG",
      "/images/products-images/products/pokovki/shesterni-pokovki/IMG_1361.JPG",
    ],
    characteristics: [
      {
        name: "",
        id: "",
        value: "",
      },
    ],
  },
  {
    name: "АНКЕР ЗАКЛАДНОЙ",
    description: "У этого товара к сожалению пока нет описания.",
    id: 7,
    images: [
      "/images/products-images/products/pokovki/anker-zakladnoj/IMG_1152.JPG",
    ],
    characteristics: [
      {
        name: "",
        id: "",
        value: "",
      },
    ],
  },
  {
    name: "ШАЙБА ЗАКЛАДНАЯ",
    description: "У этого товара к сожалению пока нет описания.",
    id: 8,
    images: ["/images/products-images/products/pokovki/shayba/1.jpg"],
    characteristics: [
      {
        name: "",
        id: "",
        value: "",
      },
    ],
  },

  {
    name: "КУЛАК ПОВОРОТНЫЙ АВТОМОБИЛЯ МЗКТ",
    description:
      "Поворотный кулак - деталь подвески автомобиля (как передней, так и задней), являющаяся основанием для ступицы, на которую монтируется колесо.",
    id: 9,
    images: [
      "/images/products-images/products/pokovki/kulak-povorotnyj-avtomobilya-mzkt/IMG_0936.JPG",
      "/images/products-images/products/pokovki/kulak-povorotnyj-avtomobilya-mzkt/IMG_1012.JPG",
    ],
    characteristics: [
      {
        name: "масса, кг",
        id: "1",
        value: "54",
      },
      {
        name: "диаметр наружный D, мм",
        id: "2",
        value: "316",
      },
      {
        name: "диаметр отверстия d, мм",
        id: "3",
        value: "216",
      },
      {
        name: "диаметр шейки dш, мм",
        id: "4",
        value: "83",
      },
    ],
  },
  {
    name: "КРЮК ЧАЛОЧНЫЙ",
    description:
      "Крюки чалочные применяются для изготовления грузозахватных приспособлений (чалок). ГОСТ 25573-82. Исполнение К1 (с замком).",
    id: 10,
    images: ["/images/products-images/products/pokovki/kruk/1.jpg"],
    characteristics: [
      {
        name: "Материал",
        id: "1",
        value: "Ст 20",
      },
      {
        name: "Грузоподъемность, т",
        id: "2",
        value: "от 1,6 до 5,0",
      },
    ],
  },
  {
    name: "КУЛАК ПОВОРОТНЫЙ АВТОМОБИЛЯ БЕЛАЗ",
    description:
      "Поворотный кулак - деталь подвески автомобиля (как передней, так и задней), являющаяся основанием для ступицы, на которую монтируется колесо.",
    id: 11,
    images: [
      "/images/products-images/products/pokovki/kulak-povorotnyj-avtomobilya-belaz/IMG_1021.JPG",
    ],
    characteristics: [
      {
        name: "масса, кг",
        id: "1",
        value: "88,26",
      },
      {
        name: "высота Н, мм",
        id: "2",
        value: "340",
      },
      {
        name: "диаметр шейки d, мм",
        id: "3",
        value: "88",
      },
      {
        name: "длина L, мм",
        id: "4",
        value: "597",
      },
    ],
  },
  {
    name: "КРЕСТОВИНА",
    description: "У этого товара к сожалению пока нет описания.",
    id: 12,
    images: ["/images/products-images/products/pokovki/krestovina/1.jpg"],
    characteristics: [
      {
        name: "масса, кг",
        id: "1",
        value: "6",
      },
      {
        name: "диаметр наружный D, мм",
        id: "2",
        value: "127",
      },
      {
        name: "диаметр отверстия d, мм",
        id: "3",
        value: "75",
      },
      {
        name: "диаметр шеек dш, мм",
        id: "4",
        value: "44",
      },
      {
        name: "длина L, мм",
        id: "5",
        value: "280",
      },
    ],
  },
  {
    name: "КЛИН ТЯГОВОГО ХОМУТА 106.00.002-2",
    description:
      "Изготовлен методом горячей штамповки из стали 38ХС. Является комплектующим изделием сцепного устройства в железнодорожном подвижном составе.",
    id: 13,
    images: ["/images/products-images/products/pokovki/klin/1.jpg"],
    characteristics: [
      {
        name: "масса, кг",
        id: "1",
        value: "7.1",
      },
      {
        name: "ширина b, мм",
        id: "2",
        value: "115",
      },
      {
        name: "толщина s , мм",
        id: "3",
        value: "32",
      },
      {
        name: "длина L, мм",
        id: "4",
        value: "310",
      },
    ],
  },
  {
    name: "СКРЕБОК",
    description: "У этого товара к сожалению пока нет описания.",
    id: 14,
    images: ["/images/products-images/products/pokovki/skrebok/1.jpg"],
    characteristics: [
      {
        name: "масса, кг",
        id: "1",
        value: "23.3",
      },
      {
        name: "ширина b, мм",
        id: "2",
        value: "90",
      },
      {
        name: "высота Н, мм",
        id: "3",
        value: "145",
      },
      {
        name: "длина L, мм",
        id: "4",
        value: "672",
      },
    ],
  },
];
// занесено
export const knots = [
  {
    name: "КАРТЕР ЗАДНЕГО МОСТА МАЗ",
    description: "54321-2401012, 64221-2401012, 64221-2501012",
    id: 1,
    images: [
      "/images/products-images/products/uzli_i_detali/karter-zadnego-mosta-maz/IMG_0939.JPG",
      "/images/products-images/products/uzli_i_detali/karter-zadnego-mosta-maz/IMG_0978.JPG",
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
  {
    name: "КАРТЕР ЗАДНЕГО МОСТА МАЗ",
    description:
      "54321-2401012-030, 64221-2401012-030, 64221-2501012-030, 6430-2401012-030, 6430-2501012-030, 5440-2401012-030, 64301-2401012-030, 64301-2501012-030, 651608-2401012, 6501W6-2501012-000",
    id: 2,
    images: [
      "/images/products-images/products/uzli_i_detali/karter-zadnego-mosta-maz-2/IMG_0952.JPG",
      "/images/products-images/products/uzli_i_detali/karter-zadnego-mosta-maz-2/IMG_0984.JPG",
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
  {
    name: "КАРТЕР ЗАДНЕГО МОСТА МЗКТ",
    description:
      "8007-2301014, 8007-2321014, 6923-2401014, 6923-2501014, 5201-2401013, 6923-2401013, 6923-2501013",
    id: 3,
    images: [
      "/images/products-images/products/uzli_i_detali/karter-zadnego-mosta-mzkt/IMG_1344.JPG",
      "/images/products-images/products/uzli_i_detali/karter-zadnego-mosta-mzkt/IMG_1357.JPG",
      "/images/products-images/products/uzli_i_detali/karter-zadnego-mosta-mzkt/IMG_1362.JPG",
      "/images/products-images/products/uzli_i_detali/karter-zadnego-mosta-mzkt/IMG_1364.JPG",
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
  {
    name: "КАРТЕР ЗАДНЕГО МОСТА ФРОНТАЛЬНОГО ПОГРУЗЧИКА «АМКОДОР»",
    description: "342.05.01.200, 342.05.01.300, 342.05.01.400",
    id: 4,
    images: [
      "/images/products-images/products/uzli_i_detali/karter-zadnego-mosta-frontalnogo-pogruzchika-amkodor/IMG_0995.JPG",
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
  {
    name: "ОБОД КОЛЕСА АВТОМОБИЛЯ БЕЛАЗ",
    description:
      "Ободья колёс для шин карьерных самосвалов большой грузоподъёмности (г/п).",
    id: 5,
    images: [
      "/images/products-images/products/uzli_i_detali/obod-kolesa-avtomobilya-belaz/IMG_0961.JPG",
      "/images/products-images/products/uzli_i_detali/obod-kolesa-avtomobilya-belaz/IMG_0962.JPG",
      "/images/products-images/products/uzli_i_detali/obod-kolesa-avtomobilya-belaz/IMG_0996.JPG",
      "/images/products-images/products/uzli_i_detali/obod-kolesa-avtomobilya-belaz/IMG_0997.JPG",
      "/images/products-images/products/uzli_i_detali/obod-kolesa-avtomobilya-belaz/IMG_0998.JPG",
      "/images/products-images/products/uzli_i_detali/obod-kolesa-avtomobilya-belaz/IMG_1006.JPG",
    ],
    characteristics: [
      {
        name: "31/90-49; 27.00 R 49",
        id: "1",
        value: "г/п 110-136 тонн",
      },
      {
        name: "33.00-51; 33.00 R 51",
        id: "2",
        value: "г/п 130-136 тонн",
      },
      {
        name: "36.00 R 51",
        id: "3",
        value: "г/п 154-160 тонн",
      },
      {
        name: "40.00 R 57; 46/90-57",
        id: "4",
        value: "г/п 220-240 тонн",
      },
      {
        name: "40.00-57",
        id: "5",
        value: "г/п 180-200 тонн",
      },
    ],
  },
  {
    name: "ЛОНЖЕРОНЫ, ПОЛУЧАЕМЫЕ ИЗ МЕРНОГО ШВЕЛЛЕРА",
    description: "4370-2801020/021",
    id: 6,
    images: [
      "/images/products-images/products/uzli_i_detali/lonzherony-iz-mernogo-shvellera/506817_original.jpg",
      "/images/products-images/products/uzli_i_detali/lonzherony-iz-mernogo-shvellera/IMG_1015.JPG",
    ],
    characteristics: [
      {
        name: "Масса, кг",
        id: "1",
        value: "от 79 до 140",
      },
      {
        name: "длина, мм",
        id: "2",
        value: "от 5270 до 7680",
      },
      {
        name: "площадь, м.кв.",
        id: "3",
        value: "от 2,5 до 5",
      },
    ],
  },
  {
    name: "ЛОНЖЕРОНЫ ПЕРЕМЕННОГО СЕЧЕНИЯ",
    description: "555102-2801020/021",
    id: 7,
    images: [
      "/images/products-images/products/uzli_i_detali/lonzherony-tipa-555102-2801020-021/1.jpg",
      "/images/products-images/products/uzli_i_detali/lonzherony-iz-mernogo-shvellera/IMG_1015.JPG",
    ],
    characteristics: [
      {
        name: "Масса, кг",
        id: "1",
        value: "от 129,5 до 258",
      },
      {
        name: "длина, мм",
        id: "2",
        value: "от 5455 до 9535",
      },
      {
        name: "площадь, м.кв.",
        id: "3",
        value: "от 4,1 до 8,5",
      },
    ],
  },
  {
    name: "ЛОНЖЕРОНЫ УСИЛЕННЫЕ",
    description: "555102-2801020/021",
    id: 8,
    images: [
      "/images/products-images/products/uzli_i_detali/lonzherony-sdvoennye-tipa-551605-2801014-014-015-014/1.jpg",
    ],
    characteristics: [
      {
        name: "Масса, кг",
        id: "1",
        value: "от 260 до 380",
      },
      {
        name: "длина, мм",
        id: "2",
        value: "от 6915 до 7035",
      },
      {
        name: "площадь, м.кв.",
        id: "3",
        value: "от 8,2 до 12,2",
      },
    ],
  },
];
// занесено
export const spareParts = [
  {
    name: "ЛАПА КУЛЬТИВАТОРА ЧИЗЕЛЬНОГО КЧ 01.00.012, КЧ 01.00.012-01",
    description: "ПГ 03.02.000",
    id: 1,
    images: [
      "/images/products-images/products/zp_selhoz/lapa-kultivatora-chizelnogo-kch01-00-005/1.jpg",
    ],
    characteristics: [
      {
        name: "№ Детали",
        id: "1",
        value: "01.00.012, 01.00.012-01",
      },
      {
        name: "Крепежные отверстия, мм",
        id: "2",
        value: "М12",
      },
      {
        name: "Межосевое расстояние, мм",
        id: "3",
        value: "45",
      },
      {
        name: "Материал",
        id: "4",
        value: "Сталь 65Г",
      },
      {
        name: "Ширина захвата L, мм",
        id: "5",
        value: "150-270",
      },
      {
        name: "Толщина S, мм",
        id: "6",
        value: "8",
      },
      {
        name: "Масса M, КГ",
        id: "7",
        value: "1,2 - 1,54",
      },
    ],
  },
  {
    name: "ЛАПА РЫХЛИТЕЛЬНАЯ 65Х10-М10 ПОД БОЛТ 10-КУ (КЧ 01.00.005)",
    description: "Лапа рыхлительная 65х10-М10 под болт 10-ку",
    id: 2,
    images: [
      "/images/products-images/products/zp_selhoz/lapa-rihlitylnaya-m10/1.jpg",
    ],
    characteristics: [
      {
        name: "крепёжные отверстия, мм",
        id: "1",
        value: "M10",
      },
      {
        name: "материал",
        id: "2",
        value: "Сталь 65Г",
      },
      {
        name: "толщина S, мм",
        id: "3",
        value: "10",
      },
    ],
  },
  {
    name: "ЛАПА РЫХЛИТЕЛЬНАЯ 65Х10-М12 ПОД БОЛТ 12-КУ (КЧ 01.00.005)",
    description: "65х10-М12 под болт 12-ку",
    id: 3,
    images: [
      "/images/products-images/products/zp_selhoz/lapa-rihlitylnaya-m12/1.jpg",
    ],
    characteristics: [
      {
        name: "крепёжные отверстия, мм",
        id: "1",
        value: "M12",
      },
      {
        name: "материал",
        id: "2",
        value: "Сталь 65Г",
      },
      {
        name: "толщина S, мм",
        id: "3",
        value: "10",
      },
    ],
  },
  {
    name: "ЛАПА РЫХЛИТЕЛЬНАЯ ОБОРОТНАЯ ДОЛОТООБРАЗНАЯ 65Х10-О-М10 ПОД БОЛТ 10-КУ (КЧ01.00.011)",
    description:
      "лапа рыхлительная оборотная долотообразная 65х10-О-М10 под болт 10-ку",
    id: 4,
    images: [
      "/images/products-images/products/zp_selhoz/lapa-rihlitylnaya-oborotnya-m10/1.jpg",
    ],
    characteristics: [
      {
        name: "крепёжные отверстия, мм",
        id: "1",
        value: "M10",
      },
      {
        name: "материал",
        id: "2",
        value: "Сталь 65Г",
      },
      {
        name: "толщина S, мм",
        id: "3",
        value: "10",
      },
      {
        name: "межосевое расстояние, мм",
        id: "4",
        value: "45",
      },
      {
        name: "Масса, кг",
        id: "4",
        value: "1,1",
      },
    ],
  },
  {
    name: "ЛАПА РЫХЛИТЕЛЬНАЯ ОБОРОТНАЯ ДОЛОТООБРАЗНАЯ 65Х10-О-М12 ПОД БОЛТ 12-КУ (КЧ01.00.011)",
    description:
      "лапа рыхлительная оборотная долотообразная 65х10-О-М12 под болт 12-ку",
    id: 5,
    images: [
      "/images/products-images/products/zp_selhoz/lapa-rihlitylnaya-oborotnya-m12/1.jpg",
    ],
    characteristics: [
      {
        name: "крепёжные отверстия, мм",
        id: "1",
        value: "M12",
      },
      {
        name: "материал",
        id: "2",
        value: "Сталь 65Г",
      },
      {
        name: "толщина S, мм",
        id: "3",
        value: "10",
      },
      {
        name: "межосевое расстояние, мм",
        id: "4",
        value: "45",
      },
      {
        name: "масса, кг",
        id: "4",
        value: "1,1",
      },
    ],
  },
  {
    name: "ЛАПА КУЛЬТИВАТОРА ЧИЗЕЛЬНОГО КПЦ 02.402",
    description: "КПЦ 02.402",
    id: 6,
    images: [
      "/images/products-images/products/zp_selhoz/lapa-kultivatora-chizelnogo-kch02-402/1.jpg",
    ],
    characteristics: [
      {
        name: "материал",
        id: "1",
        value: "Сталь 65Г",
      },
      {
        name: "толщина S, мм",
        id: "2",
        value: "6",
      },
      {
        name: "масса m, кг",
        id: "3",
        value: "0,33",
      },
    ],
  },
  {
    name: "ДИСК В 2-2-650-6",
    description: "В 2-2-650-6. Используется для бороны дисковой БДТ-3; БДТ-7",
    id: 7,
    images: [
      "/images/products-images/products/zp_selhoz/disk-v-2-2-650-6/1.jpg",
    ],
    characteristics: [
      {
        name: "материал",
        id: "1",
        value: "Сталь 65Г",
      },
      {
        name: "диаметр d , мм",
        id: "2",
        value: "650",
      },
      {
        name: "масса m, кг",
        id: "3",
        value: "12,2",
      },
    ],
  },
  {
    name: "ЛЕМЕХ ППН.8.30/50-301П (-01) (АНАЛОГ «КВЕРНЕЛАНД»)",
    description: "ППН.8.30/50-301П (-01)",
    id: 8,
    images: [
      "/images/products-images/products/zp_selhoz/lemekh-ppn-8-30-50-301p-01/1.jpg",
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
];
// занесено
export const lightIndustryProducts = [
  {
    name: "РУКАВИЦЫ СПЕЦИАЛЬНЫЕ ГОСТ 12.4.010-75*",
    description:
      "Для защиты рук работающих от повышенных температур и механических воздействий.",
    id: 1,
    images: [
      "/images/products-images/products/legprom/rukavitsy-spetsialnye-gost-12-4-010-75-1/IMG_1102.JPG",
      "/images/products-images/products/legprom/rukavitsy-spetsialnye-gost-12-4-010-75-1/IMG_1103.JPG",
    ],
    characteristics: [
      {
        name: "Рекомендуемые размеры",
        id: "1",
        value: "1, 2",
      },
      {
        name: "Материал",
        id: "2",
        value: "Парусина полульняная с огнеупорной пропиткой ГОСТ 15530-76",
      },
    ],
  },
  {
    name: "РУКАВИЦЫ СПЕЦИАЛЬНЫЕ ГОСТ 12.4.010-75*",
    description:
      "Для защиты рук работающих от повышенных температур и механических воздействий.",
    id: 2,
    images: [
      "/images/products-images/products/legprom/rukavitsy-spetsialnye-gost-12-4-010-75-2/IMG_1100.JPG",
    ],
    characteristics: [
      {
        name: "Рекомендуемые размеры",
        id: "1",
        value: "1, 2",
      },
      {
        name: "Материал",
        id: "2",
        value: "Парусина полульняная с огнеупорной пропиткой ГОСТ 15530-76",
      },
    ],
  },
  {
    name: "РУКАВИЦЫ СПЕЦИАЛЬНЫЕ по ГОСТ 12.4.010-75*",
    description:
      "Для защиты рук работающих от истирания, механических воздействий; повышенная сцепляемость с поверхностями.",
    id: 3,
    images: [
      "/images/products-images/products/legprom/rukavitsy-spetsialnye-gost-12-4-010-75-3/IMG_11251.JPG",
      "/images/products-images/products/legprom/rukavitsy-spetsialnye-gost-12-4-010-75-3/IMG_11261.JPG",
    ],
    characteristics: [
      {
        name: "Рекомендуемые размеры",
        id: "1",
        value: "1, 2",
      },
      {
        name: "Материал",
        id: "2",
        value: "Парусина полульняная с огнеупорной пропиткой ГОСТ 15530-76",
      },
    ],
  },
  {
    name: "КОСТЮМ БРЕЗЕНТОВЫЙ ОТ ПОВЫШЕННЫХ ТЕМПЕРАТУР",
    description: "Защита от повышенных температур.",
    id: 4,
    images: [
      "/images/products-images/products/legprom/custum-temperatyra/1.jpg",
    ],
    characteristics: [
      {
        name: "Материал",
        id: "1",
        value: "Парусина полульняная с огнеупорной пропиткой ГОСТ 15530-76",
      },
    ],
  },
  {
    name: "КОСТЮМ МУЖСКОЙ ГОСТ 27653-88, СТБ 1387-2003",
    description:
      "Костюм мужской - предназначен для защиты от общепроизводственных факторов.",
    id: 5,
    images: ["/images/products-images/products/legprom/custum-gost/1.jpg"],
    characteristics: [
      {
        name: "Материал",
        id: "1",
        value: "Грета 51% х/б, 49% п/э.",
      },
    ],
  },
  {
    name: "КУРТКА УТЕПЛЕННАЯ",
    description: "нет описания",
    id: 6,
    images: ["/images/products-images/products/legprom/kyrtka/1.jpg"],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
  {
    name: "ПОЛОТНО СИНТЕТИЧЕСКОЕ СЕТКА ТУ BY 600038921.003-2006",
    description:
      "Предназначено для изготовления полиграфической продукции, рассчитанной на длительную и интенсивную эксплуатацию.",
    id: 7,
    images: [
      "/images/products-images/products/legprom/polotno-sinteticheskoe-setka-tu-by-600038921-003-2006/IMG_1312.JPG",
    ],
    characteristics: [
      {
        name: "Ширина полотна, м",
        id: "1",
        value: "от 1 до 3",
      },
      {
        name: "Поверхностная плотность, г/м2",
        id: "2",
        value: "40",
      },
      {
        name: "Разрывная нагрузка по длине, Н",
        id: "3",
        value: "190",
      },
      {
        name: "Разрывная нагрузка по ширине, Н",
        id: "4",
        value: "50",
      },
    ],
  },
  {
    name: "ПАКЕТ ТУ РБ 600038921.001-2003",
    description:
      "Предназначены для упаковывания, транспортирования и хранения пищевых продуктов. Допускается использование пакетов для упаковывания промышленных товаров и пр.",
    id: 8,
    images: [
      "/images/products-images/products/legprom/paket-tu-rb-600038921-001-2003/IMG_1306.JPG",
    ],
    characteristics: [
      {
        name: "Материал",
        id: "1",
        value: "Плёнка полиэтиленовая",
      },
      {
        name: "Толщина пленки, мк",
        id: "2",
        value: "от 0,2 до 0,8",
      },
      {
        name: "Максимальная ширина, м",
        id: "3",
        value: "до 1",
      },
    ],
  },
];

// много данных в таблице
export const springs = [
  {
    name: "ПРУЖИНЫ",
    description: "Пружины сжатия и растяжения",
    id: 1,
    images: ["/images/products-images/products/pruzhiny/pruzhiny/1.JPG"],
    characteristics: [
      {
        name: "Диаметр прутка, мм",
        id: "1",
        value: "от 10 до 20",
      },
      {
        name: "Диаметр, мм",
        id: "1",
        value: "от 41 до 175",
      },
    ],
    tableNameCharacteristics: [
      [
        "Диаметр прутка, мм",
        "Количество витков полное, шт",
        "Диаметр, мм",
        "Высота, мм",
        "Высота обжатия, мм",
        "Величина силы, кгс",
      ],
    ],
    tableCharacteristics: [
      ["12,5 шлиф.", "11", "Dнар=90±1,1", "252", "210", "Р1=220±22"],
      ["16,8 калибр.", "11,3", "	Dнар=175", "670", "290", "F2=740±40"],
      [
        "15,5 шлиф.",
        "	5,5",
        "	Dнар=133 -2,8",
        "220",
        "H1=149, H2=92",
        "P1=620, P2=1150",
      ],
      [
        "12,5 шлиф.",
        "11",
        "Dнар=90±2,2",
        "323",
        "H1=320, H2=165",
        "F1=10, F2=760",
      ],
      [
        "10 калибр.",
        "5",
        "Dнар(технол.)=151,5",
        "178",
        "Без ТО и испытаний",
        "",
      ],
      [
        "15,4 шлиф.",
        "5",
        "	Dнар=133",
        "220",
        "H1=149, H2=92",
        "P1=610, P2=1130",
      ],
      [
        "14 шлиф.",
        "6",
        "	Dнар=120",
        "218",
        "H1=149, H2=92",
        "P1=434,5, P2=863,5",
      ],
      [
        "16,5 шлиф.",
        "6",
        "Dнар=143",
        "288",
        "H1=169, H2=112",
        "P1=890, P2=1335",
      ],
      ["15 калибр.", "10", "Dвн=41", "205", "H2=167,4", "P2=1250"],
      ["16 калибр.", "14", "Dнар=105", "395", "H1=367", "	F1=171"],
      ["12 калибр.", "7", "Dнар=68", "112", "Без испытаний", ""],
      ["15 калибр.", "8", "Dвн=87", "280", "H1=180, H2=130", "P1=625, P2=980"],
      ["14 калибр.", "21", "Dнар=85", "295", "Без испытаний", ""],
      ["14 калибр.", "22", "Dнар=85", "322", "Без испытаний", ""],
      [
        "12,4 шлиф.",
        "9,33",
        "Dвн=102,7",
        "434",
        "H1=273, H2=196",
        "P1=305, P2=460",
      ],
      [
        "12,4 шлиф.",
        "9,33",
        "Dвн=102,7",
        "454",
        "H1=278, H2=198",
        "P1=335, P2=485",
      ],
      ["17,6 шлиф.", "10", "Dвн=90", "362", "H1=257", "	P1=930...990"],
      ["20", "3", "Dвн=103", "90мах", "	Без испытаний", ""],
      ["14 калибр.", "16", "Dнар=85", "405,5", "Н2=240", "	Р2=1137"],
      ["20", "6,5", "Dнар=170", "255", "H1=226, H2=140", "P1=305, P2=1120"],
    ],
  },
];

export const buildingMaterials = [
  {
    name: "СМЕСИ БЕТОННЫЕ ГОТОВЫЕ К УПОТРЕБЛЕНИЮ",
    description:
      "изготавливаются в соответствии с СТБ 1035-96, СТБ-1544-2005. По заявке покупателя вводится противоморозная добавка. Возможна доставка.",
    id: 1,
    images: ["/images/products-images/products/stroymat/betonnye-smesi/1.jpg"],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
  {
    name: "РАСТВОРНЫЕ СМЕСИ КЛАДОЧНЫЕ, ЦЕМЕНТНЫЕ",
    description:
      "изготавливаются в соответствии с СТБ 1307-2012. По заявке покупателя вводится противоморозная добавка. Возможна доставка",
    id: 2,
    images: [
      "/images/products-images/products/stroymat/rastvorimye-smesi/1.jpg",
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
];

export const consumptionGoods = [
  {
    name: "ПЕЧИ ДЛЯ БАНИ",
    description: "Печи для бани с емкостью каменки 0.02м3 и 0.04м3.",
    id: 1,
    images: [
      "/images/products-images/products/tnp/pechi/pech2.jpg",
      "/images/products-images/products/tnp/pechi/pech3.jpg",
    ],
    characteristics: [
      {
        name: "МАРКИРОВКА",
        id: "1",
        value: "179-96-013, 179-96-014",
      },
      {
        name: "ГАБАРИТНЫЕ РАЗМЕРЫ (ДХШХВ) (ММ)",
        id: "2",
        value: "884х414х1000, 641х554х1075",
      },
      {
        name: "ВЕС (КГ)",
        id: "3",
        value: "126, 95",
      },
      {
        name: "ЕМКОСТЬ КАМЕНКИ (М3)",
        id: "4",
        value: "от 0,02 до 0,04",
      },
      {
        name: "ОБЪЕМ ОТАПЛИВАЕМОГО ПОМЕЩЕНИЯ (М3)",
        id: "5",
        value: "16",
      },
      {
        name: "ТОЛЩИНА МЕТАЛЛА ТОПКИ/КАМЕНКИ (ММ)",
        id: "6",
        value: "14/6",
      },
      {
        name: "МАКСИМАЛЬНО-ДОПУСТИМАЯ ДЛИНА ДРОВ (ММ)",
        id: "7",
        value: "от 550 до 800",
      },
      {
        name: "ТИП ТОПЛИВА",
        id: "8",
        value: "дрова",
      },
    ],
  },
  {
    name: "МАНГАЛЫ",
    description:
      'Мангал - это приспособление для приготовления мяса на угольях, исконно русское название — "жаровня". Предлагаем несколько модификаций.',
    id: 2,
    images: [
      "/images/products-images/products/tnp/mangal/1.jpg",
      "/images/products-images/products/tnp/mangal/mangal012.png",
      "/images/products-images/products/tnp/mangal/mangal016.png",
      "/images/products-images/products/tnp/mangal/mangal017.png",
    ],
    characteristics: [
      {
        name: "179-96-012",
        id: "1",
        value: "300X700X900",
      },
      {
        name: "179-96-016",
        id: "2",
        value: "300X570X828",
      },
      {
        name: "179-96-017",
        id: "3",
        value: "390X1300X1000",
      },
      {
        name: "179-96-015",
        id: "4",
        value: "Печь для казана",
      },
    ],
  },
];
// много данных в таблице
export const sidewalkTile = [
  {
    name: 'ПЛИТКА ТРОТУАРНАЯ "НОВЫЙ ГОРОД" СТБ1071-2007 Б 3.020.1-8.08',
    description: "",
    id: 1,
    images: ["/images/products-images/products/plitka/plitka-newcity/1.jpg"],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
    tableNameCharacteristics: [["Описание,Характеристики", "Марка", "Цвет"]],
    tableCharacteristics: [
      ["198х98х64 мм.", "П20.10.6-М-аВ22,5", "Серый"],
      ["1 м2 = 50,8 шт.", "П20.10.6-МВЦкр-аВ22,5 3%", "Красный (верх)"],
      ["1 м2 = 0,0655 м3", "П20.10.6-МВЦч-аВ22,5 3%", "Черный (верх)"],
      [
        "Объем 1шт. = 0,0013 м3",
        "П20.10.6-МЦкр-аВ22,5 3%",
        "Красный (полностью)",
      ],
      [
        "Средняя масса 1шт. = 2,9кг.",
        "П20.10.6-МЦч-аВ22,5 3%",
        "Черный (полностью)",
      ],
      ["Масса с поддоном 1,34т., на поддоне 528шт. (9,878 м2)", "", ""],
    ],
  },
  {
    name: "БОРТ ТРОТУАРНЫЙ СТБ 1097-2012 3.020.1-9.12",
    description: "",
    id: 2,
    images: ["/images/products-images/products/plitka/bort-trotyarnyi/1.jpg"],
    tableNameCharacteristics: [["Описание,Характеристики", "Марка", "Цвет"]],
    tableCharacteristics: [
      ["1000х200х80мм.", "БРТ100.20.8-М", "Серый"],
      ["Объем 1шт. = 0,016 м3", "В30", ""],
      ["1 м3 = 62,5 шт.", "", ""],
      ["Масса 1шт. = 35,2 кг", "", ""],
      ["Масса с поддоном 1,422т., на поддоне 40шт. (40 м.п.)", "", ""],
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
  {
    name: "БОРТ ДОРОЖНЫЙ СТБ 1097-2012 3.020.1-9.12 (ВРЕМЕННО НЕ ИЗГОТАВЛИВАЮТСЯ)",
    description: "",
    id: 3,
    images: ["/images/products-images/products/plitka/bort-dorojnyi/1.jpg"],
    tableNameCharacteristics: [["Описание,Характеристики", "Марка", "Цвет"]],
    tableCharacteristics: [
      ["1000х300х150мм.", "БРТ100.30.15М", "Серый"],
      ["Объем 1шт. = 0,042 м3", "В30", ""],
      ["1 м3 = 23,8шт.", "", ""],
      ["Масса 1шт = 92,4 кг.", "", ""],
      ["Масса с поддоном 1,124т., на поддоне 12шт. (12 м.п.)", "", ""],
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
  {
    name: 'ПЛИТКА ТРОТУАРНАЯ "КИРПИЧИК" СТБ1071-2007 Б.3.020.1-8.08',
    description: "",
    id: 4,
    images: ["/images/products-images/products/plitka/plitka-trotyarnya/1.jpg"],
    tableNameCharacteristics: [["Описание,Характеристики", "Марка", "Цвет"]],
    tableCharacteristics: [
      ["198х98х64 мм.", "П20.10.6-М-аВ22,5", "Серый"],
      ["1 м2 = 50,8 шт.", "П20.10.6-МВЦкр-аВ22,5 3%", "Красный (верх)"],
      ["1 м2 = 0,0655 м3", "П20.10.6-МВЦч-аВ22,5 3%", "Черный (верх)"],
      [
        "Объем 1шт. = 0,0013 м3",
        "П20.10.6-МЦкр-аВ22,5 3%",
        "Красный (полностью)",
      ],
      [
        "Средняя масса 1шт. = 2,9кг.",
        "П20.10.6-МЦч-аВ22,5 3%",
        "Черный (полностью)",
      ],
      ["Масса с поддоном 1,407т., на поддоне 480шт. (9,527 м2)", "", ""],
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
];
export const fittings = [
  {
    name: "ПЕТЛЯ ПН 1-85 ПО ГОСТ 5088-94",
    description:
      "Для створок оконных блоков и полотен дверных блоков без наплава.",
    id: 1,
    images: [
      "/images/products-images/products/furnitura/petlya-pn/1.jpg",
      "/images/products-images/products/furnitura/petlya-pn/IMG_1923.JPG",
    ],
    characteristics: [
      {
        name: "ПЕТЛЯ ПРАВАЯ",
        id: "1",
        value: "ПН1-85.00, ПН1-85Н.00",
      },
      {
        name: "ПЕТЛЯ ЛЕВАЯ",
        id: "2",
        value: "ПН1-85.00-01, ПН1-85Н.00-01",
      },
      {
        name: "СОКРАЩЁННОЕ ОБОЗНАЧЕНИЕ ПОКРЫТИЯ",
        id: "3",
        value: "Хим.фосф.прм., полимерное белое",
      },
    ],
  },
  {
    name: "ПЕТЛЯ ПН 1-110 ПО ГОСТ 5088-94",
    description:
      "Для створок оконных блоков и полотен дверных блоков без наплава.",
    id: 2,
    images: [
      "/images/products-images/products/furnitura/petlya-pn/1.jpg",
      "/images/products-images/products/furnitura/petlya-pn/IMG_1923.JPG",
    ],
    characteristics: [
      {
        name: "ПЕТЛЯ ПРАВАЯ",
        id: "1",
        value: "ПН1-110.00, ПН1-110Н.00",
      },
      {
        name: "ПЕТЛЯ ЛЕВАЯ",
        id: "2",
        value: "ПН1-110.00-01, ПН1-110Н.00-01",
      },
      {
        name: "СОКРАЩЁННОЕ ОБОЗНАЧЕНИЕ ПОКРЫТИЯ",
        id: "3",
        value: "Хим.фосф.прм., полимерное белое",
      },
    ],
  },
  {
    name: "ПЕТЛЯ ПН 1-130 ПО ГОСТ 5088-94",
    description:
      "Для створок оконных блоков и полотен дверных блоков без наплава.",
    id: 3,
    images: [
      "/images/products-images/products/furnitura/petlya-pn/1.jpg",
      "/images/products-images/products/furnitura/petlya-pn/IMG_1923.JPG",
    ],
    characteristics: [
      {
        name: "ПЕТЛЯ ПРАВАЯ",
        id: "1",
        value: "ПН1-130.00, ПН1-130Н.00",
      },
      {
        name: "ПЕТЛЯ ЛЕВАЯ",
        id: "2",
        value: "ПН1-130.00-01, ПН1-130Н.00-01",
      },
      {
        name: "СОКРАЩЁННОЕ ОБОЗНАЧЕНИЕ ПОКРЫТИЯ",
        id: "3",
        value: "Хим.фосф.прм., полимерное белое",
      },
    ],
  },
  {
    name: "ПЕТЛЯ ПС 280",
    description: "",
    id: 4,
    images: ["/images/products-images/products/furnitura/petlya-pc/1.jpg"],
    characteristics: [
      {
        name: "длина L, мм",
        id: "1",
        value: "280",
      },
      {
        name: "толщина s , мм",
        id: "2",
        value: "3",
      },
      {
        name: "высота H, мм",
        id: "3",
        value: "50",
      },
      {
        name: "Диаметр отверстий d, мм",
        id: "4",
        value: "5,5",
      },
    ],
  },
  {
    name: "УГОЛОК У3",
    description: "Полимерное покрытие",
    id: 5,
    images: [
      "/images/products-images/products/furnitura/ugolok-u3/IMG_1943.JPG",
    ],
    characteristics: [
      {
        name: "длина L, мм",
        id: "1",
        value: "65",
      },
      {
        name: "толщина s , мм",
        id: "2",
        value: "2",
      },
      {
        name: "высота H, мм",
        id: "3",
        value: "65",
      },
      {
        name: "ширина B, мм",
        id: "4",
        value: "40",
      },
    ],
  },
  {
    name: "УГОЛОК У4",
    description: "Полимерное покрытие",
    id: 6,
    images: [
      "/images/products-images/products/furnitura/ugolok-u4/IMG_1944.JPG",
    ],
    characteristics: [
      {
        name: "длина L, мм",
        id: "1",
        value: "85",
      },
      {
        name: "толщина s , мм",
        id: "2",
        value: "2",
      },
      {
        name: "высота H, мм",
        id: "3",
        value: "45",
      },
      {
        name: "ширина B, мм",
        id: "4",
        value: "40",
      },
    ],
  },
  {
    name: "МЕБЕЛЬНАЯ ФУРНИТУРА",
    description: "используется при изготовлении кресел для зрительных залов",
    id: 7,
    images: [
      "/images/products-images/products/furnitura/mebelnaya-furnitura/IMG_1154.JPG",
      "/images/products-images/products/furnitura/mebelnaya-furnitura/IMG_1155.JPG",
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
];
// много данных в таблице
export const flanges = [
  {
    name: "ФЛАНЦЫ ПО DIN 2632,2633,2634,2635",
    description:
      "Фланцы применяются для соединения изделий арматуры с трубопроводами, соединения отдельных участков трубопроводов между собой и для присоединения трубопроводов к различному оборудованию.",
    id: 1,
    images: [
      "/images/products-images/products/flanci/flantsy-po-din-2632-2633-2634-2635/IMG_1027.JPG",
    ],
    characteristics: [
      {
        name: "DN условный проход, мм",
        id: "1",
        value: "от 80/88 до 400/414",
      },
      {
        name: "PN рабочее давление, кгс/см2",
        id: "2",
        value: "от 10 до 40",
      },
      {
        name: "Масса, кг",
        id: "3",
        value: "от 4,75 до 28,60",
      },
    ],
    tableNameCharacteristics: [
      [
        "DIN",
        "DN Условный проход, мм",
        "PN Рабочее давление, кг/см2",
        "Масса, кг",
      ],
    ],
    tableCharacteristics: [
      ["2632", "10", "11,30", "200/219"],
      ["2632", "10", "14,70", "250/273"],
      ["2632", "10", "17,40", "300/323"],
      ["2632", "10", "28,60", "400/406"],
      ["2633", "16", "4,62", "100/114"],
      ["2633", "16", "6,30", "125/139"],
      ["2633", "16", "7,75", "150/168"],
      ["2633", "16", "11,00", "200/219"],
      ["2633", "16", "15,60", "250/273"],
      ["2633", "16", "22,00", "300/323"],
      ["2634", "25", "17,00", "200/219"],
      ["2634", "25", "24,40", "250/273"],
      ["2635", "40", "4,75", "80/88"],
      ["2635", "40", "6,52", "100/114"],
      ["2635", "40", "11,80", "150/168"],
      ["2635", "40", "21,50", "200/219"],
    ],
  },
  {
    name: "ФЛАНЦЫ ПО ГОСТ 33259-2015",
    description:
      "Фланцы применяются для соединения изделий арматуры с трубопроводами, соединения отдельных участков трубопроводов между собой и для присоединения трубопроводов к различному оборудованию.",
    id: 2,
    images: [
      "/images/products-images/products/flanci/flantsy-po-gost-12820-80/IMG_1024.JPG",
      "/images/products-images/products/flanci/flantsy-po-gost-12820-80/IMG_1025.JPG",
      "/images/products-images/products/flanci/flantsy-po-gost-12820-80/IMG_1026.JPG",
      "/images/products-images/products/flanci/flantsy-po-gost-12820-80/IMG_1134.JPG",
    ],
    characteristics: [
      {
        name: "Dy условный проход, мм",
        id: "1",
        value: "от 32 до 400",
      },
      {
        name: "Py рабочее давление, кгс/см2",
        id: "2",
        value: "от 10 до 20",
      },
      {
        name: "Масса, кг",
        id: "3",
        value: "от 1,4 до 17,78",
      },
    ],
    tableNameCharacteristics: [
      ["DY Условный проход, мм", "PY Рабочее давление, кг/см2", "Масса, кг"],
    ],
    tableCharacteristics: [
      ["32", "10", "1,40"],
      ["50", "10", "2,06"],
      ["80", "10", "3,19"],
      ["100", "10", "3,96"],
      ["125", "10", "5,40"],
      ["150", "10", "6,62"],
      ["200", "10", "8,05"],
      ["250", "10", "10,65"],
      ["300", "10", "12,90"],
      ["32", "16", "1,58"],
      ["50", "16", "2,58"],
      ["80", "16", "3,71"],
      ["100", "16", "4,73"],
      ["125", "16", "6,38"],
      ["150", "16", "7,81"],
      ["200", "16", "10,10"],
      ["250", "16", "14,49"],
      ["300", "16", "17,78"],
      ["50", "16", "2,78"],
    ],
  },
  {
    name: "ЗАГЛУШКИ DIN 2527",
    description:
      "Заглушки фланцевые применяются в нефте- и газопроводах, на нефтеперерабатывающих заводах и водопроводах. Температура применения фланцевых заглушек зависит от марки стали, из которой они изготовлены, и варьируется от -70 до +650°С.",
    id: 3,
    images: [
      "/images/products-images/products/flanci/zaglushki-din-2527/1.jpg",
    ],
    characteristics: [
      {
        name: "",
        id: "1",
        value: "",
      },
    ],
  },
];
//
export const items = [
  {
    title: "Поковки и штамповки",
    count: "14",
    id: 1,
    image: "../images/products-images/pokovki.jpg",
    description: "Заготовки изготавливаются методом свободной ковки",
    categories: forgings,
    icon: "../images/product-icons/1.png",
  },
  {
    title: "Узлы и детали",
    count: "8",
    id: 2,
    image: "../images/products-images/yzli.jpg",
    description:
      "Силовые элементы конструкции крупных автомобилей, таких как МАЗ, МЗКТ и др.",
    categories: knots,
    icon: "../images/product-icons/2.png",
  },
  {
    title: "Запчасти сельхозмашин",
    count: "8",
    id: 3,
    image: "../images/products-images/zapchasty.jpg",
    description:
      "Запасные части, предназначенные для рыхления, культивирования, выравнивания грунта сельхозтехникой",
    categories: spareParts,
    icon: "../images/product-icons/3.png",
  },
  {
    title: "Изделия легкой промышленности",
    count: "8",
    id: 4,
    image: "../images/products-images/legprom.jpg",
    description: "Спецодежда, защитная одежда, а также полотна и др.",
    categories: lightIndustryProducts,
    icon: "../images/product-icons/4.png",
  },
  {
    title: "Пружины",
    count: "1",
    id: 5,
    image: "../images/products-images/pryjini.jpg",
    description: "Пружины сжатия и растяжения",
    categories: springs,
    icon: "../images/product-icons/5.png",
  },
  {
    title: "Строительные материалы",
    count: "2",
    id: 6,
    image: "../images/products-images/stroymat.jpg",
    description:
      "Смеси бетонные, готовые к употреблению. По заявке покупателя вводится противоморозная добавка.",
    categories: buildingMaterials,
    icon: "../images/product-icons/6.png",
  },
  {
    title: "Товары народного потребления",
    count: "2",
    id: 7,
    image: "../images/products-images/narpotreb.jpg",
    description: "Печи для бани, мангалы. Изготовление индивидуальных заказов",
    categories: consumptionGoods,
    icon: "../images/product-icons/7.png",
  },
  {
    title: "Плитка тротуарная",
    count: "4",
    id: 8,
    image: "../images/products-images/plitka.jpg",
    description: "Плитка тротуарная, борты. Возможна доставка",
    categories: sidewalkTile,
    icon: "../images/product-icons/8.png",
  },
  {
    title: "Фурнитура",
    count: "4",
    id: 9,
    image: "../images/products-images/furnityra.jpg",
    description:
      "Неотъемлемая частью изготовления мебели и других изделий, предоставляющая возможность создать комфортные и красивые предметы",
    categories: fittings,
    icon: "../images/product-icons/9.png",
  },
  {
    title: "Фланцы",
    count: "3",
    id: 10,
    image: "../images/products-images/flantsy.jpg",
    description:
      "Предназначенны для герметичного соединения трубопроводной арматуры и создания различных соединений.",
    categories: flanges,
    icon: "../images/product-icons/10.png",
  },
];
export const itemsLeftMenu = items.map((el) => {
  return {
    name: el.title,
    path: `/products/${el.id}`,
  };
});

export const news = [
  {
    name: "Народная летопись Великой Отечественной Войны: вспомним всех",
    smallDescription:
      "Великая Отечественная война 1941—1945 гг. оставила глубокий след в истории белорусского народа.",
    description:
      "Великая Отечественная война 1941—1945 гг. оставила глубокий след в истории белорусского народа. На оккупированной территории Беларуси 3 года полыхало пламя всенародного сопротивления захватчикам. В борьбе с германскими агрессорами Беларусь потеряла каждого третьего жителя. Белорусский народ свято чтит память павших.",
    img: "/images/news-images/120123.jpg",
    date: "12 Январь 2023г.",
    id: 1,
  },
  {
    name: "Поздравление с Новым Годом от директора Кузнечного завода тяжелых штамповок Виталия Бубелева",
    smallDescription: "",
    description: "",
    img: "/images/news-images/NewYearDir.jpg",
    date: "30 Декабрь 2022",
    id: 2,
  },
  {
    name: "Поздравление с Новым Годом от генерального директора Минского автомобильного завода Валерия Иванковича",
    smallDescription:
      "Уважаемые работники Минского автомобильного завода и предприятий холдинга «БЕЛАВТОМАЗ»!",
    description:
      "Уважаемые коллеги! Уважаемые работники Минского автомобильного завода и предприятий холдинга «БЕЛАВТОМАЗ»! Дорогие коллеги-автозаводцы! Все меньше и меньше времени остается до наступления Нового года 🎄 Этот светлый праздник всегда ассоциируется у нас с добром, семейным теплом и верой в чудеса. Мы искренне верим, что все загаданные в новогоднюю ночь желания обязательно сбудутся! Хочу от всей души поблагодарить каждого из вас за совместную работу в году уходящем. Несмотря на многие трудности, мы отработали его продуктивно и показали достойные результаты. Я уверен, что в 2023 мы сумеем сохранить свой рабочий энтузиазм и воплотить в жизнь масштабные проекты. Желаю, чтобы в Новом году вы всегда были окружены теплом и любовью своих близких, уважением коллег и друзей, а отличное настроение и душевный подъем всегда сопровождали вашу жизнь! Любви, добра и благополучия! С наступающим Новым годом! 🖋 Генеральный директор Минского автомобильного завода Валерий Иванкович.",
    img: "/images/news-images/GenMAZ.jpg",
    date: "30 Декабрь 2022",
    id: 3,
  },
  {
    name: "Поздравление с Новым Годом от Министра промышленности Республики Беларусь Александра Рогожника",
    smallDescription:
      "Уважаемые коллеги!Дорогие друзья!2022-й скоро уйдет в историю...",
    description:
      "Уважаемые коллеги! Дорогие друзья! 2022-й скоро уйдет в историю. В нем были разные мгновения. Но мы достойно провели этот год, вместе преодолевая трудности. Год показал, как важно поддерживать друг друга, заботиться и помогать. В этой связи хочу поблагодарить всех и каждого за ответственность, созидательный труд, дисциплину и большую работу, которую мы проделали вместе. В 2023-м нам предстоит воплотить в жизнь много планов и проектов. Для достижения поставленных целей потребуются целеустремленность и преданность делу, которые послужат нам залогом поступательного движения вперёд. Пусть новый, 2023-й начнется в кругу самых близких и дорогих вам людей. И в наших силах подарить своим родным самое дорогое – душевное тепло, понимание и заботу! Искренне желаю праздничного настроения, крепкого здоровья, благополучия вам и вашим семьям! Будьте счастливы, с Новым годом! 🖋 Министр промышленности Республики Беларусь Александр Рогожник",
    img: "/images/news-images/Minprom.jpg",
    date: "30 Декабрь 2022",
    id: 4,
  },
];
export const galery = [
  "/images/galery-images/1.jpg",
  "/images/galery-images/2.jpg",
  "/images/galery-images/3.jpg",
  "/images/galery-images/4.jpg",
  "/images/galery-images/5.jpg",
  "/images/galery-images/4.png",
];
