export type Language = {
  en: string
  se: string
}

export const homepage = {
  title: {
    en: "ELEVATE YOUR TASTE",
    se: "DEN BÄSTA UPPLEVELSEN",
  },
  reservation_button: {
    en: "Book Now",
    se: "BOKA NU",
  },

  intro: {
    en: "About Us",
    se: "Om oss",
  },

  intro_header: {
    en: "We Leave A Delicious Memory For You",
    se: "Vi lämnar ett härligt minne till dig",
  },

  intro_description_one: {
    en: "Welcome to The Table Himalaya - a culinary journey that transports you to the heart of the Himalayas through a symphony of flavors and a warm, inviting atmosphere. Nestled in the heart of Stockholm, our restaurant is a hidden gem that promises a dining experience like no other.",
    se: "Välkommen till The Table Himalaya - en kulinarisk resa som tar dig till Himalayas hjärta genom en symfoni av smaker och en varm, inbjudande atmosfär. Inbäddat i hjärtat av Stockholm är vår restaurang en dold pärla som utlovar en matupplevelse utan dess like",
  },

  intro_description_two: {
    en: "At The Table Himalaya, we pride ourselves on offering a gastronomic adventure that showcases the diverse and rich culinary traditions of the Himalayan region.",
    se: "På The Table Himalaya är vi stolta över att erbjuda ett gastronomiskt äventyr som visar upp de olika och rika kulinariska traditionerna i Himalaya-regionen",
  },

  dishes: [
    {
      price: 110,
      name: {
        en: "Chicen Tikka Masala",
        se: "Kyckling Tikka Masala",
      },
      description: {
        en: "These dishes are roasted in a clay oven in a masala sauce with yoghurt, cheese, butter and nuts",
        se: "Dessa rätter är rostade i en lerugn i en masalasås med yoghurt, ost, smör och nötter",
      },
      source: "/samosa.jpeg",
    },
    {
      price: 125,
      name: {
        en: "Mixed Chicken Grill",
        se: "Blandad kycklinggrill",
      },
      description: {
        en: "Chicken fillet marinated in tandoori, garlic and green chili, grilled in a clay oven and stir-fried fresh vegetables and sauce.",
        se: "Kycklingfilé marinerad i tandoori, vitlök och grön chili, grillad i lerugn och wokade färska grönsaker och sås",
      },
      source: "/mixed-grill.jpg",
    },
    {
      price: 115,
      name: {
        en: "Dal Pumpkin Paneer",
        se: "Dal Pumpkin Paneer",
      },
      description: {
        en: "Leaf spinach, homemade cheese with blandale lentils and in a huggable sauce.",
        se: "Bladspenat, hemgjord ost med blandale linser och i en krambar sås",
      },
      source: "/chicken-tikka.jpg",
    },
    {
      price: null,
      name: {
        en: "Korai",
        se: "Korai",
      },
      description: {
        en: "These dishes are roasted in a clay oven in a masala sauce with yoghurt, cheese, butter and nuts",
        se: "Dessa rätter rostas i en lerugn i en masalasås med yoghurt, ost, smör och nötter",
      },
      source: "/chicken-korai.jpg",
    },
    {
      price: 120,
      name: {
        en: "OUMPH! KORAI",
        se: "OUMPH! KORAI",
      },
      description: {
        en: "Clay oven grilled soy fillets",
        se: "Lerugnsgrillade sojafiléer",
      },
      source: "/oumph-korai.jpg",
    },
    {
      price: 135,
      name: {
        en: "Lamb Biryani",
        se: "Lamm Biryani",
      },
      description: {
        en: "Indian party risotto made from lamb with a lot of good spices and saffron",
        se: "Indisk festrisotto gjord på lamm med mycket goda kryddor och saffran",
      },
      source: "/palak_paneer.jpg",
    },
  ],

  menu_title: {
    en: "OUR MENU",
    se: "VÅR MENY",
  },

  menu_description: {
    en: "Our selection of dishes with quality taste",
    se: "Vårt urval av rätter med kvalitetssmak",
  },

  contact_us: {
    en: "Contact US",
    se: "Kontakta oss",
  },

  contact_description_one: {
    en: "You have the option to either make a reservation in advance or simply drop by our restaurnat without prior booking.",
    se: "Du har möjlighet att antingen boka i förväg eller helt enkelt komma förbi vårt restaurnag utan förbokning",
  },

  contact_description_two: {
    en: "At our restaurant, you can either secure a table by making a reservation in advance or simply walk in whenever you like",
    se: "På vårt restaurang kan du antingen säkra ett bord genom att boka i förväg eller helt enkelt gå in när du vill",
  },

  phone: {
    en: "Phone Numbers",
    se: "Phone Numbers",
  },

  email: {
    en: "Email",
    se: "Email",
  },

  table_reservation_title: {
    en: "Table Reservation",
    se: "Bordsbokning",
  },

  name: {
    en: "Your Name",
    se: "Ditt namn",
  },

  mail: {
    en: "Your Email Address",
    se: "Din e-postadress",
  },

  phone_number: {
    en: "Your Phone Number",
    se: "Ditt telefonnummer",
  },

  guests: {
    en: "Number of Guests",
    se: "Antal gäster",
  },

  date: {
    en: "date",
    se: "datum",
  },

  time: {
    en: "Time",
    se: "Tid",
  },

  message: {
    en: "Message",
    se: "meddelande",
  },
}

export const menu = {
  appetizer: {
    index: 0,
    name: {
      en: "Appetizers",
      se: "Förrätter",
    },
    source: "/appetizer-banner.jpg",
    items: [
      {
        name: {
          en: "Papadam",
          se: "Papadam",
        },
        description: {
          en: "Crispy lentil flour bread.",
          se: "Krispigt linsmjölsbröd.",
        },
        price: "40",
      },
      {
        name: {
          en: "Chicken Sadeko",
          se: "Chicken Sadeko",
        },
        description: {
          en: "Grilled chicken with mango.",
          se: "Grillad kycklingfilé med mango.",
        },
        price: 80,
      },
      {
        name: {
          en: "Onion Roll",
          se: "Onion Roll",
        },
        description: {
          en: "Sliced onions smothered in a simple, fragrant spiced chickpea flour and fried to crispy perfection.",
          se: "Skivad lök kvävd i en enkel, doftande kryddad kikärtsmjöl och stekt till krispig perfektion.",
        },
        price: 70,
      },
      {
        name: {
          en: "Samosa(Veg. / Kött)",
          se: "Samosa(Veg. / Kött)",
        },
        description: {
          en: "Indian pirogue with minced lamb/veg filling, 2 pieces.",
          se: "Indisk pirog med lammfärs/veg fylling , 2st.",
        },
        price: 80,
      },
      {
        name: {
          en: "Mountain Heart Stone Cocktail",
          se: "Mountain Heart Stone Cocktail",
        },
        description: {
          en: "Fry tiger prawns with sweet-chili sauce. Served with two different sauces.",
          se: "Stek tiger räkor med sweet-chili sås. Serveras med två olika såser.",
        },
        price: 90,
      },
    ],
  },
  favourites: {
    source: "/favourite-banner.jpg",
    index: 1,
    name: {
      en: "Main Dishes",
      se: "Huvud Rätter",
    },
    items: [
      {
        name: {
          en: "Tikka Masala (Chicken / Lamm)",
          se: "Tikka Masala (Chicken / Lamm)",
        },
        description: {
          en: "Grilled chicken/lamb in Tandoori spices cooked with mint, nuts and crème sauce.",
          se: "Grillad kyckling/lamm i Tandoori kryddor tillagad med mynta, nötter & gräddsås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 199,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Korma (Chicken / Lamm, Mild)",
          se: "Korma (Chicken / Lamm, Mild)",
        },
        description: {
          en: "Mild chicken/ lamb fillet cooked in a curry sauce with cashew nuts.",
          se: "Mild kycklingfilé/ lammfile i en currysås med cashew-pistage nötter.",
        },
        price: undefined,
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
          },
          {
            name: {
              en: "Lamb, mild",
              se: "Lamm, mild",
            },
            description: {
              en: null,
              se: null,
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Alpine Spice (Chicken/ Lamm)",
          se: "Alpine Spice (Chicken/ Lamm)",
        },
        description: {
          en: "A spicy dish from Himalaya, chicken fillet cooked in a spicy sauce.",
          se: "En eldig anrättning från himalaya, kycklingfiléer med kryddstark sås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 199,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Vindaloo (Chicken / Lamm , X - Stark)",
          se: "Vindaloo (Chicken / Lamm , X - Stark)",
        },
        description: {
          en: "Chicken / lamb fillet cooked in red wine and piri piri from southern India.",
          se: "Kycklingfilé / lammfile brässerad i rödvin grovmalen piri piri från södra Indien.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
            description: {
              en: null,
              se: null,
            },
          },
          {
            name: {
              en: "Lamb, X-Stark",
              se: "Lamm, X-Stark",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Madrasi (Chicken / Lamb)",
          se: "Madrasi (Chicken / Lamm)",
        },
        description: {
          en: "Chicken fillet / lambfillets with a smell of fresh coriander cooked with coconut sauce, carom seeds, mustard seedstamrin spiced curry leaves.",
          se: "Kycklingfile / lammfile med doft av färsk koriander i tamrin kryddade curryblad,senapfrön, caromfrön och kokossås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
            description: {
              en: null,
              se: null,
            },
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Kadai (Chicken / Lamm, Mellan / Stark)",
          se: "Kadai (Chicken / Lamm, Mellan / Stark)",
        },
        description: {
          en: "Marinated chicken fillets, capsicum, onion. vegetables in a basilica sauce.",
          se: "Marinerade kycklingfiléer, paprika, lök, grönsaker i en basilikasås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
          },

          {
            name: {
              en: "Lamb, Mellan / Stark",
              se: "Lamm, Mellan / Stark",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Makhani (Chicken / Lamm, Mild)",
          se: "Makhani (Chicken / Lamm, Mild)",
        },
        description: {
          en: "Butter chicken / lamb cooked with raisins, cashew nuts in a mild tandoori sauce.",
          se: "Grillad kyckling / lamm tillagad med russin, tandoori, cashew och pistagenötter i en mild tandoorisås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 199,
          },
          {
            name: {
              en: "Lamb, Mild",
              se: "Lamm, Mild",
            },
            price: 215,
          },
        ],
      },
      {
        name: {
          en: "Balti (Chicken / Lamb, Mellan / Stark)",
          se: "Balti (Chicken / Lamm, Mellan / Stark)",
        },
        description: {
          en: "Marinated chicken / lamm fillets with green chili, onions, capsicums & garlic in a spicy sauce.",
          se: "Marinerade kycklingfiléer med grön chili, lök, paprika och vitlök i en kryddstark sås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
          },
          {
            name: {
              en: "Lamb, Mellan / Stark)",
              se: "Lamm, Mellan / Stark)",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Mango Chicken (Mild/ Mellan)",
          se: "Mango Chicken (Mild/ Mellan)",
        },
        description: {
          en: "Marinated chicken fillets cooked with mango, finely chopped garlic and ginger.",
          se: "Marinerade kycklingfileer tilllagad med mango, finnhakade vitlök och ingefära.",
        },
        price: 210,
      },
      {
        name: {
          en: "Mountain Misty Bites (Chicken / Lamm, Mellan)",
          se: "Mountain Misty Bites (Chicken / Lamm, Mellan)",
        },
        description: {
          en: "Marinated chicken fillets cooked with fresh ginger, onion, garlic, tomatoes and a mixture of spices.",
          se: "Marinerade kycklingfiléer/ lamb fillet tillagad med färsk ingefära, lök, vitlök, tomat och en kryddblandning.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Jalfrezi (Chicken / Lamm, Medium)",
          se: "Jalfrezi (Chicken / Lamm, Mellan)",
        },
        description: {
          en: "Marinated chicken / lamb fillets cooked with fresh vegetables, capsicums, onion and indian cheese in a cream sauce",
          se: "Marinerade kycklingfiléer / lamm tillagad med färska grönsaker, paprika, lök och indisk ost i en kryddig krämsås.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Rogan Josh (Mellan)",
          se: "Rogan Josh (Mellan)",
        },
        description: {
          en: "Lamb fillets with a smell of fresh saffron, cardamom, fresh coriander, tomatoes & almond.",
          se: "Lamm filé med doft av saffran, kardemumma, färsk koriander, tomater och mandelflarn.",
        },
        price: 225
      },
      {
        name: {
          en: "Handi (Chicken / Lamm, Medium)",
          se: "Handi (Chicken / Lamm, Mellan)",
        },
        description: {
          en: "Chicken/lamb with paprika, tomato, chili, coriander, cashew nuts.",
          se: "Kyckling/lamm med paprika, tomat, chili, koriander, cashewnötter.",
        },
        sub: [
          {
            name: {
              en: "Chicken",
              se: "Kyckling",
            },
            price: 205,
          },
          {
            name: {
              en: "Lamb",
              se: "Lamm",
            },
            price: 219,
          },
        ],
      },
      {
        name: {
          en: "Chilli Chicken (Medium / Strong)",
          se: "Chilli Chicken (Mellan / Stark)",
        },
        description: {
          en: "Chicken with paprika, onion, garlic, tomato sauce, chili sauce and soy sauce.",
          se: "Kyckling med paprika, lök, vitlök, tomatsås, chilisås och sojasås.",
        },
        price: 205
      },
      {
        name: {
          en: "Chicken Timmur (Medium)",
          se: "Chicken Timmur (Mellan)",
        },
        description: {
          en: "Grilled chicken fillet with paprika, onion, ginger, garlic, chili pepper and Timmur (Himalayan herbs, Sichuan pepper from Nepal)",
          se: "Grillad kycklingfilé med paprika, lök, ingefära, vitlök, chilipeppar och Timmur (Himalaya örter, Sichuan pepper från Nepal)",
        },
        price: 219
      },
      {
        name: {
          en: "Chicken Manchurian (Medium / Strong)",
          se: "Chicken Manchurian (Mellan / Stark)",
        },
        description: {
          en: "Chicken with well-prepared special sauce (from South India).",
          se: "Kyckling med vällagade special sås (från syd indian).",
        },
        price: 205,
      },
      {
        name: {
          en: "Himalaya Chau-Min (Medium)",
          se: "Himalaya Chau-Min (Mellan)",
        },
        description: {
          en: "Noodles/ Spaghetti, fried with vegetables and chicken pieces.",
          se: "Nudlar/ Spaghetti, stekta med grönsaker och kyckling bitar.",
        },
        price: 199
      },
    ],
  },
  thali: {
    source: "/thali-banner.jpeg",
    index: 2,
    name: {
      en: "Thali Dishes",
      se: "Thali Rätter",
    },
    items: [
      {
        name: {
          en: "Ayurveda Thali",
          se: "Ayurveda Thali",
        },
        description: {
          en: "Three vegetarian dishes: spinach vadji, okra, lentils and mix-veg. Served with rice and raita.",
          se: "Tre vegetariska rätter: spenat vadji, okra, linser och mix-veg. Serveras med ris och raita.",
        },
        price: 245,
      },
      {
        name: {
          en: "Mix Thali",
          se: "Mix Thali",
        },

        description: {
          en: "Grilled lamb fillet, Chicken sambal and Scampi curry. Served with rice and raita.",
          se: "Grillad lammfilé, Kyckling sambal och Scampi curry. Serveras med ris, och raita.",
        },
        price: 265,
      },
      {
        name: {
          en: "Thakali Thali ( Medium)",
          se: "Thakali Thali ( Mellan)",
        },

        description: {
          en: "Complete and very popular dish from Nepal, consisting of Daal Jhaneko (Urud lentils with 'Jimmu' . An herb from high altitude Himalaya), Chicken Timmur, Lamb Sadeko, Panir Chilli. Specially prepared with Himalayan herbs",
          se: "Komplett och mycket populär maträtt från Nepal, bestående av Daal Jhaneko (Urud linser med 'Jimmu' . En ört från höghöjd Himalaya), Chicken Timmur, Lamm Sadeko, Panir Chilli. Speciellt lagat med Himalaya örter.",
        },
        price: 270,
      },
    ],
  },
  veg: {
    source: "/vegetarian-banner.jpg",
    index: 3,
    name: {
      en: "Vegetarian/Vegan (Rice included)",
      se: "Vegetariska/Veganska (Ris ingår)",
    },
    items: [
      {
        name: {
          en: "Alo Ghobi (Vegetarian / Vegan, Medium)",
          se: "Alo Ghobi (Vegetarisk / Vegan, Mellan)",
        },
        description: {
          en: "Fine spiced cauliflower, potatoes with white cummin, peas and other spices",
          se: "Lätt kryddad blomkål, potatis, ärter, spiskummin, samt andra kryddor",
        },
        price: 199,
      },
      {
        name: {
          en: "Paneer Jalfrezi (Melan)",
          se: "Paneer Jalfrezi (Melan)",
        },
        description: {
          en: "Fresh Indian cheese cooked with capsicums, onions and mushrooms",
          se: "Färsk indisk ost tillagad med paprika, lök och champinjoner",
        },
        price: 199,
      },
      {
        name: {
          en: "Dall Mix (Melan)",
          se: "Dall Mix (Melan)",
        },
        description: {
          en: "Exotic mixed lentils with Indian spices",
          se: "Exotiska blandade linser med indiska kryddor",
        },
        price: 199,
      },
      {
        name: {
          en: "Palak Paneer (Melan)",
          se: "Palak Paneer (Melan)",
        },
        description: {
          en: "Homemade fresh Indian cheese with spinach and curry",
          se: "Hemlagad färsk indisk ost med spenat och curry pulver",
        },
        price: 199,
      },
      {
        name: {
          en: "Alo Motor Vindi (Vegetarisk / Vegan, Medium)",
          se: "Alo Motor Vindi (Vegetarisk / Vegan, Mellan)",
        },
        description: {
          en: "Fried potatoes, peas and okra with coconut and masala sauce",
          se: "Stekta potatis, ärtor och okra med kokos och masalasås.",
        },
        price: 199,
      },
      {
        name: {
          en: "Veg Kofta",
          se: "Veg Kofta",
        },
        description: {
          en: "Vegetable balls cooked with tomato-based curry and masala sauce.",
          se: "Grönsaksbullar tillagad med tomatbaserad curry och masala sås.",
        },
        price: 199,
      },
    ],
  },
  clay_oven: {
    source: "/clay-oven-banner.jpeg",
    index: 4,
    name: {
      en: "Tandoori - Grill (Rice & salad included.)",
      se: "Tandoori - Grill (Ris & Sallad Ingår.)",
    },
    items: [
      {
        name: {
          en: "Chicken Tikka Sizzlar (Medium & Strong)",
          se: "Chicken Tikka Sizzlar (Mellan & Stark)",
        },
        description: {
          en: "Marinated chicken fillets in a mild tandoori spice. Grilled in a clay oven and served with a mild cream sauce.",
          se: "Marinerade kycklingfiléer i en mild tandoori krydda grillad och den serveras med en mild grädd masala sås.",
        },
        price: 219,
      },
      {
        name: {
          en: "Chili Chicken Tandoori (Strong)",
          se: "Chili Chicken Tandoori (Stark)",
        },
        description: {
          en: "Marinated chicken fillets in garlic, green chili, ginger and tandoori spices served with a red wine sauce",
          se: "Marinerad kycklingfiléer i vitlök, grön chili, ingefära och tandoori kryddor och serveras med en rödvinssås",
        },
        price: 219,
      },
      {
        name: {
          en: "Aurora Appetizer Mix (Medium)",
          se: "Aurora Appetizer Mix (Mild)",
        },
        description: {
          en: "A mixture of different tandoori dishes: Chicken tikka, lamb, tiger shrimps, salmon and garlic tikka. Served with a separate sauce",
          se: "En läcker blandning av olika tandoori rätter: chicken tikka, lamm, jätteräkor, lax och garlic tikka. Den serveras med separat sås.",
        },
        price: 265,
      },
      {
        name: {
          en: "Lamm Tikka Sizzlar (Mild, Medium & Strong)",
          se: "Lamm Tikka Sizzlar (Mild, Mellan & Stark)",
        },
        description: {
          en: "Grill lamb served with special sallad with hot iron sizzlar form.",
          se: "Grillad lammfile serveras med special sallad i varm järnform",
        },
        price: 285,
      },
    ],
  },
  biryani_dishes: {
    source: "/mughlai-banner.jpg",
    index: 5,
    name: {
      en: "BIRYANI DISHES",
      se: "BIRYANI RÄTTER",
    },
    items: [
      {
        name: {
          en: "Biryani (Chicken / Lamb, Mild / Medium / Strong)",
          se: "Biryani (Chicken / Lamm, Mild / Mellan / Stark)",
        },
        description: {
          en: "Chicken/lamb fillet with fresh ginger, garlic, coriander, special biryani masala, capsicum and saffranris with separate curry sauce",
          se: "Kycklingfile / lammfile med lök, ingefära, garam masala, special biryani masala samt paprika, lök, saffaran ris med separat currysås.",
        },
        price: 235,
      },
      {
        name: {
          en: "Vegetarian Biryani (Mild, Mellan & Stark)",
          se: "Vegetarisk Biryani (Mild, Mellan & Stark)",
        },
        description: {
          en: " Mixed vegetable with fresh onion, ginger, garlic, special biryani masala, coriander, saffranris and seperat vegcurry sauce",
          se: "Blandade grönsaker med lök, ingefära, specialbiryani masala, paprika, saffranris, koriander med vegcurrysås",
        },
        price: 199,
      },
      {
        name: {
          en: "Shrimp Biryani (Mild, Mellan & Stark)",
          se: "Räkor Biryani (Mild, Mellan & Stark)",
        },
        description: {
          en: "Shrimps with fresh ginger, garlic, coriander, special biryani masala, capsicum and saffron rice with separate shrimpcurry sauce",
          se: "Räkor med fräsk ingefära, koriander, special biryani masala, saffranris and and paprika med seprat currysås.",
        },
        price: 255,
      },
    ],
  },
  fish_and_seafood: {
    source: "/fish-banner.jpg",
    index: 6,
    name: {
      en: "Dishes from the Sea (Rice included)",
      se: "Rätter Från Havet (Ris ingår)",
    },
    items: [
      {
        name: {
          en: "Scampi Kadai (Medium & Strong)",
          se: "Scampi Kadai (Mellan & Stark)",
        },
        description: {
          en: "Tiger shrimps and vegetables in a spicy basilica sauce",
          se: "Jätteräkor med grönsaker i en kryddig basilika sås",
        },
        price: 239,
      },
      {
        name: {
          en: "Glacier Spice Trail Masala (Mellan & Stark)",
          se: "Glacier Spice Trail Masala (Mellan & Stark)",
        },
        description: {
          en: "Tiger shrimps in a spicy green masala, nuts and mints.",
          se: "Jätteräkor i en het grön masala, nötter och mynta.",
        },
        price: 239,
      },
    ],
  },
  bread: {
    source: "/bread-banner.jpg",
    index: 7,
    name: {
      en: "Bread",
      se: "BRÖD",
    },
    items: [
      {
        name: {
          en: "Naan Bröd (Common)",
          se: "Naan Bröd (Vanlig)",
        },
        description: {
          en: "New made soft bread",
          se: "Nybakat mjukt bröd",
        },
        price: 30,
      },
      {
        name: {
          en: "Vitlök Naan Bröd",
          se: "Vitlök Naan Bröd",
        },
        description: {
          en: "Naan with garlic.",
          se: "Naan med vitlök.",
        },
        price: 40,
      },
      {
        name: {
          en: "Peshawari Naan",
          se: "Peshawari Naan",
        },
        description: {
          en: "Naan bread baked with raisins, cashews, coconut and baked with a sweet taste ",
          se: "Naan bröd bakad med russin, cashewnötter, kokos och bakas med söt smak. ",
        },
        price: 40,
      },
      {
        name: {
          en: "Chicken Masala Naan",
          se: "Chicken Masala Naan",
        },
        description: {
          en: "Chicken stuffed naan, Slide spicy.",
          se: "Kyckling fylld naan, Lagom stark.",
        },
        price: 40,
      },
    ],
  },
  accessories: {
    source: "/accessories-banner.png",
    index: 8,
    name: {
      en: "Accessories",
      se: "TILLBEHÖR",
    },
    items: [
      {
        name: {
          en: " Minta Sauce / Tamarind Sauce / Mango Chutney",
          se: " Minta Sås / Tamarin Sås / Mango Chutney",
        },
        description: {
          en: "Yoghurt with mint / tamarind / mango chutney.",
          se: "Yogurt med minta / tamarin / mango chutney. ",
        },
        price: 40,
      },
      {
        name: {
          en: "Raita",
          se: "Raita",
        },
        description: {
          en: "Tomatoes, carrot, cucumber, yogurt and spice.",
          se: "Tomat, morötter, yoghurt, gurkor och krydda.",
        },
        price: 40,
      },
      {
        name: {
          en: "Extra Basmati Rice",
          se: "Extra Basmati Ris",
        },
        price: 40,
      },
      {
        name: {
          en: "Chili Pickles",
          se: "Chili Pickles",
        },
        price: 40,
      },
    ],
  },
  desserts: {
    source: "/dessert-banner.jpg",
    index: 9,
    name: {
      en: "Desserts",
      se: "EFTERRÄTTER",
    },
    items: [
      {
        name: {
          en: "Kulfi",
          se: "Kulfi",
        },
        description: {
          en: "Homemade ice cream with milk, cashew nuts, coconut, pistachio and saffron.",
          se: "Hemlagad glass med mjölk, cashewnötter, kokos, pistage och saffran.",
        },
        price: 60,
      },
      {
        name: {
          en: "Gulab Jamun",
          se: "Gulab Jamun",
        },
        description: {
          en: "A sweet traditional dessert originating in the Indian subcontinent that is very popular in India, Nepal, Pakistan, Thailand, Myanmar and Bangladesh.",
          se: "En söt traditionell efterrätt med ursprung i indien subkontinenten som är mycket populär i Indien, Nepal, Pakistan, Thailand, Myanmar och Bangladesh.",
        },
        price: 70,
      },
      {
        name: {
          en: "Glass",
          se: "Glass",
        },
        description: {
          en: "Vanilla ice cream with caramel or chocolate sauce",
          se: "Vaniljglass med kola eller chokladsås",
        },
        price: 40,
      },
      {
        name: {
          en: "Mango Lassi",
          se: "Mango Lassi",
        },
        description: {
          en: "Indian milkshake made with mango, yoghurt and sugar.",
          se: "Indisk milkshake gjörd på mango, yoghurt, och socker",
        },
        price: 60,
      },
    ],
  },
}

export const drinks = {
  bottle_beer: {
    name: {
      en: "Bottle Beer cl Dragon Beer",
      se: "Flask Öl cl Fatöl",
    },
    items: [
      {
        name: {
          en: "Bangla",
          se: "Bangla",
        },
      },
      {
        name: {
          en: "Indian Beer; Light Stock Little",
          se: "Indisk Öl; Ljus Lager Lite",
        },
        price: "33, 55",
      },
      {
        name: {
          en: "Fuller",
          se: "Fylligare",
        },
        price: "66 95",
      },
      {
        name: {
          en: "Cobra",
          se: "Cobra",
        },
        price: "33, 55",
      },
      {
        name: {
          en: "Light Lager Indian Beer",
          se: "Ljus Lager Indish Öl",
        },
        price: "66, 95",
      },
      {
        name: {
          en: "Kingfisher",
          se: "Kingfisher",
        },
      },
      {
        name: {
          en: "Indian Light Foam",
          se: "Indish Ljust Skum",
        },
        price: "33, 55",
      },
      {
        name: {
          en: "Bombay Gold",
          se: "Bombay Gold",
        },
        price: "66, 86",
      },
      {
        name: {
          en: "Mariestads",
          se: "Mariestads",
        },
        price: "50, 59",
      },
      {
        name: {
          en: "Cider (Pear, Mango, Apple),",
          se: "Cider (Päron, Mango, Äppel),",
        },
        price: "33, 55",
      },
      {
        name: {
          en: "Folk Beer",
          se: "Folköl",
        },
        price: "33, 49",
      },
      {
        name: {
          en: "Non-Alcoholic Beer",
          se: "Alkoholfritt Öl",
        },
        price: "33, 39",
      },
      {
        name: {
          en: "Draft Beer",
          se: "Fatöl",
        },
      },
      {
        name: {
          en: "Spendrups Lager 5.3%",
          se: "Spendrups Lager 5,3%",
        },
        price: "40, 49",
      },
      {
        name: {
          en: "Sitting Bulldog IPA 5.8%",
          se: "Sitting Bulldog IPA 5,8%",
        },
        price: "40, 49",
      },
    ],
  },
  juice: {
    name: {
      en: "Lassi/Juice",
      se: "Läsk/Juice",
    },
    items: [
      {
        name: {
          en: "Cola, Fanta, Loka, Sprite, Zero",
          se: "Cola, Fanta, Loka, Sprite, Zero",
        },
        price: "29",
      },
      {
        name: {
          en: "Mango Juice",
          se: "Mango Juice",
        },
        price: "39",
      },
      {
        name: {
          en: "Mango Lassi",
          se: "Mango Lassi",
        },
        price: "49",
      },
    ],
  },
  hot_beverage: {
    name: {
      en: "Hot Beverages",
      se: "Varma Drycker",
    },
    items: [
      {
        name: {
          en: "Coffee",
          se: "Kaffe",
        },
        price: "25",
      },
      {
        name: {
          en: "Irish Coffee 4CL",
          se: "Irish Kaffe 4CL",
        },
        price: "86",
      },
      {
        name: {
          en: "Indian Chai",
          se: "Indisk Chai",
        },
        price: "25",
      },
    ],
  },
  drinks: {
    name: {
      en: "Drinks",
      se: "Drinker",
    },
    description: {
      en: "4cl-109 kr, 6cl-129 kr",
      se: "4cl-109 kr, 6cl-129 kr",
    },
    items: [
      {
        name: {
          en: "Gin Tonic",
          se: "Gin Tonic",
        },
        description: {
          en: "(Gin, Tonic, Citron)",
          se: "(Gin, Tonic, Citron)",
        },
      },
      {
        name: {
          en: "Vodka Lime",
          se: "Vodka Lime",
        },
        description: {
          en: "(Bodka, Krossad IS, Lime Fruit)",
          se: "(Bodka, Krossad IS, Lime Fruit)",
        },
      },

      {
        name: {
          en: "Whisky Sour",
          se: "Whisky Sour",
        },
        description: {
          en: "(Whiskey, Citronsaft)",
          se: "(Whiskey, Citronsaft)",
        },
      },
      {
        name: {
          en: "Cava",
          se: "Cava",
        },
        description: {
          en: "(Whiskey, Citronsaft)",
          se: "(Whiskey, Citronsaft)",
        },
      },
      {
        name: {
          en: "Glas",
          se: "Glas",
        },
        price: "69",
      },

      {
        name: {
          en: "Flaska",
          se: "Flaska",
        },
        price: "276",
      },
      {
        name: {
          en: "House Wine Red",
          se: "Husets Vin Rött",
        },
      },
      {
        name: {
          en: "Torre Del Falasco Corvina IGT-Red (Italy)",
          se: "Torre Del Falasco Corvina IGT-Rött",
        },
        description: {
          en: "Medium-bodied wine with notes of blackberries, morels, dark chocolate, cherry pits and brisk acidity and fruity, long aftertaste.",
          se: "Medelfylligt vin med toner av björnbär, moreller, mörk choklad, körsbärskärnor samt pigg syra och fruktig, lång eftersmak.",
        },
        price: "75, 295",
      },
      {
        name: {
          en: "House Wine White",
          se: "Husets Vin Vitt",
        },
        description: {
          en: "Medium-bodied wine with fresh acidity, good concentration as well, mineral rich, long, spicy taste and aftertaste",
          se: "Medelfylligt vin med fräsch syra, bra koncentration samt Mineralrich, lång, kryddig smak och eftersmak.",
        },
        price: "75, 295",
      },
    ],
  },
  red_wine: {
    name: {
      en: "Red Wine",
      se: "Rött Vin",
    },
    items: [
      {
        name: {
          en: "Vina Maipo",
          se: "Vina Maipo",
        },
        sub: [
          {
            name: {
              en: "Cabernet Sauvignon(Chille)",
              se: "Cabernet Sauvignon(Chille)",
            },
            description: {
              en: "This bright ruby red has an attractive aroma of fresh red fruits,with notes of spices and tobacco. The palate is juicy, with harmonic tannins and good aftertaste.",
              se: "Denna ljusa rubinröda har en attraktiv doft av färska röda frukter, med toner av kryddor och tobak. Smaken är saftig, med harmoniska tanniner och god eftersmak.",
            },
            price: "235",
          },
        ],
      },
      {
        name: {
          en: "Costa",
          se: "Costa",
        },
        sub: [
          {
            name: {
              en: "Salento Negroamaro(Italia)",
              se: "Salento Negroamaro(Italia)",
            },
            price: "65, 260",
          },
          {
            name: {
              en: "Grand Vin De Bordeaux (France) Flaska",
              se: "Grand Vin De Bordeaux (France) Flaska",
            },
            price: "395",
          },
          {
            name: {
              en: "Luma Rosso I Sicilia (Italy)",
              se: "Luma Rosso I Sicilia (Italy)",
            },
            price: "265",
          },
          {
            name: {
              en: "Roma Ross (Italian)",
              se: "Roma Ross (Italian)",
            },
            price: "325",
          },
          {
            name: {
              en: "Dark Horse Pinot Noir (USA)",
              se: "Dark Horse Pinot Noir (USA)",
            },
            description: {
              en: "An elegant Pinot Noir with notes of cherry and a layered, flavorful finish.",
              se: "En elegant Pinot Noir med noter av körsbär och en skiktad, smakrik finish.",
            },
            price: "350",
          },
        ],
      },
      {
        name: {
          en: "Vitt Wine",
          se: "Vitt Vin",
        },
        sub: [
          {
            name: {
              en: "LA Merdionale Ordinary Sauvignon",
              se: "LA Merdionale Vanlig Sauvignon",
            },
            description: {
              en: "Wine with aromas of pink grapefruit and lemons.",
              se: "Vin med aromer av rosa grapefrukt och citroner.",
            },
            price: "65, 265",
          },
          {
            name: {
              en: "Bianco Salento (Italian)",
              se: "Bianco Salento (Italien)",
            },
            description: {
              en: "Medium-bodied wine with pleasant warmth, freshness, fruity taste of peaches and melon. Good balance and with a small, fresh aftertaste.",
              se: "Medelfylligt vin med trevlig värme, fräschör, fruktig smak av persikor och melon. Bra balans och med liten, frisk eftersmak.",
            },
          },
          {
            name: {
              en: "Dark Horse Pinot Grigio (USA)",
              se: "Dark Horse Pinot Grigio (USA)",
            },
            description: {
              en: "A dry Pinot Grigio with notes of stonefruit and a balanced, crisp finish.",
              se: "En torr Pinot Grigio med toner av stenfrukt och en balanserad, krispig finish.",
            },
          },
        ],
      },
      {
        name: {
          en: "Rose Wine",
          se: "Rose Vin",
        },
        sub: [
          {
            name: {
              en: "Vina Maipo",
              se: "Vina Maipo",
            },
            description: {
              en: "Bright delicate pink color wine with fruity aromas, especially wild berries and pomegranate. In palate has good acidity, with mineral and fresh red fruits flavors.",
              se: "Ljust, delikat rosa färg vin med fruktiga aromer, särskilt vilda bär och granatäpple. I gommen har bra syra, med mineral och färska röda frukter smaker.",
            },
            price: "235",
          },
        ],
      },
      {
        name: {
          en: "Alcohol Free",
          se: "Alkoholfritt",
        },
        sub: [
          {
            name: {
              en: "Nature Red",
              se: "Nature Red",
            },
            price: "215",
          },
          {
            name: {
              en: "Torre Spanien",
              se: "Torre Spanien",
            },
            description: {
              en: "Light wine with hints of pomegranate, red currants and vanilla.",
              se: "Lätt vin med inslag av granatäpple, röda vinbär och vanilj.",
            },
          },
          {
            name: {
              en: "Chapel Hill Sparkling",
              se: "Chapel Hill Sparkling",
            },
            price: "215",
          },
        ],
      },
    ],
  },
}

export const catering = {
  description: {
    en: "Indulge in a unique dining experience at our separate serving room, connected to our restaurant. Perfect for birthdays, meetings, and private parties. Choose from our extensive menu or rent our event venue for your next gathering. Call us today for more details and to book your special event at our restaurant.",
    se: "Njut av en unik matupplevelse i vårt separata serveringsrum, anslutet till vår restaurang. Perfekt för födelsedagar, möten och privata fester. Välj från vår omfattande meny eller hyr vår evenemangslokal för din nästa sammankomst. Ring oss idag för mer information och för att boka ditt speciella evenemang på vårt restaurang",
  },

  chef_info: {
    title: {
      en: "Food should be",
      se: "Mat ska vara",
    },
    text_one: {
      en: "Abid Khan began his cooking journey in 1991 in Sweden. Today, together with his wife, he runs the Cumin Club restaurants on Södermannagatan and Luntmakargatan in Stockholm. He cooks food from the heart, food that his guests enjoy and that children enjoy.",
      se: "Abid Khan började sin matlagningsresa 1991 i Sverige. Idag driver han, tillsammans med sin fru, restaurangerna Cumin Club på Södermannagatan och på Luntmakargatan i Stockholm. Han lagar mat från hjärtat, mat som hans gäster tycker om och som barn tycker om.",
    },
    text_two: {
      en: "Abid Khan is passionate about his cooking and his own spice mixes. He is careful to make everything from scratch with natural ingredients and spices 'I don't trust ready-made powders,' he says. Once or twice a week he stands and mixes and mortars his various seasonings for Tikka Masala, Korma and the other classic spice mixes.",
      se: "Abid Khan brinner för sin matlagning och sina egna kryddblandningar. Han är noga med att göra allt från grunden med naturliga råvaror och kryddor “Jag litar inte på färdiga pulver”, säger han. En till två gånger per vecka står han och mixar och mortlar sina olika smaksättningar till Tikka Masala, Korma och de andra klassiska kryddblandningarna.",
    },
    text_three: {
      en: "Abid also never uses gluten or lactose (except yogurt) in its food. 'The taste is not in wheat or cream', says Abid. 'I have never used these ingredients in my kitchen,' he continues. It suits today's society very well as Abid has noticed that many of his guests are allergic or want to avoid these particular substances.",
      se: "Abid använder heller aldrig gluten eller laktos (förutom yoghurt) i sin mat. “Smaken sitter inte i vete eller grädde”, menar Abid. “Jag har aldrig använt dessa råvaror i mitt kök”, fortsätter han. Det passar dagens samhälle väldigt bra då Abid märkt att många av hans gäster är allergiker eller vill undvika just dessa ämnen.",
    },
  },

  category: [
    {
      name: {
        en: "Starters & Salads",
        se: "Förrätt och Sallad",
      },
      source: "/starters.png",
      /*description: {
        en: "Choose any 2",
        se: "Välj valfri 2",
      },*/
      items: [
        /*{
          name: {
            en: "Onion Bhaji",
            se: "Onion Bhaji",
          },
          source: "/onion-bhaji.jpg",
          description: {
            en: "Fried onions breaded in chickpea flour.",
            se: "Stekt lök panerad i kikärtsmjöl.",
          },
        },
        {
          name: {
            en: "Papadam",
            se: "Papadam",
          },
          source: "/papadam.jpg",

          description: {
            en: "Crispy lentil bread with mango chutney.",
            se: "Krispigt linsbröd med mango chutney.",
          },
        },
        {
          name: {
            en: "Shekh Kebab",
            se: "Shekh Kebab",
          },
          source: "/shekh-kebab.jpg",
          description: {
            en: "Lamb mince mixed with finely chopped onion, chilli, garlic, coriander and ginger, rolled on a skewer and grilled in a clay oven.",
            se: "Lammmynta blandad med finhakad lök, chili, vitlök, koriander och ingefära, rullad på spett och grillad i leraugn.",
          },
        },
        {
          name: {
            en: "Samosa Chaat",
            se: "Samosa Chaat",
          },
          source: "/samosa-chaat.jpg",

          description: {
            en: "Samosa Chaat - Homemade vegetarian samosa, topped with raita, cucumber, tomato, onion, coriander tamarind sauce and mint chutney.",
            se: "Hemlagad vegetarisk samosa, toppad med raita, gurka, tomat, lök, koriander tamarindsås och mynta cutney.",
          },
        },
        {
          name: {
            en: "Panir Salad",
            se: "Panir Salad",
          },
          source: "/paneer-salad.jpeg",
          description: {
            en: "Mix salad, homemade Indian cheese, olive oil, lime juice.",
            se: "Mix sallad, hemlagad indisk ost, olivolja, limesaft.",
          },
        }, */
      ],
    },
    {
      name: {
        en: "Small Buffet",
        se: "Mindre Buffé",
      },
      source: "/buffet.png",
      items: [
        /*{
          name: {
            en: "Onion Bhaji",
            se: "Onion Bhaji",
          },
          source: "/onion-bhaji.jpg",

          description: {
            en: "Fried onions breaded in chickpea flour.",
            se: "Stekt lök panerad i kikärtsmjöl.",
          },
        },
        {
          name: {
            en: "Papadam",
            se: "Papadam",
          },
          source: "/papadam.jpg",
          description: {
            en: "Crispy lentil bread with mango chutney.",
            se: "Krispigt linsbröd med mango chutney.",
          },
        },
        {
          name: {
            en: "Chicken Tikka Masala",
            se: "Kyckling Tikka Masala",
          },
          source: "/chicken-tikka.jpg",
        },
        {
          name: {
            en: "Mix Vegetarian Masala (Vegan)",
            se: "Mix Vegetarisk Masala (Vegon)",
          },
          source: "/mix-veg.jpeg",

          description: {
            en: "Mixed vegetables in a tomato-based vegetarian vegan sauce.",
            se: "Blandade grönsaker i en tomatbaserad vegetarisk vegon sås.",
          },
        },
        {
          name: {
            en: "Naan Bread",
            se: "Naanbröd",
          },
          source: "/naan.jpg",
        }, */
      ],
      price: "   ",
      delivery: {
        en: "   ",
        se: "   ",
      },
    },
    {
      name: {
        en: "Main Course ",
        se: "Huvudrets ",
      },
      source: "/main-course.png",
      description: {
        en: " ",
        se: " ",
      },
      items: [
        /*{
          name: {
            en: "Mixed Chicken Grill",
            se: "Mixed Kyckling Grill",
          },
          source: "/mixed-grill.jpg",
          description: {
            en: "Chicken fillet marinated in tandoori, garlic and green chili, grilled in a clay oven and served with rice, fresh vegetables and sauce",
            se: "Kycklingfilé marinerad i tandoori, vitlök och grön chili, grillad i leraugn och serveras med ris, färska grönsaker och sås",
          },
        },
        {
          name: {
            en: "Vindaloo Steak",
            se: "Vindaloo Steak",
          },
          source: "/vindaloo-steak.jpg",

          description: {
            en: "A very hearty South Indian dish served with rice",
            se: "En mycket stark maträtt från södra Indien serverad medris",
          },
        },
        {
          name: {
            en: "Chicken Tikka Butter Masala",
            se: "Kyckling Tikka Butter Masala",
          },
          source: "/chicken-butter.jpeg",

          description: {
            en: "Grilled chicken breast fillet cooked with butter fried spices served with rice",
            se: "Grillad kycklingbröstfilé tillagad med smörstekt kryddor serverad med ris",
          },
        },
        {
          name: {
            en: "Biryani",
            se: "Biryani",
          },
          source: "/biryani.jpeg",
          description: {
            en: "Indian saffron risotto with oriental spices. Choose between steak and vegetarian. Served with masala sauce and vegetables",
            se: "Indisk saffranrisotto med orientaliska kryddor. Välj mellan biff och vegetarian. Serveras med masalasås och grönsaker",
          },
        },
        {
          name: {
            en: "Palak Panir",
            se: "Palak Panir",
          },
          source: "/palak-paneer.jpg",
          description: {
            en: "Homemade cream cheese cooked with spinach served with rice.",
            se: "Hemlagad gräddost tillagad med spenat serverad med ris.",
          },
        },
        {
          name: {
            en: "Vegan Kofte",
            se: "Vegan Kofte",
          },
          source: "/veg-kofte.jpg",
          description: {
            en: "Vegetable buns in a spinach sauce (gluten and dairy free)",
            se: "Vegetabiliska bullar i en spenatsås (gluten- och mjölkfri)",
          },
        }, */
      ],
    },
    {
      name: {
        se: "Dessert",
        en: "Dessert",
      },
      source: "/dessert.png",
      description: {
        en: " ",
        se: " ",
      },
      items: [
        /*{
          name: {
            en: "",
            se: "",
          },
          source: "/gulab-jamun.jpg",

          description: {
            en: "",
            se: "",
          },
        },
        {
          name: {
            en: "",
            se: "",
          },
          source: "/fruit-vanilla.jpg",
        },
        {
          name: {
            en: "",
            se: "",
          },
          source: "/gajar-halwa.jpg",
          description: {
            en: "",
            se: "",
          },
        },*/
      ],
    },
  ],
}

export const about_us = {
  about_us: {
    en: "About Us",
    se: "Om Oss",
  },
  first_description: {
    en: "You will witness God shaping the divided seas as we bring together our own divided forms, ultimately replenishing them by the end of this process.",
    se: "Du kommer att bevittna hur Gud formar de delade haven när vi sammanför våra egna delade former, och till slut fyller på dem i slutet av denna process.",
  },
  fast_service: {
    en: "Fast Service",
    se: "Snabb Service",
  },
  fresh_food: {
    en: "Fresh Food",
    se: "Färsk mat",
  },
  fast_support: {
    en: "Fast Support",
    se: "Snabb Support",
  },
  second_title: {
    en: "We Speak the Language of Foods",
    se: "Vi talar matens språk",
  },
  second_description: {
    en: "Welcome to The Table Himalaya, where culinary artistry meets a warm and inviting atmosphere. Nestled in the heart of Stockholm, our restaurant is a gastronomic haven that promises an unforgettable dining experience. From the moment you step through our doors, you'll be transported into a world of exquisite flavors, impeccable service, and a welcoming ambiance that feels like home. Whether you're seeking a romantic dinner for two, a memorable celebration with friends and family, or simply a delightful meal to savor, we invite you to join us and indulge in a culinary journey that celebrates the finest in food and hospitality.",
    se: "Välkommen till The Table Himalaya, där kulinariskt konstnärskap möter en varm och inbjudande atmosfär. Inbäddat i hjärtat av Stockholm är vår restaurang en gastronomisk fristad som utlovar en oförglömlig matupplevelse. Från det ögonblick du kliver in genom våra dörrar kommer du att transporteras in i en värld av utsökta smaker, oklanderlig service och en välkomnande atmosfär som känns som hemma. Oavsett om du letar efter en romantisk middag för två, en minnesvärd fest med vänner och familj, eller bara en härlig måltid att njuta av, bjuder vi in ​​dig att gå med oss ​​och njuta av en kulinarisk resa som firar det finaste inom mat och gästfrihet.",
  },
  featured_food: {
    en: "Featured Food",
    se: "Utvald Mat",
  },
  featured_food_info: {
    en: "Fresh taste and great price",
    se: "Fräsch smak och bra pris",
  },
}

export const messages = {
  information: {
    lunch: {
      title: {
        en: "Dear customers!",
        se: "Kära kunder!",
      },
      message: {
        en: "We will start serving Lunch Buffet from August 19, 2024.",
        se: "Vi börjar servera Lunch Buffé från och med 19 Augusti, 2024.",
      },
      footer: {
        en: "You are warmly welcome.",
        se: "Ni är varmt välkomna.",
      }
    }
  }
}
